import { createCharChain } from "./char_chain.js";

export class TypingText {
    #remainingRomanInput = "";
    get remainingRomanInput() {
        return this.#remainingRomanInput;
    }

    constructor(text) {
        this.char = createCharChain(text);
        this.#remainingRomanInput = "";

        let tmpChar = this.char;
        while (tmpChar !== null) {
            this.#remainingRomanInput += tmpChar.expectRoman();
            tmpChar = tmpChar.nextChar;
        }
    }

    static isValidInputKey(key) {
        return key.match(/^([A-Za-z0-9]|-|!|\?|'|"|\.|,|\[|\])$/) !== null;
    }

    inputKey(key) {
        if (this.char === null) return "complete";

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
                return this.#remainingRomanInput === "" ? "complete" : "incomplete";
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
                        const oldCharExpectRoman = CharFactory.create(this.char.name).expectRoman();
                        const charExpectRoman = this.char.expectRoman();
                        if (oldCharExpectRoman[0] !== charExpectRoman[0]) {
                            this.#remainingRomanInput = charExpectRoman + this.#remainingRomanInput.slice(oldCharExpectRoman.length + 1);
                            return;
                        }
                    }
                    this.#remainingRomanInput = this.#remainingRomanInput.slice(1);
                    return;
                }
    
                const removeRomanCount = oldCharExpectRomanLength - targetChar.nextExpectRomanIndex + 1;
                const tmpRemainExpectRoman = preChar === undefined ? charExpectRoman.slice(this.char.nextExpectRomanIndex) : "";
    
                this.#remainingRomanInput = tmpRemainExpectRoman + this.#remainingRomanInput.slice(removeRomanCount);
                return;
    
            case "object":
                const oldChar = param;
    
                if (oldChar.name === "ん") {
                    if (oldChar.nextChar !== this.char) {
                        this.#remainingRomanInput = this.#remainingRomanInput.slice(1);
                    }
                    else {
                        const char = CharFactory.create(this.char.name);
                        const tmpRemainExpectRoman1 = this.char.expectRoman().slice(1);
                        const tmpRemainExpectRoman2 = this.#remainingRomanInput.slice(char.expectRoman().length);
                        this.#remainingRomanInput = tmpRemainExpectRoman1 + tmpRemainExpectRoman2;
                    }
                    return;
                }
    
                let tmpRemainExpectRoman1 = "";
                const tmpRemainExpectRoman2 = this.#remainingRomanInput.slice(
                    oldChar.expectRoman().length - oldChar.nextExpectRomanIndex
                );
                let tmpChar = this.char;
                while (true) {
                    tmpRemainExpectRoman1 += tmpChar.expectRoman();
                    if (tmpChar.nextChar === oldChar.nextChar) break;
                    tmpChar = tmpChar.nextChar;
                    if (tmpChar.nextChar === oldChar.nextChar) break;
                }
                this.#remainingRomanInput = tmpRemainExpectRoman1 + tmpRemainExpectRoman2;
                return;
        }
    }
}
