import { CharZen } from "./char_zen.js";
import { CHAR_UNMATCH, CHAR_COMPLETE, CHAR_PARTIALLY_COMPLETE } from "../constants/char_status.js";

export class CharZenXtu extends CharZen {
    #prevInputRoman = "";

    constructor(name, expectRomanArray) {
        super(name, expectRomanArray);
        this.regex = /^(?=[a-z])(?!(a|i|u|e|o|n)).$/;
        this.isSpecial = false;
    }

    expectRoman(roman = "") {
        this.isSpecial = false;

        if (this.nextChar === null || this.nextChar.name === "っ") {
            return super.expectRoman();
        }
        if (/^[a-zA-Z]$/.test(this.nextChar.name)) {
            return super.expectRoman();
        }
        let nextCharFirstRoman = "";
        if (roman === "x" || roman === "l") {
            const nextCharExpectRomanArray = this.nextChar.expectRomanArray.filter(
                expectRoman => expectRoman[0] === roman
            );
            if (nextCharExpectRomanArray.length > 0) {
                nextCharFirstRoman = nextCharExpectRomanArray[0][0];
            }
            else {
                nextCharFirstRoman = this.#getNextCharFirstRoman();
            }
        }
        else {
            nextCharFirstRoman = this.#getNextCharFirstRoman();
        }
        if (roman === "x" && nextCharFirstRoman === "x" || roman === "l" && nextCharFirstRoman === "l") {
            this.isSpecial = true;
            return nextCharFirstRoman;
        }
        else {
            if (this.nextExpectRomanIndex > 0) {
                return this.expectRomanArray[0];
            }
            if (nextCharFirstRoman !== "") {
                this.isSpecial = true;
                return nextCharFirstRoman;
            }
        }
        
        return super.expectRoman();
    }

    #getNextCharFirstRoman() {
        const nextCharExpectRomanArray = this.nextChar.expectRomanArray.filter(
            expectRoman => this.regex.test(expectRoman[0])
        );
        if (nextCharExpectRomanArray.length > 0) {
            return nextCharExpectRomanArray[0][0];
        }
        else {
            return "";
        }
    }
    
    inputRoman(_roman, isCapsLock = false) {
        const roman = isCapsLock && this.ignoreCapsLock ? _roman.toLowerCase() : _roman;
        const result = super.inputRoman(roman);

        const isBadXXorLL = result === CHAR_UNMATCH && (roman === "x" || roman === "l"); 

        if (!isBadXXorLL && this.nextExpectRomanIndex > 0) {
            this.#prevInputRoman = roman;
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

        if (this.#prevInputRoman === "x" || this.#prevInputRoman === "l") {
            if (roman !== this.#prevInputRoman) {
                return CHAR_UNMATCH;
            }
        }

        return CHAR_PARTIALLY_COMPLETE;
    }
}
