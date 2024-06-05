
const domText1 = document.querySelector("#text1");
const domText2 = document.querySelector("#text2");
const domRoman1 = document.querySelector("#roman1");
const domRoman2 = document.querySelector("#roman2");
const domCharRoman = document.querySelector("#char-roman");

// var originalText = createRandomOriginalText();
// var originalText = "っふゃ";
// var originalText = "っゃったっゃったっゃ";
var originalText = "っゃあ";
typingText = new TypingText(originalText);
console.log("----------");
console.log(originalText);

domText2.innerText = typingText.remainingText;
domRoman2.innerText = typingText.remainingRoman;
domCharRoman.innerText = typingText.char.expectRomanArray;

window.onkeydown = function(e) {
    if (e.repeat) {
        return;
    }

    // ShiftやF11のような入力を弾く
    if (!TypingText.isValidInputKey(e.key)) {
        return;
    }

    const isCapsLock = e.getModifierState("CapsLock");

    // キー入力の更新
    const result = typingText.inputKey(e.key, isCapsLock);
    console.log(e.key, result);

    switch (result) {
        // 不一致の場合
        case "unmatch":
            return;

        // 一致しているが文章が未完成の場合
        case "incomplete":
            domText1.innerText = typingText.completedText;
            domText2.innerText = typingText.remainingText;
            domRoman1.innerText = typingText.completedRoman;
            domRoman2.innerText = typingText.remainingRoman;
            domCharRoman.innerText = typingText.char.expectRomanArray;
            return;

        // 文章が完成した場合
        case "complete":
            // 次の文章へ
            originalText = createRandomOriginalText();
            typingText = new TypingText(originalText);
            console.log("----------");
            console.log(originalText);
        
            domText1.innerText = "";
            domText2.innerText = typingText.remainingText;
            domRoman1.innerText = "";
            domRoman2.innerText = typingText.remainingRoman;
            domCharRoman.innerText = typingText.char.expectRomanArray;

            return;
    }
};

function createRandomOriginalText() {
    const allCharList1 = [
        "あ", "い", "う", "え", "お", "いぇ", "うぁ", "うぃ", "うぇ", "うぉ",
        "ゐ", "ゑ", "ぁ", "ぃ", "ぅ", "ぇ", "ぉ", "か", "き", "く",
        "け", "こ", "きゃ", "きぃ", "きゅ", "きぇ", "きょ", "くゃ", "くゅ", "くょ",
        "くぁ", "くぃ", "くぅ", "くぇ", "くぉ", "が", "ぎ", "ぐ", "げ", "ご",
        "ぎゃ", "ぎぃ", "ぎゅ", "ぎぇ", "ぎょ", "ぐぁ", "ぐぃ", "ぐぅ", "ぐぇ", "ぐぉ",
        "ゕ", "ゖ", "さ", "し", "す", "せ", "そ", "しゃ", "しぃ", "しゅ",
        "しぇ", "しょ", "すぁ", "すぃ", "すぅ", "すぇ", "すぉ", "ざ", "じ", "ず",
        "ぜ", "ぞ", "じゃ", "じぃ", "じゅ", "じぇ", "じょ", "た", "ち", "つ",
        "て", "と", "ちゃ", "ちぃ", "ちゅ", "ちぇ", "ちょ", "つぁ", "つぃ", "つぇ",
        "つぉ", "てゃ", "てぃ", "てゅ", "てぇ", "てょ", "とぁ", "とぃ", "とぅ", "とぇ",
        "とぉ", "だ", "ぢ", "づ", "で", "ど", "ぢゃ", "ぢぃ", "ぢゅ", "ぢぇ",
        "ぢょ", "でゃ", "でぃ", "でゅ", "でぇ", "でょ", "どぁ", "どぃ", "どぅ", "どぇ",
        "どぉ", "っ", "な", "に", "ぬ", "ね", "の", "にゃ", "にぃ", "にゅ",
        "にぇ", "にょ", "は", "ひ", "ふ", "へ", "ほ", "ひゃ", "ひぃ", "ひゅ",
        "ひぇ", "ひょ", "ふぁ", "ふぃ", "ふぅ", "ふぇ", "ふぉ", "ふゃ", "ふゅ", "ふょ",
        "ば", "び", "ぶ", "べ", "ぼ", "びゃ", "びぃ", "びゅ", "びぇ", "びょ",
        "ゔぁ", "ゔぃ", "ゔ" , "ゔぇ", "ゔぉ", "ゔゃ", "ゔゅ", "ゔょ", "ぱ", "ぴ",
        "ぷ", "ぺ", "ぽ", "ぴゃ", "ぴぃ", "ぴゅ", "ぴぇ", "ぴょ", "ま", "み",
        "む", "め", "も", "みゃ", "みぃ", "みゅ", "みぇ", "みょ", "や", "ゆ",
        "よ", "ゃ", "ゅ", "ょ", "ら", "り", "る", "れ", "ろ", "りゃ",
        "りぃ", "りゅ", "りぇ", "りょ", "わ", "を", "ん", "ゎ",
    ];
    const allCharList2 = [
        "a", "ａ", "b", "ｂ", "c", "ｃ", "d", "ｄ", "e", "ｅ",
        "f", "ｆ", "g", "ｇ", "h", "ｈ", "i", "ｉ", "j", "ｊ",
        "k", "ｋ", "l", "ｌ", "m", "ｍ", "n", "ｎ", "o", "ｏ",
        "p", "ｐ", "q", "ｑ", "r", "ｒ", "s", "ｓ", "t", "ｔ",
        "u", "ｕ", "v", "ｖ", "w", "ｗ", "x", "ｘ", "y", "ｙ",
        "z", "ｚ", "A", "Ａ", "B", "Ｂ", "C", "Ｃ", "D", "Ｄ",
        "E", "Ｅ", "F", "Ｆ", "G", "Ｇ", "H", "Ｈ", "I", "Ｉ",
        "J", "Ｊ", "K", "Ｋ", "L", "Ｌ", "M", "Ｍ", "N", "Ｎ",
        "O", "Ｏ", "P", "Ｐ", "Q", "Ｑ", "R", "Ｒ", "S", "Ｓ",
        "T", "Ｔ", "U", "Ｕ", "V", "Ｖ", "W", "Ｗ", "X", "Ｘ",
        "Y", "Ｙ", "Z", "Ｚ", "0", "０", "1", "１", "2", "２",
        "3", "３", "4", "４", "5", "５", "6", "６", "7", "７",
        "8", "８", "9", "９", " ", "　", "!", "！", "\"", "”",
        "#", "＃", "$", "＄", "%", "％", "&", "＆", "'", "’",
        "(", "（", ")", "）", "*", "＊", "+", "＋", ",", "、",
        "-", "ー", ".", "。", "/", "・", ":", "：", ";", "；",
        "<", "＜", "=", "＝", ">", "＞", "?", "？", "@", "＠",
        "[", "「", "\\", "￥", "]", "」", "^", "＾", "_", "＿",
        "`", "‘", "{", "｛", "|", "｜", "}", "｝", "~", "～",
    ];

    const maxCharCount = random(1, 5);
    const charList = [];

    for (let charCount = 1; charCount <= maxCharCount; charCount++) {
        const allCharList = random(1, 10) === 1 ? allCharList2 : allCharList1;
        const char = allCharList[random(0, allCharList.length - 1)];
        charList.push(char);
    }

    if (maxCharCount > 1 && random(1, 5) === 1) {
        if (random(0, 1) === 0) {
            charList[0] = "っ";
        }
        else {
            charList[0] = "ん";
        }
    }

    for (let i = 0; i < charList.length; i++) {
        const j = random(0, charList.length - 1);
        const tmp = charList[i];
        charList[i] = charList[j];
        charList[j] = tmp;
    }

    return charList.join("");
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

