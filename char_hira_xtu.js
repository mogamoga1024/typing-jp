import { Char } from "./char.js";

export function CharHiraXtu() {
    Char.call(this, "っ", ["xtu", "ltu", "ltsu"]);
    this.regex = /^(?=[a-z])(?!(a|i|u|e|o|n)).$/;
}

CharHiraXtu.prototype = Object.create(Char.prototype);
CharHiraXtu.prototype.constructor = CharHiraXtu;

CharHiraXtu.prototype.expectRoman = function() {
    if (this.nextChar === null) {
        return Char.prototype.expectRoman.call(this);
    }
    if (this.nextExpectRomanIndex > 0) {
        return this.expectRomanArray[0];
    }
    if (this.nextChar.name.match(/^[a-zA-Z]$/) !== null) {
        return Char.prototype.expectRoman.call(this);
    }
    const nextCharFirstRoman = this.nextChar.expectRoman()[0];
    if (nextCharFirstRoman.match(this.regex) !== null) {
        return nextCharFirstRoman;
    }

    return Char.prototype.expectRoman.call(this);
};

CharHiraXtu.prototype.inputRoman = function(roman) {
    const result = Char.prototype.inputRoman.call(this, roman);
    if (this.nextExpectRomanIndex > 0) {
        return result;
    }

    if (this.nextChar == null) {
        return "unmatch";
    }
    
    if (roman.match(this.regex) === null) {
        return "unmatch";
    }
    if (this.nextChar.name.match(/^[a-zA-Z]$/) !== null) {
        return "unmatch";
    }

    if (this.nextChar.inputRoman(roman) === "unmatch") {
        return "unmatch";
    }
    this.nextChar.nextExpectRomanIndex = 0;
    if (this.nextChar.divisionCharChain !== null) {
        this.nextChar.divisionCharChain.inputRoman(roman);
        this.nextChar.divisionCharChain.nextExpectRomanIndex = 0;
    }

    return "complete";
};