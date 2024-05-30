import { CharJp } from "./char_jp.js";
import { CHAR_UNMATCH, CHAR_COMPLETE, CHAR_PARTIALLY_COMPLETE } from "../constants/char_status.js";

export class CharJpXtu extends CharJp {
    constructor() {
        super("っ", ["xtu", "xtsu", "ltu", "ltsu"]);
        this.regex = /^(?=[a-z])(?!(a|i|u|e|o|n)).$/;
    }

    expectRoman() {
        if (this.nextChar === null || this.nextChar.name === "っ") {
            return super.expectRoman();
        }
        if (/^[a-zA-Z]$/.test(this.nextChar.name)) {
            return super.expectRoman();
        }
        const nextCharFirstRoman = this.nextChar.expectRoman()[0];
        if (nextCharFirstRoman === "x" || nextCharFirstRoman === "l") {
            return nextCharFirstRoman;
        }
        else {
            if (this.nextExpectRomanIndex > 0) {
                return this.expectRomanArray[0];
            }
            if (this.regex.test(nextCharFirstRoman)) {
                return nextCharFirstRoman;
            }
        }
        
        return super.expectRoman();
    }
    
    inputRoman(_roman, isCapsLock = false) {
        const roman = isCapsLock && this.ignoreCapsLock ? _roman.toLowerCase() : _roman;
        const result = super.inputRoman(roman);

        const isBadXXorLL = result === CHAR_UNMATCH && (roman === "x" || roman === "l"); 

        if (!isBadXXorLL && this.nextExpectRomanIndex > 0) {
            return result;
        }

        // 連続系 「ssu」みたいなやつ
    
        if (this.nextChar == null) {
            return CHAR_UNMATCH;
        }

        if (this.nextChar.name === "っ") {
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

        if (!isBadXXorLL) {
            this.nextChar.nextExpectRomanIndex = 0;
        }
        
        if (this.nextChar.divisionCharChain !== null) {
            this.nextChar.divisionCharChain.inputRoman(roman);
            this.nextChar.divisionCharChain.nextExpectRomanIndex = 0;
        }

        return CHAR_PARTIALLY_COMPLETE;
    }
}
