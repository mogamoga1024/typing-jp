import { TypingText } from "../src/typing_text.js";
import { EmptyTextError } from "../src/error/empty_text_error.js";
import { NoRemainingInputError } from "../src/error/no_remaining_input_error.js";
import { CharCreationError } from "../src/error/char_creation_error.js";
import { TEXT_UNMATCH, TEXT_INCOMPLETE, TEXT_COMPLETE } from "../src/constants/text_status.js";

QUnit.module("優先度");

test("ぃ", () => {
    const priority = {
        "ぃ": ["l", "x"]
    }

    const typingText = new TypingText("ぃ", priority);

    strictEqual(typingText.roman, "tesutodesuyonn");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "tesutodesuyonn");

    strictEqual(typingText.text, "てすとですよん");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "てすとですよん");
});

