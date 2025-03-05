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

test("わんだほーい！ WANdAho-I CapsLock bk", () => {
    const typingText = new TypingText("わんだほーい！");

    typingText.inputKey("W", true);
    typingText.inputKey("A", true);
    typingText.inputKey("N", true);
    typingText.inputKey("d", false);
    typingText.inputKey("A", true);
    typingText.inputKey("h", false);
    typingText.inputKey("o", false);
    typingText.inputKey("-", false);
    typingText.inputKey("I", true);

    typingText.undo();

    strictEqual(typingText.roman, "wandaho-i!");
    strictEqual(typingText.completedRoman, "WANdAho-");
    strictEqual(typingText.remainingRoman, "i!");

    strictEqual(typingText.text, "わんだほーい！");
    strictEqual(typingText.completedText, "わんだほー");
    strictEqual(typingText.remainingText, "い！");
});

test("ち ゃ ti x ignoreSpace=false bk", () => {
    const typingText = new TypingText("ち ゃ", false);

    typingText.inputKey("t");
    typingText.inputKey("i");
    typingText.inputKey(" ");
    typingText.inputKey("x");

    typingText.undo();

    strictEqual(typingText.roman, "ti xya");
    strictEqual(typingText.completedRoman, "ti ");
    strictEqual(typingText.remainingRoman, "xya");

    strictEqual(typingText.text, "ち ゃ");
    strictEqual(typingText.completedText, "ち ");
    strictEqual(typingText.remainingText, "ゃ");
});

test("ち ゃ 'ti ' ignoreSpace=false bk", () => {
    const typingText = new TypingText("ち ゃ", false);

    typingText.inputKey("t");
    typingText.inputKey("i");
    typingText.inputKey(" ");

    typingText.undo();

    strictEqual(typingText.roman, "ti xya");
    strictEqual(typingText.completedRoman, "ti");
    strictEqual(typingText.remainingRoman, " xya");

    strictEqual(typingText.text, "ち ゃ");
    strictEqual(typingText.completedText, "ち");
    strictEqual(typingText.remainingText, " ゃ");
});

test("わんだほーい！ CapsLock bk ごちゃまぜ完走", () => {
    const typingText = new TypingText("わんだほーい！");

    typingText.inputKey("W", true);
    typingText.inputKey("a", false);
    typingText.inputKey("n", false);
    typingText.inputKey("n", false);

    typingText.undo();
    typingText.undo();

    typingText.inputKey("N", true);
    typingText.inputKey("d", false);
    typingText.inputKey("d", false);

    typingText.undo();

    typingText.inputKey("D", true);
    typingText.inputKey("a", false);

    typingText.inputKey("h", false);
    typingText.inputKey("o", false);
    typingText.inputKey("-", false);

    typingText.undo();
    
    typingText.inputKey("-", false);
    typingText.inputKey("I", true);
    typingText.inputKey("!", false);

    strictEqual(typingText.roman, "wandaho-i!");
    strictEqual(typingText.completedRoman, "WaNDaho-I!");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "わんだほーい！");
    strictEqual(typingText.completedText, "わんだほーい！");
    strictEqual(typingText.remainingText, "");
});

test("じしん zis bk priority", () => {
    const priority = {
        "じ": ["j"],
        "し": ["c"],
        "ん": ["x"],
    };

    const typingText = new TypingText("じしん", priority);

    typingText.inputKey("z", false);
    typingText.inputKey("i", false);
    typingText.inputKey("s", false);

    typingText.undo();

    strictEqual(typingText.roman, "jicixn");
    strictEqual(typingText.completedRoman, "zi");
    strictEqual(typingText.remainingRoman, "cixn");

    strictEqual(typingText.text, "じしん");
    strictEqual(typingText.completedText, "じ");
    strictEqual(typingText.remainingText, "しん");
});

test("じしん ZIS bk priority CapsLock", () => {
    const priority = {
        "じ": ["j"],
        "し": ["c"],
        "ん": ["x"],
    };

    const typingText = new TypingText("じしん", priority);

    typingText.inputKey("Z", true);
    typingText.inputKey("I", true);
    typingText.inputKey("S", true);

    typingText.undo();

    strictEqual(typingText.roman, "jicixn");
    strictEqual(typingText.completedRoman, "ZI");
    strictEqual(typingText.remainingRoman, "cixn");

    strictEqual(typingText.text, "じしん");
    strictEqual(typingText.completedText, "じ");
    strictEqual(typingText.remainingText, "しん");
});

