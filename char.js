
function Char(name, expectRomanArray) {
    this.name = name;
    this.nextChar = null;
    this.expectRomanArray = expectRomanArray;
    this.nextExpectRomanIndex = 0;
    this.divisionCharChain = null;

    if (this.name.length > 1) {
        this.divisionCharChain = TypingManager.createDivisionCharChain(this.name);
    }
}

Char.prototype.expectRoman = function() {
    if (this.expectRomanArray.length > 0) {
        return this.expectRomanArray[0];
    }
    return "";
};

Char.prototype.inputRoman = function(roman) {
    const result = this.inputThisCharRoman(roman);

    if (result === CHAR_NG && this.divisionCharChain !== null) {
        return this.inputDivisionCharRoman(roman);
    }
    else {
        return result;
    }
};

Char.prototype.inputThisCharRoman = function(roman) {
    const self = this;
    const tmpExpectRomanArray = this.expectRomanArray.filter(
        function(expectRoman) {
            return roman === expectRoman[self.nextExpectRomanIndex];
        }
    );

    if (tmpExpectRomanArray.length === 0) {
        return CHAR_NG;
    }

    this.expectRomanArray = tmpExpectRomanArray;
    this.nextExpectRomanIndex += 1;
    
    if (this.nextExpectRomanIndex < this.expectRomanArray[0].length) {
        return CHAR_KEEP;
    }
    
    return CHAR_COMPLETE;
};

Char.prototype.inputDivisionCharRoman = function(roman) {
    const char = this.divisionCharChain;
    for (let i = 0; i < this.nextExpectRomanIndex; i++) {
        if (char.inputRoman(this.expectRomanArray[0][i]) === CHAR_NG) {
            char.nextExpectRomanIndex = 0;
            return CHAR_NG;
        }
    }

    const result = char.inputRoman(roman);
    if (result === CHAR_NG) {
        return CHAR_NG;
    }
    
    let lastDivisionChar = char.nextChar; // char.nextChar is not null.
    while (true) {
        if (lastDivisionChar.nextChar === null) {
            lastDivisionChar.nextChar = this.nextChar;
            break;
        }
        lastDivisionChar = lastDivisionChar.nextChar;
    }

    if (result === CHAR_KEEP) {
        return char;
    }
    
    return char.nextChar;
};