import { TypingText } from "../src/typing_text.js";
import { EmptyTextError } from "../src/error/empty_text_error.js";
import { NoRemainingInputError } from "../src/error/no_remaining_input_error.js";
import { CharCreationError } from "../src/error/char_creation_error.js";
import { TEXT_UNMATCH, TEXT_INCOMPLETE, TEXT_COMPLETE } from "../src/constants/text_status.js";

QUnit.module("undo");

test("まっちゃ mal bk", () => {
    const typingText = new TypingText("まっちゃ");

    typingText.inputKey("m");
    typingText.inputKey("a");
    typingText.inputKey("l");

    typingText.undo();

    strictEqual(typingText.roman, "mattya");
    strictEqual(typingText.completedRoman, "ma");
    strictEqual(typingText.remainingRoman, "ttya");

    strictEqual(typingText.text, "まっちゃ");
    strictEqual(typingText.completedText, "ま");
    strictEqual(typingText.remainingText, "っちゃ");
});

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

test("てすと tesuto bk", () => {
    const typingText = new TypingText("てすと");

    typingText.inputKey("t");
    typingText.inputKey("e");
    typingText.inputKey("s");
    typingText.inputKey("u");
    typingText.inputKey("t");
    typingText.inputKey("o");

    typingText.undo();

    strictEqual(typingText.roman, "tesuto");
    strictEqual(typingText.completedRoman, "tesut");
    strictEqual(typingText.remainingRoman, "o");

    strictEqual(typingText.text, "てすと");
    strictEqual(typingText.completedText, "てす");
    strictEqual(typingText.remainingText, "と");
});

test("てすとあ tesutoa bk", () => {
    const typingText = new TypingText("てすとあ");

    typingText.inputKey("t");
    typingText.inputKey("e");
    typingText.inputKey("s");
    typingText.inputKey("u");
    typingText.inputKey("t");
    typingText.inputKey("o");
    typingText.inputKey("a");

    typingText.undo();

    strictEqual(typingText.roman, "tesutoa");
    strictEqual(typingText.completedRoman, "tesuto");
    strictEqual(typingText.remainingRoman, "a");

    strictEqual(typingText.text, "てすとあ");
    strictEqual(typingText.completedText, "てすと");
    strictEqual(typingText.remainingText, "あ");
});

test("あっつ attu bk", () => {
    const typingText = new TypingText("あっつ");

    typingText.inputKey("a");
    typingText.inputKey("t");
    typingText.inputKey("t");
    typingText.inputKey("u");

    typingText.undo();

    strictEqual(typingText.roman, "attu");
    strictEqual(typingText.completedRoman, "att");
    strictEqual(typingText.remainingRoman, "u");

    strictEqual(typingText.text, "あっつ");
    strictEqual(typingText.completedText, "あ");
    strictEqual(typingText.remainingText, "っつ");
});

test("あっつ！ attu bk", () => {
    const typingText = new TypingText("あっつ！");

    typingText.inputKey("a");
    typingText.inputKey("t");
    typingText.inputKey("t");
    typingText.inputKey("u");

    typingText.undo();

    strictEqual(typingText.roman, "attu!");
    strictEqual(typingText.completedRoman, "att");
    strictEqual(typingText.remainingRoman, "u!");

    strictEqual(typingText.text, "あっつ！");
    strictEqual(typingText.completedText, "あ");
    strictEqual(typingText.remainingText, "っつ！");
});

test("わんだほい wand bk", () => {
    const typingText = new TypingText("わんだほい");

    typingText.inputKey("w");
    typingText.inputKey("a");
    typingText.inputKey("n");
    typingText.inputKey("d");

    typingText.undo();

    strictEqual(typingText.roman, "wandahoi");
    strictEqual(typingText.completedRoman, "wan");
    strictEqual(typingText.remainingRoman, "dahoi");

    strictEqual(typingText.text, "わんだほい");
    strictEqual(typingText.completedText, "わ");
    strictEqual(typingText.remainingText, "んだほい");
});

test("にゃぴ ni bk", () => {
    const typingText = new TypingText("にゃぴ");

    typingText.inputKey("n");
    typingText.inputKey("i");

    typingText.undo();

    strictEqual(typingText.roman, "nyapi");
    strictEqual(typingText.completedRoman, "n");
    strictEqual(typingText.remainingRoman, "yapi");

    strictEqual(typingText.text, "にゃぴ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "にゃぴ");
});

test("にゃ nya bk", () => {
    const typingText = new TypingText("にゃ");

    typingText.inputKey("n");
    typingText.inputKey("y");
    typingText.inputKey("a");

    typingText.undo();

    strictEqual(typingText.roman, "nya");
    strictEqual(typingText.completedRoman, "ny");
    strictEqual(typingText.remainingRoman, "a");

    strictEqual(typingText.text, "にゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "にゃ");
});

test("ほげ hog bk bk bk bk bk bk", () => {
    const typingText = new TypingText("ほげ");

    typingText.inputKey("h");
    typingText.inputKey("o");
    typingText.inputKey("g");

    typingText.undo();
    typingText.undo();
    typingText.undo();
    typingText.undo();
    typingText.undo();
    typingText.undo();

    strictEqual(typingText.roman, "hoge");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "hoge");

    strictEqual(typingText.text, "ほげ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "ほげ");
});

test("ほげ bk bk bk bk bk bk", () => {
    const typingText = new TypingText("ほげ");

    typingText.undo();
    typingText.undo();
    typingText.undo();
    typingText.undo();
    typingText.undo();
    typingText.undo();

    strictEqual(typingText.roman, "hoge");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "hoge");

    strictEqual(typingText.text, "ほげ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "ほげ");
});



// todo isCapsLock true
// todo space
// todo space ignoe
// todo 優先度

