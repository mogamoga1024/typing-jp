import { TypingText } from "../src/typing_text.js";
import { EmptyTextError } from "../src/error/empty_text_error.js";
import { NoRemainingInputError } from "../src/error/no_remaining_input_error.js";
import { CharCreationError } from "../src/error/char_creation_error.js";
import { TEXT_UNMATCH, TEXT_INCOMPLETE, TEXT_COMPLETE } from "../src/constants/text_status.js";

QUnit.module("CapsLock");

test("わんだほーい！ WANDAHO-I! CapsLock", () => {
    const typingText = new TypingText("わんだほーい！");

    for (const key of "WANDAHO-I") {
        strictEqual(typingText.inputKey(key, true), TEXT_INCOMPLETE);
    }
    strictEqual(typingText.inputKey("!", true), TEXT_COMPLETE);

    strictEqual(typingText.roman, "wandaho-i!");
    strictEqual(typingText.completedRoman, "WANDAHO-I!");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "わんだほーい！");
    strictEqual(typingText.completedText, "わんだほーい！");
    strictEqual(typingText.remainingText, "");
});

test("わんだほーい！ WANdAho-I! CapsLock", () => {
    const typingText = new TypingText("わんだほーい！");

    for (const key of "WANdAho-I") {
        strictEqual(typingText.inputKey(key, true), TEXT_INCOMPLETE);
    }
    strictEqual(typingText.inputKey("!", true), TEXT_COMPLETE);

    strictEqual(typingText.roman, "wandaho-i!");
    strictEqual(typingText.completedRoman, "WANdAho-I!");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "わんだほーい！");
    strictEqual(typingText.completedText, "わんだほーい！");
    strictEqual(typingText.remainingText, "");
});

test("にゃ nYA CapsLock", () => {
    const typingText = new TypingText("にゃ");

    strictEqual(typingText.inputKey("n", true), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("Y", true), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("A", true), TEXT_COMPLETE);

    strictEqual(typingText.roman, "nya");
    strictEqual(typingText.completedRoman, "nYA");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "にゃ");
    strictEqual(typingText.completedText, "にゃ");
    strictEqual(typingText.remainingText, "");
});
