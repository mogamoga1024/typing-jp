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
    
    strictEqual(typingText.inputKey("W", true), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("A", true), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("N", true), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("d", false), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("A", true), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("h", false), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("o", false), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("-", false), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("I", true), TEXT_INCOMPLETE);
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

    strictEqual(typingText.inputKey("n", false), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("Y", false), TEXT_UNMATCH);

    strictEqual(typingText.roman, "nya");
    strictEqual(typingText.completedRoman, "n");
    strictEqual(typingText.remainingRoman, "ya");

    strictEqual(typingText.text, "にゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "にゃ");
});

test("っ XTU CapsLock:true", () => {
    const typingText = new TypingText("っ");

    strictEqual(typingText.inputKey("X", true), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("T", true), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("U", true), TEXT_COMPLETE);

    strictEqual(typingText.roman, "xtu");
    strictEqual(typingText.completedRoman, "XTU");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "っ");
    strictEqual(typingText.completedText, "っ");
    strictEqual(typingText.remainingText, "");
});

test("っ Xt CapsLock:true", () => {
    const typingText = new TypingText("っ");

    strictEqual(typingText.inputKey("X", true), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("t", true), TEXT_UNMATCH);

    strictEqual(typingText.roman, "xtu");
    strictEqual(typingText.completedRoman, "X");
    strictEqual(typingText.remainingRoman, "tu");

    strictEqual(typingText.text, "っ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っ");
});

test("った TTA CapsLock:true", () => {
    const typingText = new TypingText("った");

    strictEqual(typingText.inputKey("T", true), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("T", true), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("A", true), TEXT_COMPLETE);

    strictEqual(typingText.roman, "tta");
    strictEqual(typingText.completedRoman, "TTA");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "った");
    strictEqual(typingText.completedText, "った");
    strictEqual(typingText.remainingText, "");
});

test("った Tt CapsLock:true", () => {
    const typingText = new TypingText("った");

    strictEqual(typingText.inputKey("T", true), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("t", true), TEXT_UNMATCH);

    strictEqual(typingText.roman, "tta");
    strictEqual(typingText.completedRoman, "T");
    strictEqual(typingText.remainingRoman, "ta");

    strictEqual(typingText.text, "った");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "った");
});

test("ん NN CapsLock:true", () => {
    const typingText = new TypingText("ん");

    strictEqual(typingText.inputKey("N", true), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("N", true), TEXT_COMPLETE);

    strictEqual(typingText.roman, "nn");
    strictEqual(typingText.completedRoman, "NN");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "ん");
    strictEqual(typingText.completedText, "ん");
    strictEqual(typingText.remainingText, "");
});

test("ん Nn CapsLock:true", () => {
    const typingText = new TypingText("ん");

    strictEqual(typingText.inputKey("N", true), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("n", true), TEXT_UNMATCH);

    strictEqual(typingText.roman, "nn");
    strictEqual(typingText.completedRoman, "N");
    strictEqual(typingText.remainingRoman, "n");

    strictEqual(typingText.text, "ん");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "ん");
});
