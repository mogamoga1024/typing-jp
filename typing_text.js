import { TypingManager } from "./typing_manager.js";

export class TypingText {
    #remainingRomanInput = "";
    get remainingRomanInput() {
        return this.#remainingRomanInput;
    }

    constructor(text) {
        this.char = TypingManager.createCharChain(text);
        this.#remainingRomanInput = "";

        let tmpChar = this.char;
        while (tmpChar !== null) {
            this.#remainingRomanInput += tmpChar.expectRoman();
            tmpChar = tmpChar.nextChar;
        }
    }

    isValidInputKey(key) {
        return key.match(/^([A-Za-z0-9]|-|!|\?|'|"|\.|,|\[|\])$/) !== null;
    }

    inputKey(key) {
        if (this.char === null) return "complete";

        const oldCharExpectRomanLength = this.char.expectRoman().length;
        const result = this.char.inputRoman(key);

        switch (result) {
            case "unmatch": return "unmatch";
            case "incomplete":
                this.updateExpectRoman(oldCharExpectRomanLength);
                return "incomplete";
            case "complete":
                const preChar = this.char;
                this.char = this.char.nextChar;
                this.updateExpectRoman(oldCharExpectRomanLength, preChar);
                return this.remainExpectRoman === "" ? "complete" : "incomplete";
            default:
                const oldChar = this.char;
                this.char = result;
                this.updateExpectRoman(oldChar);
                return "incomplete";
        }
    }
}
