import { CharZen } from "./char_zen.js";
import { CHAR_UNMATCH, CHAR_INCOMPLETE, CHAR_COMPLETE } from "../constants/char_status.js";

export class CharZenN extends CharZen {
    constructor(name, expectRomanArray, priority) {
        super(name, expectRomanArray, priority);
    }

    expectRoman(roman = "") {
        if (this.nextChar === null) {
            return super.expectRoman(roman);
        }
        if (!(this.nextChar instanceof CharZen)) {
            return super.expectRoman(roman);
        }
        const nextCharFirstRoman = this.nextChar.expectRoman()[0];
        if (/^(n|'|a|i|u|e|o|y| )$/.test(nextCharFirstRoman)) {
            return super.expectRoman(roman);
        }
        if (
            this.nextExpectRomanIndex > 1 ||
            this.nextExpectRomanIndex === 1 && this.expectRomanArray[0][0] === "x"
        ) {
            return this.expectRomanArray[0];
        }
        return "n";
    }

    inputRoman(_roman, isCapsLock = false) {
        const roman = isCapsLock && !this.ignoreCapsLock ? _roman.toLowerCase() : _roman;
        const result = super.inputRoman(roman);
    
        if (result !== CHAR_UNMATCH || this.nextExpectRomanIndex === 0 || this.nextChar === null) {
            return result;
        }
    
        if (!(this.nextChar instanceof CharZen)) {
            return CHAR_UNMATCH;
        }
        if (/^(a|i|u|e|o|y| )$/.test(this.nextChar.expectRoman()[0])) {
            return CHAR_UNMATCH;
        }
    
        switch (this.nextChar.inputRoman(roman)) {
            case CHAR_UNMATCH: return CHAR_UNMATCH;
            case CHAR_INCOMPLETE: return this.nextChar;
            case CHAR_COMPLETE: return this.nextChar.nextChar === null ? CHAR_COMPLETE : this.nextChar.nextChar;
        }
    }
}
