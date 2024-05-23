
const domText = document.querySelector("#text");
const domRoman1 = document.querySelector("#roman1");
const domRoman2 = document.querySelector("#roman2");

const originalTextList = [
    "あのイーハトーヴォのすきとおった風、",
    "夏でも底に冷たさをもつ青いそら、",
    "うつくしい森で飾られたモリーオ市、",
    "郊外のぎらぎらひかる草の波。",
];

const typingTextList = [
    new TypingText("あのイーハトーヴォのすきとおったかぜ、"),
    new TypingText("なつでもそこにつめたさをもつあおいそら、"),
    new TypingText("うつくしいもりでかざられたモリーオし、"),
    new TypingText("こうがいのぎらぎらひかるくさのなみ。"),
];

let index = 0;
domText.innerText = originalTextList[index];
let typingText = typingTextList[index];

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
            domRoman1.innerText += e.key;
            domRoman2.innerText = typingText.remainingRoman;
            return;

        // 文章が完成の場合
        case "complete":
            // クリアしたか
            if (++index >= originalTextList.length) {
                domRoman1.innerText += e.key;
                domRoman2.innerText = typingText.remainingRoman;
                window.onkeydown = null;
                return;
            }

            // 次の文章へ
            domText.innerText = originalTextList[index];
            typingText = typingTextList[index];
        
            domRoman1.innerText = "";
            domRoman2.innerText = typingText.remainingRoman;

            return;
    }
};
