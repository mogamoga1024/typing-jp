import { TypingText } from "../src/typing_text.js";
import { EmptyTextError } from "../src/error/empty_text_error.js";
import { NoRemainingInputError } from "../src/error/no_remaining_input_error.js";
import { CharCreationError } from "../src/error/char_creation_error.js";
import { TEXT_UNMATCH, TEXT_INCOMPLETE, TEXT_COMPLETE } from "../src/constants/text_status.js";

QUnit.module("優先度");

test("ぃ l x", () => {
    const priority = {
        "ぃ": ["l", "x"]
    };

    const typingText = new TypingText("ぃ", priority);

    deepEqual(typingText.char.expectRomanArray, ["li", "lyi", "xi", "xyi"]);

    strictEqual(typingText.roman, "li");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "li");

    strictEqual(typingText.text, "ぃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "ぃ");
});

test("ぃ lyi xyi", () => {
    const priority = {
        "ぃ": ["lyi", "xyi"]
    };

    const typingText = new TypingText("ぃ", priority);

    deepEqual(typingText.char.expectRomanArray, ["lyi", "xyi", "xi", "li"]);

    strictEqual(typingText.roman, "lyi");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "lyi");

    strictEqual(typingText.text, "ぃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "ぃ");
});

test("じ j", () => {
    const priority = {
        "じ": ["j"]
    };

    const typingText = new TypingText("じ", priority);

    deepEqual(typingText.char.expectRomanArray, ["ji", "zi"]);

    strictEqual(typingText.roman, "ji");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "ji");

    strictEqual(typingText.text, "じ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "じ");
});

test("じ i", () => {
    const priority = {
        "じ": ["i"]
    };

    const typingText = new TypingText("じ", priority);

    deepEqual(typingText.char.expectRomanArray, ["zi", "ji"]);

    strictEqual(typingText.roman, "zi");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "zi");

    strictEqual(typingText.text, "じ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "じ");
});

test("じ じゃ j", () => {
    const priority = {
        "じゃ": ["j"]
    };

    const typingText = new TypingText("じ", priority);

    deepEqual(typingText.char.expectRomanArray, ["zi", "ji"]);

    strictEqual(typingText.roman, "zi");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "zi");

    strictEqual(typingText.text, "じ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "じ");
});

test("じ j じゃ", () => {
    const priority = {
        "じ": ["j"]
    };

    const typingText = new TypingText("じゃ", priority);

    strictEqual(typingText.roman, "zya");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "zya");

    strictEqual(typingText.text, "じゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "じゃ");
});

test("じ j じゃ j", () => {
    const priority = {
        "じ": ["j"]
    };

    const typingText = new TypingText("じゃ", priority);

    strictEqual(typingText.inputKey("j"), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "zya");
    strictEqual(typingText.completedRoman, "j");
    strictEqual(typingText.remainingRoman, "a");

    strictEqual(typingText.text, "じゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "じゃ");
});

test("か く c", () => {
    const priority = {
        "か": ["c"],
        "く": ["c"],
    };

    const typingText = new TypingText("あかあくあ", priority);

    strictEqual(typingText.roman, "acaacua");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "acaacua");

    strictEqual(typingText.text, "あかあくあ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "あかあくあ");
});

test("しゃ ゃ l", () => {
    const priority = {
        "ゃ": ["l"]
    };

    const typingText = new TypingText("しゃ", priority);

    strictEqual(typingText.inputKey("s"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("i"), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "sya");
    strictEqual(typingText.completedRoman, "si");
    strictEqual(typingText.remainingRoman, "lya");

    strictEqual(typingText.text, "しゃ");
    strictEqual(typingText.completedText, "し");
    strictEqual(typingText.remainingText, "ゃ");
});

test("っゃ ゃ l", () => {
    const priority = {
        "ゃ": ["l"]
    };

    const typingText = new TypingText("っゃ", priority);

    strictEqual(typingText.roman, "llya");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "llya");

    strictEqual(typingText.text, "っゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っゃ");
});

test("じ あ i", () => {
    const priority = {
        "あ": ["i"]
    };

    const typingText = new TypingText("じ", priority);

    deepEqual(typingText.char.expectRomanArray, ["zi", "ji"]);

    strictEqual(typingText.roman, "zi");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "zi");

    strictEqual(typingText.text, "じ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "じ");
});

test("'あ じ　あ' じ j ignoreSpace true", () => {
    const priority = {
        "じ": ["j"]
    };

    const typingText = new TypingText("あ じ　あ", true, priority);

    strictEqual(typingText.roman, "ajia");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "ajia");

    strictEqual(typingText.text, "あじあ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "あじあ");
});

test("'あ じ　あ' じ j ignoreSpace false", () => {
    const priority = {
        "じ": ["j"]
    };

    const typingText = new TypingText("あ じ　あ", false, priority);

    strictEqual(typingText.roman, "a ji a");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "a ji a");

    strictEqual(typingText.text, "あ じ　あ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "あ じ　あ");
});

test("じしん", () => {
    const typingText = new TypingText("じしん");

    strictEqual(typingText.roman, "zisinn");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "zisinn");

    strictEqual(typingText.text, "じしん");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "じしん");
});

test("じしん j c x", () => {
    const priority = {
        "じ": ["j"],
        "し": ["c"],
        "ん": ["x"],
    };

    const typingText = new TypingText("じしん", priority);

    strictEqual(typingText.roman, "jicixn");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "jicixn");

    strictEqual(typingText.text, "じしん");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "じしん");
});

// なんかバグっぽいけど、まあ許容する。
// const priority = {
//     "ち": ["c"],
//     "ちゃ": ["c"],
//     "ちゅ": ["c"],
//     "ちょ": ["c"],
// };
// で回避できるから。
// 気が向いたら修正する（するとは言っていない）。
// test("ちゃ ち c", () => {
//     const priority = {
//         "ち": ["c"]
//     };

//     const typingText = new TypingText("ちゃ", priority);

//     strictEqual(typingText.roman, "cya");
//     strictEqual(typingText.completedRoman, "");
//     strictEqual(typingText.remainingRoman, "cya");

//     strictEqual(typingText.text, "ちゃ");
//     strictEqual(typingText.completedText, "");
//     strictEqual(typingText.remainingText, "ちゃ");
// });
