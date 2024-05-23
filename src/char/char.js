import { createDivisionCharChain } from "./char_chain.js";
import { CHAR_UNMATCH, CHAR_INCOMPLETE, CHAR_COMPLETE } from "../constants/char_status.js";

export class Char {
    constructor(name, expectRomanArray, ignoreCapsLock = false) {
        this.name = name;
        this.nextChar = null;
        this.expectRomanArray = expectRomanArray;
        this.nextExpectRomanIndex = 0;
        this.divisionCharChain = null;
        this.ignoreCapsLock = ignoreCapsLock;
    
        if (this.name.length > 1) {
            this.divisionCharChain = createDivisionCharChain(this.name);
        }
    }

    expectRoman() {
        if (this.expectRomanArray.length > 0) {
            return this.expectRomanArray[0];
        }
        return "";
    }

    inputRoman(_roman, isCapsLock = false) {
        const roman = isCapsLock && this.ignoreCapsLock ? _roman.toLowerCase() : _roman;
        const result = this.inputThisCharRoman(roman);
    
        if (result === CHAR_UNMATCH && this.divisionCharChain !== null) {
            return this.inputDivisionCharRoman(roman);
        }
        else {
            return result;
        }
    }

    inputThisCharRoman(roman) {
        const tmpExpectRomanArray = this.expectRomanArray.filter(
            expectRoman => roman === expectRoman[this.nextExpectRomanIndex]
        );
    
        if (tmpExpectRomanArray.length === 0) {
            return CHAR_UNMATCH;
        }
    
        this.expectRomanArray = tmpExpectRomanArray;
        this.nextExpectRomanIndex += 1;
        
        if (this.nextExpectRomanIndex < this.expectRomanArray[0].length) {
            return CHAR_INCOMPLETE;
        }
        
        return CHAR_COMPLETE;
    }

    inputDivisionCharRoman(roman) {
        const char = this.divisionCharChain;
        for (let i = 0; i < this.nextExpectRomanIndex; i++) {
            if (char.inputRoman(this.expectRomanArray[0][i]) === CHAR_UNMATCH) {
                char.nextExpectRomanIndex = 0;
                return CHAR_UNMATCH;
            }
        }
    
        const result = char.inputRoman(roman);
        if (result === CHAR_UNMATCH) {
            return CHAR_UNMATCH;
        }
        
        let lastDivisionChar = char.nextChar; // char.nextChar is not null.
        while (true) {
            if (lastDivisionChar.nextChar === null) {
                lastDivisionChar.nextChar = this.nextChar;
                break;
            }
            lastDivisionChar = lastDivisionChar.nextChar;
        }
    
        if (result === CHAR_INCOMPLETE) {
            return char;
        }
        
        return char.nextChar;
    }
}
