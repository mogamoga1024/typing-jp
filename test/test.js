import { TypingText } from "../src/typing_text.js";
import { EmptyTextError } from "../src/error/empty_text_error.js";
import { NoRemainingInputError } from "../src/error/no_remaining_input_error.js";
import { CharCreationError } from "../src/error/char_creation_error.js";
import { TEXT_UNMATCH, TEXT_INCOMPLETE, TEXT_COMPLETE } from "../src/constants/text_status.js";

test("てすとですよん", () => {
    const typingText = new TypingText("てすとですよん");

    strictEqual(typingText.roman, "tesutodesuyonn");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "tesutodesuyonn");

    strictEqual(typingText.text, "てすとですよん");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "てすとですよん");
});

test("てすとですよん tesutodesuyonn", () => {
    const typingText = new TypingText("てすとですよん");

    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("e"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("s"), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "tesutodesuyonn");
    strictEqual(typingText.completedRoman, "tes");
    strictEqual(typingText.remainingRoman, "utodesuyonn");

    strictEqual(typingText.text, "てすとですよん");
    strictEqual(typingText.completedText, "て");
    strictEqual(typingText.remainingText, "すとですよん");
});

test("てすとですよん tesa", () => {
    const typingText = new TypingText("てすとですよん");

    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("e"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("s"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("a"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "tesutodesuyonn");
    strictEqual(typingText.completedRoman, "tes");
    strictEqual(typingText.remainingRoman, "utodesuyonn");

    strictEqual(typingText.text, "てすとですよん");
    strictEqual(typingText.completedText, "て");
    strictEqual(typingText.remainingText, "すとですよん");
});

test("てすとですよん tesutodesuyon", () => {
    const typingText = new TypingText("てすとですよん");

    for (const key of "tesutodesuyon") {
        strictEqual(typingText.inputKey(key), TEXT_INCOMPLETE);
    }
    strictEqual(typingText.inputKey("n"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "tesutodesuyonn");
    strictEqual(typingText.completedRoman, "tesutodesuyonn");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "てすとですよん");
    strictEqual(typingText.completedText, "てすとですよん");
    strictEqual(typingText.remainingText, "");
});

test("テストデスヨン", () => {
    const typingText = new TypingText("テストデスヨン");

    strictEqual(typingText.roman, "tesutodesuyonn");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "tesutodesuyonn");

    strictEqual(typingText.text, "てすとですよん");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "てすとですよん");
});

test("ﾃｽﾄﾃﾞｽﾖﾝ", () => {
    const typingText = new TypingText("ﾃｽﾄﾃﾞｽﾖﾝ");

    strictEqual(typingText.roman, "tesutodesuyonn");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "tesutodesuyonn");

    strictEqual(typingText.text, "てすとですよん");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "てすとですよん");
});

test("EmptyTextError ignoreSpace=false", () => {
    throws(() => {
            new TypingText("");
        },
        EmptyTextError
    );
    throws(() => {
            new TypingText("", false);
        },
        EmptyTextError
    );
});

test("EmptyTextError ignoreSpace=true", () => {
    throws(() => {
            new TypingText(" 　", true);
        },
        EmptyTextError
    );
});