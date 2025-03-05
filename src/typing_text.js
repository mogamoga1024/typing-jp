import moji from "moji";
import { createCharChain } from "./char/char_chain.js";
import { EmptyTextError } from "./error/empty_text_error.js";
import { NoRemainingInputError } from "./error/no_remaining_input_error.js";
import { CHAR_UNMATCH, CHAR_INCOMPLETE, CHAR_COMPLETE, CHAR_PARTIALLY_COMPLETE } from "./constants/char_status.js";
import { TEXT_UNMATCH, TEXT_INCOMPLETE, TEXT_COMPLETE } from "./constants/text_status.js";

export class TypingText {
    #priority = null;

    #text = "";
    get text() {
        return this.#text;
    }

    #completedText = "";
    get completedText() {
        return this.#completedText;
    }

    get remainingText() {
        return this.text.substring(this.#completedText.length);
    }

    #roman = "";
    get roman() {
        return this.#roman;
    }

    #completedRoman = "";
    get completedRoman() {
        return this.#completedRoman;
    }

    #remainingRoman = "";
    get remainingRoman() {
        return this.#remainingRoman;
    }

    #wasCharPartiallyComplete = false;

    constructor(...args) {
        const length = args.length;
        if (length === 1) {
            this.#initText(args[0]);
            this.#initRoman();
        }
        else if (length === 2) {
            if (args[1] === true || args[1] === false) {
                this.#initText(args[0], args[1]);
                this.#initRoman();
            }
            else {
                this.#initText(args[0], true);
                this.#initRoman(args[1]);
            }
        }
        else if (length === 3) {
            this.#initText(args[0], args[1]);
            this.#initRoman(args[2]);
        }
        else {
            // エラーになるが別にいい。不正な入力なので。
            this.#initText();
            this.#initRoman();
        }
    }

    #initText(_text, ignoreSpace = true) {
        let tmpText = ignoreSpace ? _text.replace(/\s|　/g, "") : _text.replace(/\t\f\r\n/g, "");
        if (tmpText === "") {
            throw new EmptyTextError();
        }

        const zenkakuAlphanumeric = "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ０１２３４５６７８９";
        const hankakuAlphanumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (const char of tmpText) {
            const index = zenkakuAlphanumeric.indexOf(char);
            if (index !== -1) {
                this.#text += hankakuAlphanumeric[index];
            }
            else {
                this.#text += char;
            }
        }

        // カタカタをひらがなに変換する
        this.#text = moji(this.#text).convert("HK", "ZK").convert("KK", "HG").toString();
    }

    #initRoman(priority = {}) {
        this.#priority = priority;
        this.char = createCharChain(this.#text, priority);
        this.#remainingRoman = "";

        let tmpChar = this.char;
        let prevExpectRoman = "";
        while (tmpChar !== null) {
            const expectRoman = tmpChar.expectRoman(prevExpectRoman);
            if (tmpChar.name === "っ" && tmpChar.isSpecial) {
                prevExpectRoman = expectRoman;
            }
            else {
                prevExpectRoman = "";
            }
            this.#remainingRoman += expectRoman;
            tmpChar = tmpChar.nextChar;
        }
        this.#roman = this.#remainingRoman;
    }

    static isValidInputKey(key) {
        // ASCIIで目で見れる文字かどうか
        // 要するにキーボードの文字を入力するキーかどうか
        return /^[ -~]$/.test(key);
    }

    inputKey(key, isCapsLock = false) {
        if (this.char === null) {
            throw new NoRemainingInputError();
        }

        let result = CHAR_UNMATCH;
        // CapsLockを無視しない かつ CapsLockがON かつ 小文字のアルファベットは駄目
        if (!this.char.ignoreCapsLock && isCapsLock && /^[a-z]+$/.test(key)) {
            // noop
        }
        else {
            result = this.char.inputRoman(key, isCapsLock);
        }

        switch (result) {
            case CHAR_UNMATCH: return TEXT_UNMATCH;

            case CHAR_INCOMPLETE:
                this.#completedRoman += key;
                this.#updateExpectRoman(key);
                // console.log("CHAR_INCOMPLETE", key, this.#completedText);
                // console.log("CHAR_INCOMPLETE", key, this.#remainingRoman);
                return TEXT_INCOMPLETE;
            
            case CHAR_PARTIALLY_COMPLETE: {
                this.#wasCharPartiallyComplete = true;
                this.#completedRoman += key;
                if (this.char.nextChar.expectRomanArray[0][0] === key) {
                    this.char = this.char.nextChar;
                }
                else {
                    this.char = this.char.nextChar.divisionCharChain;
                }
                this.#updateExpectRoman(key);
                // console.log("CHAR_PARTIALLY_COMPLETE", key, this.#completedText);
                // console.log("CHAR_PARTIALLY_COMPLETE", key, this.#remainingRoman);
                return TEXT_INCOMPLETE;
            }

            case CHAR_COMPLETE: {
                if (this.#wasCharPartiallyComplete) {
                    this.#wasCharPartiallyComplete = false;
                    this.#completedText += "っ";
                    this.#completedText += this.char.name;
                }
                else if (this.char.name === "ん") {
                    this.#completedText += "ん";
                    for (const expectRoman of this.char.expectRomanArray) {
                        if (key !== expectRoman.at(-1)) {
                            this.#completedText += this.char.nextChar.name;
                            break;
                        }
                    }
                }
                else {
                    this.#completedText += this.char.name;
                }
                this.#completedRoman += key;
                this.char = this.char.nextChar;
                this.#updateExpectRoman(key, true);
                // console.log("CHAR_COMPLETE", key, this.#completedText);
                // console.log("CHAR_COMPLETE", key, this.#remainingRoman);
                return this.#remainingRoman === "" ? TEXT_COMPLETE : TEXT_INCOMPLETE;
            }

            default:
                if (this.char.name === "ん") {
                    for (const expectRoman of this.char.expectRomanArray) {
                        if (key !== expectRoman.at(-1)) {
                            this.#completedText += "ん";
                            if (this.char.nextChar !== result) {
                                this.#completedText += this.char.nextChar.name;
                            }
                            break;
                        }
                    }
                }
                else if (this.#wasCharPartiallyComplete) {
                    this.#wasCharPartiallyComplete = false;
                    this.#completedText += "っ";
                }
                if (this.char.divisionCharChain && result !== this.char.divisionCharChain) {
                    this.#completedText += this.char.name.slice(0, -result.name.length);
                }
                
                this.#completedRoman += key;
                this.char = result;
                this.#updateExpectRoman(key);
                // console.log("default", key, this.#completedText);
                // console.log("default", key, this.#remainingRoman);
                return TEXT_INCOMPLETE;
        }
    }

    undo() {
        /*
        再生成しているだけなため、あまり賢い方法ではない。
        ただし、一文字消しても整合性が保たれ、かつ問題なく動くコードを書くことは
        非常に面倒くさいため現状はこれ。
        */

        const completedRoman = this.#completedRoman.slice(0, -1);
        this.#completedText = "";
        this.#completedRoman = "";

        this.#initRoman(this.#priority);

        for (const key of completedRoman) {
            this.inputKey(key, true);
        }
    }

    #updateExpectRoman(key, isCharComplete = false) {
        if (this.char === null) {
            this.#remainingRoman = "";
            return;
        }

        let prevExpectRoman = "";
        if (this.char.name === "っ") {
            if (isCharComplete) {
                this.#remainingRoman = this.char.expectRoman().slice(this.char.nextExpectRomanIndex);
                if (this.char.isSpecial) {
                    prevExpectRoman = this.#remainingRoman;
                }
            }
            else {
                this.#remainingRoman = this.char.expectRoman(key).slice(this.char.nextExpectRomanIndex);
                if (this.char.isSpecial) {
                    prevExpectRoman = key;
                }
            }
        }
        else {
            this.#remainingRoman = this.char.expectRoman().slice(this.char.nextExpectRomanIndex);
        }

        let tmpChar = this.char.nextChar;
        while (tmpChar !== null) {
            const expectRoman = tmpChar.expectRoman(prevExpectRoman);
            if (tmpChar.name === "っ" && tmpChar.isSpecial) {
                prevExpectRoman = expectRoman;
            }
            else {
                prevExpectRoman = "";
            }
            this.#remainingRoman += expectRoman;
            tmpChar = tmpChar.nextChar;
        }
    }
}
