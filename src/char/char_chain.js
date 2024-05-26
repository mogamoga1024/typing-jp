import { createChar } from "./char_factory.js";

export function createCharChain(text) {
    if (text.length === 1) {
        return createChar(text[0]);
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
            if (/^(ぁ|ぃ|ぅ|ぇ|ぉ|ゃ|ゅ|ょ)$/.test(nextName)) {
                tmpName = name + nextName;
            }
        }

        console.log(name);
        console.log(tmpName);

        if (tmpName === null) {
            char = createChar(name);
        }
        else {
            try {
                char = createChar(tmpName);
                i++;
            }
            catch (e) {
                char = createChar(name);
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

export function createDivisionCharChain(text) {
    let firstChar = null;
    let preChar = null;
    for (let i = 0; i < text.length; i++) {
        const char = createChar(text[i]);
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
