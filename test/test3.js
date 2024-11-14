import { TypingText } from "../src/typing_text.js";
import { EmptyTextError } from "../src/error/empty_text_error.js";
import { NoRemainingInputError } from "../src/error/no_remaining_input_error.js";
import { CharCreationError } from "../src/error/char_creation_error.js";
import { TEXT_UNMATCH, TEXT_INCOMPLETE, TEXT_COMPLETE } from "../src/constants/text_status.js";

QUnit.module("undo");

test("てすと tesu bk", () => {
    const typingText = new TypingText("てすと");

    typingText.inputKey("t");
    typingText.inputKey("e");
    typingText.inputKey("s");
    typingText.inputKey("u");

    typingText.undo();

    strictEqual(typingText.roman, "tesuto");
    strictEqual(typingText.completedRoman, "tes");
    strictEqual(typingText.remainingRoman, "uto");

    strictEqual(typingText.text, "てすと");
    strictEqual(typingText.completedText, "て");
    strictEqual(typingText.remainingText, "すと");
});

test("てすと tes bk", () => {
    const typingText = new TypingText("てすと");

    typingText.inputKey("t");
    typingText.inputKey("e");
    typingText.inputKey("s");

    typingText.undo();

    strictEqual(typingText.roman, "tesuto");
    strictEqual(typingText.completedRoman, "te");
    strictEqual(typingText.remainingRoman, "suto");

    strictEqual(typingText.text, "てすと");
    strictEqual(typingText.completedText, "て");
    strictEqual(typingText.remainingText, "すと");
});

test("てうと teu bk", () => {
    const typingText = new TypingText("てうと");

    typingText.inputKey("t");
    typingText.inputKey("e");
    typingText.inputKey("u");

    typingText.undo();

    strictEqual(typingText.roman, "teuto");
    strictEqual(typingText.completedRoman, "te");
    strictEqual(typingText.remainingRoman, "uto");

    strictEqual(typingText.text, "てうと");
    strictEqual(typingText.completedText, "て");
    strictEqual(typingText.remainingText, "うと");
});

// todo 最後の文字
// todo 最後の文字 a
// todo っ
// todo ん
// todo しゃ si bs
// todo しゃ sya bs コンプリテキスト 空
