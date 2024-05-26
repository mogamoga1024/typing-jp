import { TypingText } from "../src/typing_text.js";
import { EmptyTextError } from "../src/error/empty_text_error.js";
import { NoRemainingInputError } from "../src/error/no_remaining_input_error.js";
import { CharCreationError } from "../src/error/char_creation_error.js";
import { TEXT_UNMATCH, TEXT_INCOMPLETE, TEXT_COMPLETE } from "../src/constants/text_status.js";

test("てすとですよん", function() {
    const typingText = new TypingText("てすとですよん");

    strictEqual(typingText.roman, "tesutodesuyonn");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "tesutodesuyonn");

    strictEqual(typingText.text, "てすとですよん");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "てすとですよん");
});

test("てすとですよん tes", function() {
    const typingText = new TypingText("てすとですよん");

    const result1 = typingText.inputKey("t");
    const result2 = typingText.inputKey("e");
    const result3 = typingText.inputKey("s");

    strictEqual(result1, TEXT_INCOMPLETE);
    strictEqual(result2, TEXT_INCOMPLETE);
    strictEqual(result3, TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "tesutodesuyonn");
    strictEqual(typingText.completedRoman, "tes");
    strictEqual(typingText.remainingRoman, "utodesuyonn");

    strictEqual(typingText.text, "てすとですよん");
    strictEqual(typingText.completedText, "て");
    strictEqual(typingText.remainingText, "すとですよん");
});
