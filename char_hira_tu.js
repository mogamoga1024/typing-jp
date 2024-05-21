
function っ() {
    Char.call(this, "っ", ["xtu", "ltu", "ltsu"]);
    this.regex = /^(?=[a-z])(?!(a|i|u|e|o|n)).$/;
}

っ.prototype = Object.create(Char.prototype);
っ.prototype.constructor = っ;

っ.prototype.expectRoman = function() {
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

っ.prototype.inputRoman = function(roman) {
    const result = Char.prototype.inputRoman.call(this, roman);
    if (this.nextExpectRomanIndex > 0) {
        return result;
    }

    if (this.nextChar == null) {
        return CHAR_NG;
    }
    
    if (roman.match(this.regex) === null) {
        return CHAR_NG;
    }
    if (this.nextChar.name.match(/^[a-zA-Z]$/) !== null) {
        return CHAR_NG;
    }

    if (this.nextChar.inputRoman(roman) === CHAR_NG) {
        return CHAR_NG;
    }
    this.nextChar.nextExpectRomanIndex = 0;
    if (this.nextChar.divisionCharChain !== null) {
        this.nextChar.divisionCharChain.inputRoman(roman);
        this.nextChar.divisionCharChain.nextExpectRomanIndex = 0;
    }

    return CHAR_COMPLETE;
};
