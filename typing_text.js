
export class TypingText {

    constructor() {
        this.char = TypingManager.createCharChain(text);
        this.remainExpectRoman = "";

        let tmpChar = this.char;
        while (tmpChar !== null) {
            this.remainExpectRoman += tmpChar.expectRoman();
            tmpChar = tmpChar.nextChar;
        }
    }

    // get remainingRomanInput() {
    //     // todo
    //     return "";
    // }

    isValidInputKey(key) {
        return key.match(/^([A-Za-z0-9]|-|!|\?|'|"|\.|,|\[|\])$/) !== null;
    }

    inputKey(key) {
        if (this.char === null) return "complete";

        const oldCharExpectRomanLength = this.char.expectRoman().length;
        const result = this.char.inputRoman(key);

        switch (result) {
            case "failure": return "failure";
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
