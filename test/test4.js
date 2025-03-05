import { TypingText } from "../src/typing_text.js";
import { EmptyTextError } from "../src/error/empty_text_error.js";
import { NoRemainingInputError } from "../src/error/no_remaining_input_error.js";
import { CharCreationError } from "../src/error/char_creation_error.js";
import { TEXT_UNMATCH, TEXT_INCOMPLETE, TEXT_COMPLETE } from "../src/constants/text_status.js";

QUnit.module("CapsLock");

// todo 見直し
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

// todo 見直し
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

test("あいうえお AIUEO CapsLock:true", () => {
    const typingText = new TypingText("あいうえお");

    for (const key of "AIUE") {
        strictEqual(typingText.inputKey(key, true), TEXT_INCOMPLETE);
    }
    strictEqual(typingText.inputKey("O", true), TEXT_COMPLETE);

    strictEqual(typingText.roman, "aiueo");
    strictEqual(typingText.completedRoman, "AIUEO");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "あいうえお");
    strictEqual(typingText.completedText, "あいうえお");
    strictEqual(typingText.remainingText, "");
});

test("あいうえお a CapsLock:true", () => {
    const typingText = new TypingText("あいうえお");

    strictEqual(typingText.inputKey("a", true), TEXT_UNMATCH);

    strictEqual(typingText.roman, "aiueo");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "aiueo");

    strictEqual(typingText.text, "あいうえお");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "あいうえお");
});

test("あいうえお A CapsLock:false", () => {
    const typingText = new TypingText("あいうえお");

    strictEqual(typingText.inputKey("A", false), TEXT_UNMATCH);

    strictEqual(typingText.roman, "aiueo");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "aiueo");

    strictEqual(typingText.text, "あいうえお");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "あいうえお");
});

test("にゃ n CapsLock:true", () => {
    const typingText = new TypingText("にゃ");

    strictEqual(typingText.inputKey("n", true), TEXT_UNMATCH);

    strictEqual(typingText.roman, "nya");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "nya");

    strictEqual(typingText.text, "にゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "にゃ");
});

test("にゃ N CapsLock:false", () => {
    const typingText = new TypingText("にゃ");

    strictEqual(typingText.inputKey("N", false), TEXT_UNMATCH);

    strictEqual(typingText.roman, "nya");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "nya");

    strictEqual(typingText.text, "にゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "にゃ");
});

test("にゃ Ny CapsLock:true", () => {
    const typingText = new TypingText("にゃ");

    strictEqual(typingText.inputKey("N", true), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("y", true), TEXT_UNMATCH);

    strictEqual(typingText.roman, "nya");
    strictEqual(typingText.completedRoman, "N");
    strictEqual(typingText.remainingRoman, "ya");

    strictEqual(typingText.text, "にゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "にゃ");
});

test("にゃ nY CapsLock:false", () => {
    const typingText = new TypingText("にゃ");

    strictEqual(typingText.inputKey("n", true), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("Y", true), TEXT_UNMATCH);

    strictEqual(typingText.roman, "nya");
    strictEqual(typingText.completedRoman, "n");
    strictEqual(typingText.remainingRoman, "ya");

    strictEqual(typingText.text, "にゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "にゃ");
});
