import { Char } from "./char.js";
import { CHAR_UNMATCH, CHAR_INCOMPLETE, CHAR_COMPLETE } from "../constants/char_status.js";

export class CharHiraN extends Char {
    constructor() {
        super("ん", ["nn", "n'", "xn"]);
    }

    expectRoman() {
        if (this.nextChar === null) {
            return Char.prototype.expectRoman.call(this);
        }
        const nextCharFirstRoman = this.nextChar.expectRoman()[0];
        if (nextCharFirstRoman.match(/^(n|'|a|i|u|e|o|y)$/) !== null) {
            return Char.prototype.expectRoman.call(this);
        }
        if (
            this.nextExpectRomanIndex > 1 ||
            this.nextExpectRomanIndex === 1 && this.expectRomanArray[0][0] === "x"
        ) {
            return this.expectRomanArray[0];
        }
        return "n";
    }

    inputRoman(roman) {
        const result = Char.prototype.inputRoman.call(this, roman);
    
        if (result !== CHAR_UNMATCH || this.nextExpectRomanIndex === 0 || this.nextChar === null) {
            return result;
        }
    
        if (this.nextChar.expectRoman()[0].match(/^(a|i|u|e|o|y)$/) !== null) {
            return CHAR_UNMATCH;
        }
    
        switch (this.nextChar.inputRoman(roman)) {
            case CHAR_UNMATCH: return CHAR_UNMATCH;
            case CHAR_INCOMPLETE: return this.nextChar;
            case CHAR_COMPLETE: return this.nextChar.nextChar === null ? CHAR_COMPLETE : this.nextChar.nextChar;
        }
    }
}
