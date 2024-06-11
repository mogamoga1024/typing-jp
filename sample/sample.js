
const domText = document.querySelector("#text");
const domHiraText1 = document.querySelector("#hira-text1");
const domHiraText2 = document.querySelector("#hira-text2");
const domRoman1 = document.querySelector("#roman1");
const domRoman2 = document.querySelector("#roman2");

const textList = [
    "あのイーハトーヴォのすきとおった風、",
    "夏でも底に冷たさをもつ青いそら、",
    "うつくしい森で飾られたモリーオ市、",
    "郊外のぎらぎらひかる草の波。",
];

const hiraTextList = [
    "あのイーハトーヴォのすきとおったかぜ、",
    "なつでもそこにつめたさをもつあおいそら、",
    "うつくしいもりでかざられたモリーオし、",
    "こうがいのぎらぎらひかるくさのなみ。",
];

let index = 0;
let typingText = new TypingText(hiraTextList[index]);

domText.innerText = textList[index];
domHiraText2.innerText = typingText.remainingText;
domRoman2.innerText = typingText.remainingRoman;

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
    
    switch (result) {
        // 不一致の場合
        case "unmatch":
            return;

        // 一致しているが文章が未完成の場合
        case "incomplete":
            break;

        // 文章が完成した場合
        case "complete":
            // 次の文章へ
            index = (index + 1) % textList.length;
            domText.innerText = textList[index];
            typingText = new TypingText(hiraTextList[index]);
            break;
    }

    // UI更新
    domHiraText1.innerText = typingText.completedText;
    domHiraText2.innerText = typingText.remainingText;
    domRoman1.innerText = typingText.completedRoman;
    domRoman2.innerText = typingText.remainingRoman;
};
