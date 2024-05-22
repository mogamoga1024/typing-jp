import { Char } from "./char.js";
import { CHAR_UNMATCH, CHAR_COMPLETE } from "../constants/char_status.js";

export class CharHiraXtu extends Char {
    constructor() {
        super("っ", ["xtu", "ltu", "ltsu"]);
        this.regex = /^(?=[a-z])(?!(a|i|u|e|o|n)).$/;
    }

    expectRoman() {
        if (this.nextChar === null) {
            return super.expectRoman();
        }
        if (this.nextExpectRomanIndex > 0) {
            return this.expectRomanArray[0];
        }
        if (this.nextChar.name.match(/^[a-zA-Z]$/) !== null) {
            return super.expectRoman();
        }
        const nextCharFirstRoman = this.nextChar.expectRoman()[0];
        if (nextCharFirstRoman.match(this.regex) !== null) {
            return nextCharFirstRoman;
        }
    
        return super.expectRoman();
    }
    
    inputRoman(roman) {
        const result = super.inputRoman(roman);
        if (this.nextExpectRomanIndex > 0) {
            return result;
        }
    
        if (this.nextChar == null) {
            return CHAR_UNMATCH;
        }
        
        if (roman.match(this.regex) === null) {
            return CHAR_UNMATCH;
        }
        if (this.nextChar.name.match(/^[a-zA-Z]$/) !== null) {
            return CHAR_UNMATCH;
        }
    
        if (this.nextChar.inputRoman(roman) === CHAR_UNMATCH) {
            return CHAR_UNMATCH;
        }
        this.nextChar.nextExpectRomanIndex = 0;
        if (this.nextChar.divisionCharChain !== null) {
            this.nextChar.divisionCharChain.inputRoman(roman);
            this.nextChar.divisionCharChain.nextExpectRomanIndex = 0;
        }
    
        return CHAR_COMPLETE;
    }
}
