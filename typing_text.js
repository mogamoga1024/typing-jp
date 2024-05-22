import { createCharChain } from "./char_chain.js";
import { createChar } from "./char_factory.js";
import { NoRemainingInputError } from "./no_remaining_input_error.js";

export class TypingText {
    #remainingRoman = "";
    get remainingRoman() {
        return this.#remainingRoman;
    }

    constructor(text) {
        this.char = createCharChain(text);
        this.#remainingRoman = "";

        let tmpChar = this.char;
        while (tmpChar !== null) {
            this.#remainingRoman += tmpChar.expectRoman();
            tmpChar = tmpChar.nextChar;
        }
    }

    static isValidInputKey(key) {
        return key.match(/^([A-Za-z0-9]|-|!|\?|'|"|\.|,|\[|\])$/) !== null;
    }

    inputKey(key) {
        if (this.char === null) {
            throw new NoRemainingInputError();
        }

        const oldCharExpectRomanLength = this.char.expectRoman().length;
        const result = this.char.inputRoman(key);

        switch (result) {
            case "unmatch": return "unmatch";
            case "incomplete":
                this.#updateExpectRoman(oldCharExpectRomanLength);
                return "incomplete";
            case "complete":
                const preChar = this.char;
                this.char = this.char.nextChar;
                this.#updateExpectRoman(oldCharExpectRomanLength, preChar);
                return this.#remainingRoman === "" ? "complete" : "incomplete";
            default:
                const oldChar = this.char;
                this.char = result;
                this.#updateExpectRoman(oldChar);
                return "incomplete";
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
