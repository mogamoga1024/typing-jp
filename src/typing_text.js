import moji from "moji";
import { createCharChain } from "./char/char_chain.js";
import { createChar } from "./char/char_factory.js";
import { EmptyTextError } from "./error/empty_text_error.js";
import { NoRemainingInputError } from "./error/no_remaining_input_error.js";
import { CHAR_UNMATCH, CHAR_INCOMPLETE, CHAR_COMPLETE, CHAR_PARTIALLY_COMPLETE } from "./constants/char_status.js";
import { TEXT_UNMATCH, TEXT_INCOMPLETE, TEXT_COMPLETE } from "./constants/text_status.js";

export class TypingText {
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

    constructor(_text, ignoreSpace = true) {
        const tmpText = ignoreSpace ? _text.replace(/\s|　/g, "") : _text.replace(/\t\f\r\n/g, "");
        if (tmpText === "") {
            throw new EmptyTextError();
        }

        // カタカタをひらがなに変換する
        this.#text = moji(tmpText).convert("HK", "ZK").convert("KK", "HG").toString();
        
        // console.log(this.#text);

        this.char = createCharChain(this.#text);
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

        const result = this.char.inputRoman(key, isCapsLock);

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

    #updateExpectRoman(key, isCharComplete = false) {
        if (this.char === null) {
            this.#remainingRoman = "";
            return;
        }

        let prevExpectRoman = "";
        if (!isCharComplete && this.char.name === "っ") {
            this.#remainingRoman = this.char.expectRoman(key).slice(this.char.nextExpectRomanIndex);
            if (this.char.isSpecial) {
                prevExpectRoman = key;
            }
        }
        else {
            this.#remainingRoman = this.char.expectRoman().slice(this.char.nextExpectRomanIndex);
        }

        let tmpChar = this.char.nextChar;
        while (tmpChar !== null) {
            const expectRoman = tmpChar.expectRoman(prevExpectRoman);
            prevExpectRoman = "";
            this.#remainingRoman += expectRoman;
            tmpChar = tmpChar.nextChar;
        }
    }
}
