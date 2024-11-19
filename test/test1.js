import { TypingText } from "../src/typing_text.js";
import { EmptyTextError } from "../src/error/empty_text_error.js";
import { NoRemainingInputError } from "../src/error/no_remaining_input_error.js";
import { CharCreationError } from "../src/error/char_creation_error.js";
import { TEXT_UNMATCH, TEXT_INCOMPLETE, TEXT_COMPLETE } from "../src/constants/text_status.js";

QUnit.module("基本");

test("てすとですよん", () => {
    const typingText = new TypingText("てすとですよん");

    strictEqual(typingText.roman, "tesutodesuyonn");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "tesutodesuyonn");

    strictEqual(typingText.text, "てすとですよん");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "てすとですよん");
});

test("ｔｅｓｔＴＥＳＴ１２３４", () => {
    const typingText = new TypingText("ｔｅｓｔＴＥＳＴ１２３４");

    strictEqual(typingText.roman, "testTEST1234");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "testTEST1234");

    strictEqual(typingText.text, "testTEST1234");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "testTEST1234");
});

test("てすとですよん tes", () => {
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

test("てすとですよん tesutodesuyonn", () => {
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

test("' ' 半スペ 無視しない", () => {
    const typingText = new TypingText(" ", false);

    strictEqual(typingText.roman, " ");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, " ");

    strictEqual(typingText.text, " ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, " ");
});

test("ち ゃ tya ignoreSpace=true", () => {
    const typingText = new TypingText("ち ゃ", true);

    strictEqual(typingText.roman, "tya");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "tya");

    strictEqual(typingText.text, "ちゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "ちゃ");
});

test("ち ゃ ignoreSpace=false", () => {
    const typingText = new TypingText("ち ゃ", false);

    strictEqual(typingText.roman, "ti xya");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "ti xya");

    strictEqual(typingText.text, "ち ゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "ち ゃ");
});

test("ち ゃ ti xya ignoreSpace=false", () => {
    const typingText = new TypingText("ち ゃ", false);

    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("i"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey(" "), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("y"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("a"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "ti xya");
    strictEqual(typingText.completedRoman, "ti xya");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "ち ゃ");
    strictEqual(typingText.completedText, "ち ゃ");
    strictEqual(typingText.remainingText, "");
});

test("ち ゃ ty ignoreSpace=false", () => {
    const typingText = new TypingText("ち ゃ", false);

    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("y"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "ti xya");
    strictEqual(typingText.completedRoman, "t");
    strictEqual(typingText.remainingRoman, "i xya");

    strictEqual(typingText.text, "ち ゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "ち ゃ");
});

test("ち   ゃ tya ignoreSpace=true", () => {
    const typingText = new TypingText("ち   ゃ", true);

    strictEqual(typingText.roman, "tya");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "tya");

    strictEqual(typingText.text, "ちゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "ちゃ");
});

test("ち   ゃ ignoreSpace=false", () => {
    const typingText = new TypingText("ち   ゃ", false);

    strictEqual(typingText.roman, "ti   xya");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "ti   xya");

    strictEqual(typingText.text, "ち   ゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "ち   ゃ");
});

test("ち   ゃ ti   xya ignoreSpace=false", () => {
    const typingText = new TypingText("ち   ゃ", false);

    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("i"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey(" "), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey(" "), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey(" "), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("y"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("a"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "ti   xya");
    strictEqual(typingText.completedRoman, "ti   xya");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "ち   ゃ");
    strictEqual(typingText.completedText, "ち   ゃ");
    strictEqual(typingText.remainingText, "");
});

test("'　' 全スペ 無視しない", () => {
    const typingText = new TypingText("　", false);

    strictEqual(typingText.roman, " ");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, " ");

    strictEqual(typingText.text, "　");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "　");
});

test("' ' ' ' 半スペ 無視しない", () => {
    const typingText = new TypingText(" ", false);

    strictEqual(typingText.inputKey(" "), TEXT_COMPLETE);

    strictEqual(typingText.roman, " ");
    strictEqual(typingText.completedRoman, " ");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, " ");
    strictEqual(typingText.completedText, " ");
    strictEqual(typingText.remainingText, "");
});

test("'　' ' ' 全スペ 無視しない", () => {
    const typingText = new TypingText("　", false);

    strictEqual(typingText.inputKey(" "), TEXT_COMPLETE);

    strictEqual(typingText.roman, " ");
    strictEqual(typingText.completedRoman, " ");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "　");
    strictEqual(typingText.completedText, "　");
    strictEqual(typingText.remainingText, "");
});

test("' ' ' ' 半スペ 無視する", () => {
    throws(() => {
            new TypingText(" ");
        },
        EmptyTextError
    );
});

test("'　' '　' 全スペ 無視する", () => {
    throws(() => {
            new TypingText("　");
        },
        EmptyTextError
    );
});

test("て すとですよん 'tes' 半スペ", () => {
    const typingText = new TypingText("て すとですよん", false);

    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("e"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("s"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "te sutodesuyonn");
    strictEqual(typingText.completedRoman, "te");
    strictEqual(typingText.remainingRoman, " sutodesuyonn");

    strictEqual(typingText.text, "て すとですよん");
    strictEqual(typingText.completedText, "て");
    strictEqual(typingText.remainingText, " すとですよん");
});

test("て すとですよん 'te ' 半スペ", () => {
    const typingText = new TypingText("て すとですよん", false);

    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("e"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey(" "), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "te sutodesuyonn");
    strictEqual(typingText.completedRoman, "te ");
    strictEqual(typingText.remainingRoman, "sutodesuyonn");

    strictEqual(typingText.text, "て すとですよん");
    strictEqual(typingText.completedText, "て ");
    strictEqual(typingText.remainingText, "すとですよん");
});

test("て　すとですよん 'tes' 全スペ", () => {
    const typingText = new TypingText("て　すとですよん", false);

    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("e"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("s"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "te sutodesuyonn");
    strictEqual(typingText.completedRoman, "te");
    strictEqual(typingText.remainingRoman, " sutodesuyonn");

    strictEqual(typingText.text, "て　すとですよん");
    strictEqual(typingText.completedText, "て");
    strictEqual(typingText.remainingText, "　すとですよん");
});

test("て　すとですよん 'te ' 全スペ", () => {
    const typingText = new TypingText("て　すとですよん", false);

    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("e"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey(" "), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "te sutodesuyonn");
    strictEqual(typingText.completedRoman, "te ");
    strictEqual(typingText.remainingRoman, "sutodesuyonn");

    strictEqual(typingText.text, "て　すとですよん");
    strictEqual(typingText.completedText, "て　");
    strictEqual(typingText.remainingText, "すとですよん");
});

test("わんだほーい！ wandaho-i!", () => {
    const typingText = new TypingText("わんだほーい！");

    for (const key of "wandaho-i") {
        strictEqual(typingText.inputKey(key), TEXT_INCOMPLETE);
    }
    strictEqual(typingText.inputKey("!"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "wandaho-i!");
    strictEqual(typingText.completedRoman, "wandaho-i!");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "わんだほーい！");
    strictEqual(typingText.completedText, "わんだほーい！");
    strictEqual(typingText.remainingText, "");
});

test("わんだほーい！ W", () => {
    const typingText = new TypingText("わんだほーい！");

    strictEqual(typingText.inputKey("W", false), TEXT_UNMATCH);

    strictEqual(typingText.roman, "wandaho-i!");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "wandaho-i!");

    strictEqual(typingText.text, "わんだほーい！");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "わんだほーい！");
});

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

test("CharCreationError", () => {
    throws(() => {
            new TypingText("あい竹輪うえお");
        },
        CharCreationError
    );
});

test("NoRemainingInputError", () => {
    const typingText = new TypingText("てすとですよん");
    for (const key of "tesutodesuyonn") {
        typingText.inputKey(key);
    }

    throws(() => {
            typingText.inputKey("n")
        },
        NoRemainingInputError
    );
});

test("しゃ sixya", () => {
    const typingText = new TypingText("しゃ");

    for (const key of "sixy") {
        strictEqual(typingText.inputKey(key), TEXT_INCOMPLETE);
    }
    strictEqual(typingText.inputKey("a"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "sya");
    strictEqual(typingText.completedRoman, "sixya");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "しゃ");
    strictEqual(typingText.completedText, "しゃ");
    strictEqual(typingText.remainingText, "");
});

test("しゃち sixya", () => {
    const typingText = new TypingText("しゃち");

    for (const key of "sixya") {
        strictEqual(typingText.inputKey(key), TEXT_INCOMPLETE);
    }

    strictEqual(typingText.roman, "syati");
    strictEqual(typingText.completedRoman, "sixya");
    strictEqual(typingText.remainingRoman, "ti");

    strictEqual(typingText.text, "しゃち");
    strictEqual(typingText.completedText, "しゃ");
    strictEqual(typingText.remainingText, "ち");
});

test("しゃち sixy", () => {
    const typingText = new TypingText("しゃち");

    for (const key of "sixy") {
        strictEqual(typingText.inputKey(key), TEXT_INCOMPLETE);
    }

    strictEqual(typingText.roman, "syati");
    strictEqual(typingText.completedRoman, "sixy");
    strictEqual(typingText.remainingRoman, "ati");

    strictEqual(typingText.text, "しゃち");
    strictEqual(typingText.completedText, "し");
    strictEqual(typingText.remainingText, "ゃち");
});

test("しゃ cixya", () => {
    const typingText = new TypingText("しゃ");

    for (const key of "cixy") {
        strictEqual(typingText.inputKey(key), TEXT_INCOMPLETE);
    }
    strictEqual(typingText.inputKey("a"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "sya");
    strictEqual(typingText.completedRoman, "cixya");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "しゃ");
    strictEqual(typingText.completedText, "しゃ");
    strictEqual(typingText.remainingText, "");
});

test("んｘ nx", () => {
    const typingText = new TypingText("んｘ");

    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("x"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "nnx");
    strictEqual(typingText.completedRoman, "n");
    strictEqual(typingText.remainingRoman, "nx");

    strictEqual(typingText.text, "んx");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "んx");
});

test("んｘ nnx", () => {
    const typingText = new TypingText("んｘ");

    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("x"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "nnx");
    strictEqual(typingText.completedRoman, "nnx");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "んx");
    strictEqual(typingText.completedText, "んx");
    strictEqual(typingText.remainingText, "");
});

test("ん！ n!", () => {
    const typingText = new TypingText("ん！");

    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("!"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "n!");
    strictEqual(typingText.completedRoman, "n!");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "ん！");
    strictEqual(typingText.completedText, "ん！");
    strictEqual(typingText.remainingText, "");
});

test("ん! n!", () => {
    const typingText = new TypingText("ん!");

    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("!"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "nn!");
    strictEqual(typingText.completedRoman, "n");
    strictEqual(typingText.remainingRoman, "n!");

    strictEqual(typingText.text, "ん!");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "ん!");
});

test("ん! nn!", () => {
    const typingText = new TypingText("ん!");

    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("!"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "nn!");
    strictEqual(typingText.completedRoman, "nn!");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "ん!");
    strictEqual(typingText.completedText, "ん!");
    strictEqual(typingText.remainingText, "");
});

test("'ん ' 半スペ", () => {
    const typingText = new TypingText("ん ", false);

    strictEqual(typingText.roman, "nn ");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "nn ");

    strictEqual(typingText.text, "ん ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "ん ");
});

test("'ん ' 'n ' 半スペ", () => {
    const typingText = new TypingText("ん ", false);

    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey(" "), TEXT_UNMATCH);

    strictEqual(typingText.roman, "nn ");
    strictEqual(typingText.completedRoman, "n");
    strictEqual(typingText.remainingRoman, "n ");

    strictEqual(typingText.text, "ん ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "ん ");
});

test("'ん　' 全スペ", () => {
    const typingText = new TypingText("ん　", false);

    strictEqual(typingText.roman, "nn ");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "nn ");

    strictEqual(typingText.text, "ん　");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "ん　");
});

test("'ん　' 'n ' 全スペ", () => {
    const typingText = new TypingText("ん　", false);

    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey(" "), TEXT_UNMATCH);

    strictEqual(typingText.roman, "nn ");
    strictEqual(typingText.completedRoman, "n");
    strictEqual(typingText.remainingRoman, "n ");

    strictEqual(typingText.text, "ん　");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "ん　");
});

test("あんこ anko", () => {
    const typingText = new TypingText("あんこ");

    strictEqual(typingText.inputKey("a"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("k"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("o"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "anko");
    strictEqual(typingText.completedRoman, "anko");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "あんこ");
    strictEqual(typingText.completedText, "あんこ");
    strictEqual(typingText.remainingText, "");
});

test("あん ann", () => {
    const typingText = new TypingText("あん");

    strictEqual(typingText.inputKey("a"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("n"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "ann");
    strictEqual(typingText.completedRoman, "ann");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "あん");
    strictEqual(typingText.completedText, "あん");
    strictEqual(typingText.remainingText, "");
});

test("はっ haxtu", () => {
    const typingText = new TypingText("はっ");

    strictEqual(typingText.inputKey("h"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("a"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("u"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "haxtu");
    strictEqual(typingText.completedRoman, "haxtu");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "はっ");
    strictEqual(typingText.completedText, "はっ");
    strictEqual(typingText.remainingText, "");
});

test("はっ hah", () => {
    const typingText = new TypingText("はっ");

    strictEqual(typingText.inputKey("h"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("a"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("h"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "haxtu");
    strictEqual(typingText.completedRoman, "ha");
    strictEqual(typingText.remainingRoman, "xtu");

    strictEqual(typingText.text, "はっ");
    strictEqual(typingText.completedText, "は");
    strictEqual(typingText.remainingText, "っ");
});

test("っちゃ tty", () => {
    const typingText = new TypingText("っちゃ");

    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("y"), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "ttya");
    strictEqual(typingText.completedRoman, "tty");
    strictEqual(typingText.remainingRoman, "a");

    strictEqual(typingText.text, "っちゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っちゃ");
});

test("っちゃ ttixya", () => {
    const typingText = new TypingText("っちゃ");

    for (const key of "ttixy") {
        strictEqual(typingText.inputKey(key), TEXT_INCOMPLETE);
    }
    strictEqual(typingText.inputKey("a"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "ttya");
    strictEqual(typingText.completedRoman, "ttixya");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "っちゃ");
    strictEqual(typingText.completedText, "っちゃ");
    strictEqual(typingText.remainingText, "");
});

test("っしゃ sy", () => {
    const typingText = new TypingText("っしゃ");

    strictEqual(typingText.inputKey("s"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("y"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "ssya");
    strictEqual(typingText.completedRoman, "s");
    strictEqual(typingText.remainingRoman, "sya");

    strictEqual(typingText.text, "っしゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っしゃ");
});

test("しゅっちょう syuttyou", () => {
    const typingText = new TypingText("しゅっちょう");

    for (const key of "syuxtutixyo") {
        strictEqual(typingText.inputKey(key), TEXT_INCOMPLETE);
    }
    strictEqual(typingText.inputKey("u"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "syuttyou");
    strictEqual(typingText.completedRoman, "syuxtutixyou");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "しゅっちょう");
    strictEqual(typingText.completedText, "しゅっちょう");
    strictEqual(typingText.remainingText, "");
});

test("っちゃ ttya", () => {
    const typingText = new TypingText("っちゃ");

    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("y"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("a"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "ttya");
    strictEqual(typingText.completedRoman, "ttya");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "っちゃ");
    strictEqual(typingText.completedText, "っちゃ");
    strictEqual(typingText.remainingText, "");
});

test("まっちゃ mattya", () => {
    const typingText = new TypingText("まっちゃ");

    strictEqual(typingText.inputKey("m"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("a"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("y"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("a"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "mattya");
    strictEqual(typingText.completedRoman, "mattya");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "まっちゃ");
    strictEqual(typingText.completedText, "まっちゃ");
    strictEqual(typingText.remainingText, "");
});

test("しゃシゃシャｼｬしャ syashasixyashixyacixya", () => {
    const typingText = new TypingText("しゃシゃシャｼｬしャ");

    for (const key of "syashasixyashixyacixy") {
        strictEqual(typingText.inputKey(key), TEXT_INCOMPLETE);
    }
    strictEqual(typingText.inputKey("a"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "syasyasyasyasya");
    strictEqual(typingText.completedRoman, "syashasixyashixyacixya");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "しゃしゃしゃしゃしゃ");
    strictEqual(typingText.completedText, "しゃしゃしゃしゃしゃ");
    strictEqual(typingText.remainingText, "");
});

test("っん", () => {
    const typingText = new TypingText("っん");

    strictEqual(typingText.roman, "xxn");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "xxn");

    strictEqual(typingText.text, "っん");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っん");
});

test("っん xxn", () => {
    const typingText = new TypingText("っん");

    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("n"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "xxn");
    strictEqual(typingText.completedRoman, "xxn");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "っん");
    strictEqual(typingText.completedText, "っん");
    strictEqual(typingText.remainingText, "");
});

test("っん xn", () => {
    const typingText = new TypingText("っん");

    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("n"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "xxn");
    strictEqual(typingText.completedRoman, "x");
    strictEqual(typingText.remainingRoman, "xn");

    strictEqual(typingText.text, "っん");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っん");
});

test("っん xtuxn", () => {
    const typingText = new TypingText("っん");

    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("u"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("n"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "xxn");
    strictEqual(typingText.completedRoman, "xtuxn");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "っん");
    strictEqual(typingText.completedText, "っん");
    strictEqual(typingText.remainingText, "");
});

test("っん n", () => {
    const typingText = new TypingText("っん");

    strictEqual(typingText.inputKey("n"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "xxn");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "xxn");

    strictEqual(typingText.text, "っん");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っん");
});

test("っあ xtua", () => {
    const typingText = new TypingText("っあ");

    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("u"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("a"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "xtua");
    strictEqual(typingText.completedRoman, "xtua");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "っあ");
    strictEqual(typingText.completedText, "っあ");
    strictEqual(typingText.remainingText, "");
});

test("っあ a", () => {
    const typingText = new TypingText("っあ");

    strictEqual(typingText.inputKey("a"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "xtua");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "xtua");

    strictEqual(typingText.text, "っあ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っあ");
});

test("っぅ xxu", () => {
    const typingText = new TypingText("っぅ");

    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("u"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "xxu");
    strictEqual(typingText.completedRoman, "xxu");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "っぅ");
    strictEqual(typingText.completedText, "っぅ");
    strictEqual(typingText.remainingText, "");
});

test("っぅ llu", () => {
    const typingText = new TypingText("っぅ");

    strictEqual(typingText.inputKey("l"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("l"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("u"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "xxu");
    strictEqual(typingText.completedRoman, "llu");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "っぅ");
    strictEqual(typingText.completedText, "っぅ");
    strictEqual(typingText.remainingText, "");
});

test("った tta", () => {
    const typingText = new TypingText("った");

    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("a"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "tta");
    strictEqual(typingText.completedRoman, "tta");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "った");
    strictEqual(typingText.completedText, "った");
    strictEqual(typingText.remainingText, "");
});

test("っつ ttu", () => {
    const typingText = new TypingText("っつ");

    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("u"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "ttu");
    strictEqual(typingText.completedRoman, "ttu");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "っつ");
    strictEqual(typingText.completedText, "っつ");
    strictEqual(typingText.remainingText, "");
});

test("っった tt", () => {
    const typingText = new TypingText("っった");

    strictEqual(typingText.inputKey("t"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "xtutta");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "xtutta");

    strictEqual(typingText.text, "っった");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っった");
});

test("っな xtuna", () => {
    const typingText = new TypingText("っな");

    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("u"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("a"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "xtuna");
    strictEqual(typingText.completedRoman, "xtuna");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "っな");
    strictEqual(typingText.completedText, "っな");
    strictEqual(typingText.remainingText, "");
});

test("っゃ xxya", () => {
    const typingText = new TypingText("っゃ");

    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("y"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("a"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "xxya");
    strictEqual(typingText.completedRoman, "xxya");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "っゃ");
    strictEqual(typingText.completedText, "っゃ");
    strictEqual(typingText.remainingText, "");
});

test("っゃ llya", () => {
    const typingText = new TypingText("っゃ");

    strictEqual(typingText.inputKey("l"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("l"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("y"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("a"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "xxya");
    strictEqual(typingText.completedRoman, "llya");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "っゃ");
    strictEqual(typingText.completedText, "っゃ");
    strictEqual(typingText.remainingText, "");
});

test("っゃ lx", () => {
    const typingText = new TypingText("っゃ");

    strictEqual(typingText.inputKey("l"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("x"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "xxya");
    strictEqual(typingText.completedRoman, "l");
    strictEqual(typingText.remainingRoman, "lya");

    strictEqual(typingText.text, "っゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っゃ");
});

test("っゃ xl", () => {
    const typingText = new TypingText("っゃ");

    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("l"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "xxya");
    strictEqual(typingText.completedRoman, "x");
    strictEqual(typingText.remainingRoman, "xya");

    strictEqual(typingText.text, "っゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っゃ");
});

test("っし cci", () => {
    const typingText = new TypingText("っし");

    strictEqual(typingText.inputKey("c"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("c"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("i"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "ssi");
    strictEqual(typingText.completedRoman, "cci");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "っし");
    strictEqual(typingText.completedText, "っし");
    strictEqual(typingText.remainingText, "");
});

test("っx xx", () => {
    const typingText = new TypingText("っx");

    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("x"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "xtux");
    strictEqual(typingText.completedRoman, "x");
    strictEqual(typingText.remainingRoman, "tux");

    strictEqual(typingText.text, "っx");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っx");
});

test("っx ll", () => {
    const typingText = new TypingText("っx");

    strictEqual(typingText.inputKey("l"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("l"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "xtux");
    strictEqual(typingText.completedRoman, "l");
    strictEqual(typingText.remainingRoman, "tux");

    strictEqual(typingText.text, "っx");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っx");
});

test("っー -", () => {
    const typingText = new TypingText("っー");

    strictEqual(typingText.inputKey("-"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "xtu-");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "xtu-");

    strictEqual(typingText.text, "っー");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っー");
});

test("あっ axtu", () => {
    const typingText = new TypingText("あっ");

    strictEqual(typingText.inputKey("a"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("u"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "axtu");
    strictEqual(typingText.completedRoman, "axtu");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "あっ");
    strictEqual(typingText.completedText, "あっ");
    strictEqual(typingText.remainingText, "");
});

test("んっ nxtu", () => {
    const typingText = new TypingText("んっ");

    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("u"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "nxtu");
    strictEqual(typingText.completedRoman, "nxtu");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "んっ");
    strictEqual(typingText.completedText, "んっ");
    strictEqual(typingText.remainingText, "");
});

test("んっ nnltu", () => {
    const typingText = new TypingText("んっ");

    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("l"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("u"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "nxtu");
    strictEqual(typingText.completedRoman, "nnltu");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "んっ");
    strictEqual(typingText.completedText, "んっ");
    strictEqual(typingText.remainingText, "");
});

test("んー n-", () => {
    const typingText = new TypingText("んー");

    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("-"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "n-");
    strictEqual(typingText.completedRoman, "n-");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "んー");
    strictEqual(typingText.completedText, "んー");
    strictEqual(typingText.remainingText, "");
});

test("んん nnnn", () => {
    const typingText = new TypingText("んん");

    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("n"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "nnnn");
    strictEqual(typingText.completedRoman, "nnnn");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "んん");
    strictEqual(typingText.completedText, "んん");
    strictEqual(typingText.remainingText, "");
});

test("んにゃぴ nnnyapi", () => {
    const typingText = new TypingText("んにゃぴ");

    for (const key of "nnnyap") {
        strictEqual(typingText.inputKey(key), TEXT_INCOMPLETE);
    }
    strictEqual(typingText.inputKey("i"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "nnnyapi");
    strictEqual(typingText.completedRoman, "nnnyapi");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "んにゃぴ");
    strictEqual(typingText.completedText, "んにゃぴ");
    strictEqual(typingText.remainingText, "");
});

test("くゃ qya", () => {
    const typingText = new TypingText("くゃ");

    strictEqual(typingText.inputKey("q"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("y"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("a"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "qya");
    strictEqual(typingText.completedRoman, "qya");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "くゃ");
    strictEqual(typingText.completedText, "くゃ");
    strictEqual(typingText.remainingText, "");
});

test("しゃ c", () => {
    const typingText = new TypingText("しゃ");

    strictEqual(typingText.inputKey("c"), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "sya");
    strictEqual(typingText.completedRoman, "c");
    strictEqual(typingText.remainingRoman, "ixya");

    strictEqual(typingText.text, "しゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "しゃ");
});

test("くゃ k", () => {
    const typingText = new TypingText("くゃ");

    strictEqual(typingText.inputKey("k"), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "qya");
    strictEqual(typingText.completedRoman, "k");
    strictEqual(typingText.remainingRoman, "uxya");

    strictEqual(typingText.text, "くゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "くゃ");
});

test("んあ na", () => {
    const typingText = new TypingText("んあ");

    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("a"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "nna");
    strictEqual(typingText.completedRoman, "n");
    strictEqual(typingText.remainingRoman, "na");

    strictEqual(typingText.text, "んあ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "んあ");
});

test("んあ nna", () => {
    const typingText = new TypingText("んあ");

    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("a"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "nna");
    strictEqual(typingText.completedRoman, "nna");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "んあ");
    strictEqual(typingText.completedText, "んあ");
    strictEqual(typingText.remainingText, "");
});

test("ん^ n^", () => {
    const typingText = new TypingText("ん^");

    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("^"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "nn^");
    strictEqual(typingText.completedRoman, "n");
    strictEqual(typingText.remainingRoman, "n^");

    strictEqual(typingText.text, "ん^");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "ん^");
});

test("ん^ぼ n^", () => {
    const typingText = new TypingText("ん^ぼ");

    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("^"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "nn^bo");
    strictEqual(typingText.completedRoman, "n");
    strictEqual(typingText.remainingRoman, "n^bo");

    strictEqual(typingText.text, "ん^ぼ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "ん^ぼ");
});

test("ん^ nn^", () => {
    const typingText = new TypingText("ん^");

    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("^"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "nn^");
    strictEqual(typingText.completedRoman, "nn^");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "ん^");
    strictEqual(typingText.completedText, "ん^");
    strictEqual(typingText.remainingText, "");
});

test("ん^ぼ nn^", () => {
    const typingText = new TypingText("ん^ぼ");

    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("^"), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "nn^bo");
    strictEqual(typingText.completedRoman, "nn^");
    strictEqual(typingText.remainingRoman, "bo");

    strictEqual(typingText.text, "ん^ぼ");
    strictEqual(typingText.completedText, "ん^");
    strictEqual(typingText.remainingText, "ぼ");
});

test("ん＾ n^", () => {
    const typingText = new TypingText("ん＾");

    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("^"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "n^");
    strictEqual(typingText.completedRoman, "n^");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "ん＾");
    strictEqual(typingText.completedText, "ん＾");
    strictEqual(typingText.remainingText, "");
});

test("ん＾ぼ n^", () => {
    const typingText = new TypingText("ん＾ぼ");

    strictEqual(typingText.inputKey("n"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("^"), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "n^bo");
    strictEqual(typingText.completedRoman, "n^");
    strictEqual(typingText.remainingRoman, "bo");

    strictEqual(typingText.text, "ん＾ぼ");
    strictEqual(typingText.completedText, "ん＾");
    strictEqual(typingText.remainingText, "ぼ");
});

test("びゃ bei", () => {
    const typingText = new TypingText("びゃ");

    strictEqual(typingText.inputKey("b"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("e"), TEXT_UNMATCH);
    strictEqual(typingText.inputKey("i"), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "bya");
    strictEqual(typingText.completedRoman, "bi");
    strictEqual(typingText.remainingRoman, "xya");

    strictEqual(typingText.text, "びゃ");
    strictEqual(typingText.completedText, "び");
    strictEqual(typingText.remainingText, "ゃ");
});

test("っふゃ h", () => {
    const typingText = new TypingText("っふゃ");

    strictEqual(typingText.inputKey("h"), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "ffya");
    strictEqual(typingText.completedRoman, "h");
    strictEqual(typingText.remainingRoman, "huxya");

    strictEqual(typingText.text, "っふゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っふゃ");
});

test("っふゃあ h", () => {
    const typingText = new TypingText("っふゃあ");

    strictEqual(typingText.inputKey("h"), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "ffyaa");
    strictEqual(typingText.completedRoman, "h");
    strictEqual(typingText.remainingRoman, "huxyaa");

    strictEqual(typingText.text, "っふゃあ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っふゃあ");
});

test("っゃったっゃったっゃ llyattallyattallya", () => {
    const typingText = new TypingText("っゃったっゃったっゃ");

    for (const key of "llyattallyattally") {
        strictEqual(typingText.inputKey(key), TEXT_INCOMPLETE);
    }
    strictEqual(typingText.inputKey("a"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "xxyattaxxyattaxxya");
    strictEqual(typingText.completedRoman, "llyattallyattallya");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "っゃったっゃったっゃ");
    strictEqual(typingText.completedText, "っゃったっゃったっゃ");
    strictEqual(typingText.remainingText, "");
});

test("っゃ xtu", () => {
    const typingText = new TypingText("っゃ");

    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("u"), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "xxya");
    strictEqual(typingText.completedRoman, "xtu");
    strictEqual(typingText.remainingRoman, "xya");

    strictEqual(typingText.text, "っゃ");
    strictEqual(typingText.completedText, "っ");
    strictEqual(typingText.remainingText, "ゃ");
});

test("っl ll", () => {
    const typingText = new TypingText("っl");

    strictEqual(typingText.inputKey("l"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("l"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "xtul");
    strictEqual(typingText.completedRoman, "l");
    strictEqual(typingText.remainingRoman, "tul");

    strictEqual(typingText.text, "っl");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っl");
});

test("った x", () => {
    const typingText = new TypingText("った");

    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "tta");
    strictEqual(typingText.completedRoman, "x");
    strictEqual(typingText.remainingRoman, "tuta");

    strictEqual(typingText.text, "った");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "った");
});

test("っゃあ x", () => {
    const typingText = new TypingText("っゃあ");

    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "xxyaa");
    strictEqual(typingText.completedRoman, "x");
    strictEqual(typingText.remainingRoman, "xyaa");

    strictEqual(typingText.text, "っゃあ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っゃあ");
});

test("あっゃ a", () => {
    const typingText = new TypingText("あっゃ");

    strictEqual(typingText.inputKey("a"), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "axxya");
    strictEqual(typingText.completedRoman, "a");
    strictEqual(typingText.remainingRoman, "xxya");

    strictEqual(typingText.text, "あっゃ");
    strictEqual(typingText.completedText, "あ");
    strictEqual(typingText.remainingText, "っゃ");
});

test("っゃ xt", () => {
    const typingText = new TypingText("っゃ");

    strictEqual(typingText.inputKey("x"), TEXT_INCOMPLETE);
    strictEqual(typingText.inputKey("t"), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "xxya");
    strictEqual(typingText.completedRoman, "xt");
    strictEqual(typingText.remainingRoman, "uxya");

    strictEqual(typingText.text, "っゃ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っゃ");
});

test("あっんあ axxna", () => {
    const typingText = new TypingText("あっんあ");

    for (const key of "axxn") {
        strictEqual(typingText.inputKey(key), TEXT_INCOMPLETE);
    }
    strictEqual(typingText.inputKey("a"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "axxna");
    strictEqual(typingText.completedRoman, "axxna");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "あっんあ");
    strictEqual(typingText.completedText, "あっんあ");
    strictEqual(typingText.remainingText, "");
});

test("あっんあ a", () => {
    const typingText = new TypingText("あっんあ");

    strictEqual(typingText.inputKey("a"), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "axxna");
    strictEqual(typingText.completedRoman, "a");
    strictEqual(typingText.remainingRoman, "xxna");

    strictEqual(typingText.text, "あっんあ");
    strictEqual(typingText.completedText, "あ");
    strictEqual(typingText.remainingText, "っんあ");
});

test("かっんあ k", () => {
    const typingText = new TypingText("かっんあ");

    strictEqual(typingText.inputKey("k"), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "kaxxna");
    strictEqual(typingText.completedRoman, "k");
    strictEqual(typingText.remainingRoman, "axxna");

    strictEqual(typingText.text, "かっんあ");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "かっんあ");
});

test("あっあ a", () => {
    const typingText = new TypingText("あっあ");

    strictEqual(typingText.inputKey("a"), TEXT_INCOMPLETE);

    strictEqual(typingText.roman, "axtua");
    strictEqual(typingText.completedRoman, "a");
    strictEqual(typingText.remainingRoman, "xtua");

    strictEqual(typingText.text, "あっあ");
    strictEqual(typingText.completedText, "あ");
    strictEqual(typingText.remainingText, "っあ");
});

test("っな xtuna", () => {
    const typingText = new TypingText("っな");

    strictEqual(typingText.roman, "xtuna");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "xtuna");

    strictEqual(typingText.text, "っな");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っな");
});

test("っな n", () => {
    const typingText = new TypingText("っな");

    strictEqual(typingText.inputKey("n"), TEXT_UNMATCH);

    strictEqual(typingText.roman, "xtuna");
    strictEqual(typingText.completedRoman, "");
    strictEqual(typingText.remainingRoman, "xtuna");

    strictEqual(typingText.text, "っな");
    strictEqual(typingText.completedText, "");
    strictEqual(typingText.remainingText, "っな");
});

