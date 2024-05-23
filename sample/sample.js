
const domText = document.querySelector("#text");
const domRoman1 = document.querySelector("#roman1");
const domRoman2 = document.querySelector("#roman2");

// const text = "こんにちはっす";
// const text = "Hello, World!";
// const text = "しゃシゃ";
// const text = "ヴぁｳﾞｧ";
// const text = "わたしは「こんにちは」といった。";
const text = "しゃしゃしゃ";
// const text = "「なまこ」とは、いったいなんなのか？";
// const text = "っ";
// const text = "今日は";
domText.innerText = text;
const typingText = new TypingText(text);

domRoman2.innerText = typingText.remainingRoman;

window.onkeydown = function(e) {
    if (e.repeat) {
        return;
    }

    if (!TypingText.isValidInputKey(e.key)) {
        return;
    }

    const isCapsLock = e.getModifierState("CapsLock");

    const result = typingText.inputKey(e.key, isCapsLock);
    if (result === "unmatch") {
        return;
    }
    domRoman1.innerText += e.key;
    domRoman2.innerText = typingText.remainingRoman;
    if (result === "complete") {
        window.onkeydown = null;
    }
};
