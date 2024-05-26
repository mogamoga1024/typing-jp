import moji from "moji";
import { createCharChain } from "./char/char_chain.js";
import { createChar } from "./char/char_factory.js";
import { EmptyTextError } from "./error/empty_text_error.js";
import { NoRemainingInputError } from "./error/no_remaining_input_error.js";
import { CHAR_UNMATCH, CHAR_INCOMPLETE, CHAR_COMPLETE } from "./constants/char_status.js";
import { TEXT_UNMATCH, TEXT_INCOMPLETE, TEXT_COMPLETE } from "./constants/text_status.js";

export class TypingText {
    #text = "";
    get text() {
        return this.#text;
    }

    #roman = "";
    get roman() {
        return this.#roman;
    }

    #remainingRoman = "";
    get remainingRoman() {
        return this.#remainingRoman;
    }

    constructor(_text, ignoreSpace = true) {
        const tmpText = ignoreSpace ? _text.replace(/\s|　/g, "") : _text.replace(/\t\f\r\n/g, "");
        if (tmpText === "") {
            throw new EmptyTextError();
        }

        // カタカタをひらがなに変換する
        this.#text = moji(tmpText).convert("HK", "ZK").convert("KK", "HG").toString();
        
        this.char = createCharChain(this.#text);
        this.#remainingRoman = "";

        let tmpChar = this.char;
        while (tmpChar !== null) {
            this.#remainingRoman += tmpChar.expectRoman();
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

        const oldCharExpectRomanLength = this.char.expectRoman().length;
        const result = this.char.inputRoman(key, isCapsLock);

        switch (result) {
            case CHAR_UNMATCH: return TEXT_UNMATCH;
            case CHAR_INCOMPLETE:
                this.#updateExpectRoman(oldCharExpectRomanLength);
                return TEXT_INCOMPLETE;
            case CHAR_COMPLETE:
                const preChar = this.char;
                this.char = this.char.nextChar;
                this.#updateExpectRoman(oldCharExpectRomanLength, preChar);
                return this.#remainingRoman === "" ? TEXT_COMPLETE : TEXT_INCOMPLETE;
            default:
                const oldChar = this.char;
                this.char = result;
                this.#updateExpectRoman(oldChar);
                return TEXT_INCOMPLETE;
        }
    }

    #updateExpectRoman(param, preChar) {
        switch (typeof(param)) {
            case "number":
                const oldCharExpectRomanLength = param;
                const targetChar = preChar === undefined ? this.char : preChar;
                const charExpectRoman = targetChar.expectRoman();
                
                if (oldCharExpectRomanLength === charExpectRoman.length) {
                    if (targetChar.name === "っ" && oldCharExpectRomanLength === 1) {
                        const oldCharExpectRoman = createChar(this.char.name).expectRoman();
                        const charExpectRoman = this.char.expectRoman();
                        if (oldCharExpectRoman[0] !== charExpectRoman[0]) {
                            this.#remainingRoman = charExpectRoman + this.#remainingRoman.slice(oldCharExpectRoman.length + 1);
                            return;
                        }
                    }
                    this.#remainingRoman = this.#remainingRoman.slice(1);
                    return;
                }
    
                const removeRomanCount = oldCharExpectRomanLength - targetChar.nextExpectRomanIndex + 1;
                const tmpRemainExpectRoman = preChar === undefined ? charExpectRoman.slice(this.char.nextExpectRomanIndex) : "";
    
                this.#remainingRoman = tmpRemainExpectRoman + this.#remainingRoman.slice(removeRomanCount);
                return;
    
            case "object":
                const oldChar = param;
    
                if (oldChar.name === "ん") {
                    if (oldChar.nextChar !== this.char) {
                        this.#remainingRoman = this.#remainingRoman.slice(1);
                    }
                    else {
                        const char = createChar(this.char.name);
                        const tmpRemainExpectRoman1 = this.char.expectRoman().slice(1);
                        const tmpRemainExpectRoman2 = this.#remainingRoman.slice(char.expectRoman().length);
                        this.#remainingRoman = tmpRemainExpectRoman1 + tmpRemainExpectRoman2;
                    }
                    return;
                }
    
                let tmpRemainExpectRoman1 = "";
                const tmpRemainExpectRoman2 = this.#remainingRoman.slice(
                    oldChar.expectRoman().length - oldChar.nextExpectRomanIndex
                );
                let tmpChar = this.char;
                while (true) {
                    tmpRemainExpectRoman1 += tmpChar.expectRoman();
                    if (tmpChar.nextChar === oldChar.nextChar) break;
                    tmpChar = tmpChar.nextChar;
                    if (tmpChar.nextChar === oldChar.nextChar) break;
                }
                this.#remainingRoman = tmpRemainExpectRoman1 + tmpRemainExpectRoman2;
                return;
        }
    }
}
