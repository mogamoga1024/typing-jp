
const domText1 = document.querySelector("#text1");
const domText2 = document.querySelector("#text2");
const domRoman1 = document.querySelector("#roman1");
const domRoman2 = document.querySelector("#roman2");
const domCharRoman = document.querySelector("#char-roman");

var originalText = createRandomOriginalText();
// var originalText = "っふゃ";
// var originalText = "っゃったっゃったっゃ";
// var originalText = "あっゃ";
// var originalText = "っゃ";
// var originalText = "あっんあ";
// var originalText = "かっんあ";
// var originalText = "あっあ";
// var originalText = "ぁかXしぃつ";
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
            console.log("----------");
            console.log(originalText);
            typingText = new TypingText(originalText, false);
        
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
        "あ", "い", "う", "え", "お",
        "ぁ", "ぃ", "ぅ", "ぇ", "ぉ",
         "か", "き", "く", "け", "こ", 
        "きゃ", "きゅ", "きょ",
        "が", "ぎ", "ぐ", "げ", "ご",
        "ぎゃ", "ぎゅ", "ぎょ", 
        "さ", "し", "す", "せ", "そ",
        "しゃ", "しゅ", "しょ", 
        "ざ", "じ", "ず", "ぜ", "ぞ", 
        "じゃ", "じゅ", "じょ",
        "た", "ち", "つ", "て", "と", 
        "ちゃ", "ちゅ", "ちょ", 
        "だ", "ぢ", "づ", "で", "ど", 
        "っ",
        "な", "に", "ぬ", "ね", "の",
        "は", "ひ", "ふ", "へ", "ほ",
        "ひゃ", "ひゅ", "ひょ",
        "ば", "び", "ぶ", "べ", "ぼ",
        "びゃ", "びゅ", "びょ",
        "ぱ", "ぴ", "ぷ", "ぺ", "ぽ", 
        "ぴゃ", "ぴゅ", "ぴょ",
        "ま", "み", "む", "め", "も", 
        "みゃ", "みゅ", "みょ", 
        "や", "ゆ", "よ",
        "ら", "り", "る", "れ", "ろ",
        "りゃ", "りゅ", "りょ",
        "わ", "を", "ん", 
    ];
    const allCharList2 = [
        "いぇ", "うぁ", "うぃ", "うぇ", "うぉ",
        "ゐ", "ゑ",
        "ゕ", "ゖ",
        "きぃ", "きぇ", 
        "くゃ", "くゅ", "くょ",
        "くぁ", "くぃ", "くぅ", "くぇ", "くぉ", 
        "ぎぃ", "ぎぇ",
        "ぐぁ", "ぐぃ", "ぐぅ", "ぐぇ", "ぐぉ",
        "しぃ", "しぇ", 
        "すぁ", "すぃ", "すぅ", "すぇ", "すぉ", 
        "じぃ", "じぇ", 
        "ちぃ", "ちぇ", 
        "つぁ", "つぃ", "つぇ", "つぉ", 
        "てゃ", "てぃ", "てゅ", "てぇ", "てょ", 
        "とぁ", "とぃ", "とぅ", "とぇ", "とぉ", 
        "ぢゃ", "ぢぃ", "ぢゅ", "ぢぇ", "ぢょ", 
        "でゃ", "でぃ", "でゅ", "でぇ", "でょ", 
        "どぁ", "どぃ", "どぅ", "どぇ", "どぉ", 
        "にゃ", "にぃ", "にゅ", "にぇ", "にょ", 
        "ひぃ", "ひぇ",  
        "ふぁ", "ふぃ", "ふぅ", "ふぇ", "ふぉ", 
        "ふゃ", "ふゅ", "ふょ",
        "びぃ", "びぇ", 
        "ゔぁ", "ゔぃ", "ゔ" , "ゔぇ", "ゔぉ",
        "ゔゃ", "ゔゅ", "ゔょ", 
        "ぴぃ", "ぴぇ", 
        "みぃ", "みぇ", 
        "ゃ", "ゅ", "ょ", 
        "りぃ", "りぇ", 
        "ゎ",
    ];
    const allCharList3 = [
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
        const p = random(1, 10);
        const allCharList = p === 1 ? allCharList2 : 
                            p <= 3  ? allCharList3 : allCharList1;
        const char = allCharList[random(0, allCharList.length - 1)];
        charList.push(char);
    }

    if (maxCharCount > 1 && random(1, 3) === 1) {
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

