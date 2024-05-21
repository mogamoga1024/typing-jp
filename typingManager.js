
const TypingManager = {};

TypingManager.validRoman = function(roman) {
    return roman.match(/^([A-Za-z0-9]|-|!|\?|'|"|\.|,|\[|\])$/) !== null;
};

// サロゲートペア文字は考慮しない
TypingManager.createCharChain = function(text) {
    if (text.length === 1) {
        return CharFactory.create(text[0]);
    }

    let firstChar = null;
    let preChar = null;
    let isFirst = true;
    for (let i = 0; i < text.length; i++) {
        const name = text[i];
        let tmpName = null;
        let char = null;
        if (i !== text.length - 1) {
            const nextName = text[i + 1];
            if (nextName.match(/^(ぁ|ぃ|ぅ|ぇ|ぉ|ゃ|ゅ|ょ|ァ|ィ|ゥ|ェ|ォ|ャ|ュ|ョ)$/) !== null) {
                tmpName = name + nextName;
            }
        }

        if (tmpName === null) {
            char = CharFactory.create(name);
        }
        else {
            char = CharFactory.create(tmpName);
            if (char !== null) {
                i++;
            }
            else {
                char = CharFactory.create(name);
            }
        }

        if (isFirst) {
            isFirst = false;
            firstChar = char;
        }
        if (preChar !== null) {
            preChar.nextChar = char;
        }
        preChar = char;
    }
    return firstChar;
};

// サロゲートペア文字は考慮しない
TypingManager.createDivisionCharChain = function(text) {
    let firstChar = null;
    let preChar = null;
    for (let i = 0; i < text.length; i++) {
        const char = CharFactory.create(text[i]);
        if (i === 0) {
            firstChar = char;
        }
        if (preChar !== null) {
            preChar.nextChar = char;
        }
        preChar = char;
    }
    return firstChar;
};