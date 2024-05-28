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
    strictEqual(typingText.inputKey("x"), TEXT_COMPLETE);

    strictEqual(typingText.roman, "nx");
    strictEqual(typingText.completedRoman, "nx");
    strictEqual(typingText.remainingRoman, "");

    strictEqual(typingText.text, "んｘ");
    strictEqual(typingText.completedText, "んｘ");
    strictEqual(typingText.remainingText, "");
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





