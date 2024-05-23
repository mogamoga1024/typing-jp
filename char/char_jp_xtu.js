import { Char } from "./char.js";
import { CHAR_UNMATCH, CHAR_COMPLETE } from "../constants/char_status.js";

export class CharJpXtu extends Char {
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
        if (/^[a-zA-Z]$/.test(this.nextChar.name)) {
            return super.expectRoman();
        }
        const nextCharFirstRoman = this.nextChar.expectRoman()[0];
        if (this.regex.test(nextCharFirstRoman)) {
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
        
        if (!this.regex.test(roman)) {
            return CHAR_UNMATCH;
        }
        if (/^[a-zA-Z]$/.test(this.nextChar.name)) {
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
