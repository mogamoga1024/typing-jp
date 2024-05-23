# typing-jp

## これ is 何

日本語のタイピングゲームの入力判定のためのライブラリ（WIP）です。  
`sya, sha, sixya`のように複数あるローマ字入力にも対応しています。  

## サンプル

【TODO】サンプル作る

https://mogamoga1024.github.io/typing-jp/

## ダウンロード方法

### ファイルが欲しい場合

【TODO】

### CDNで使いたい場合

【TODO】

### npmで使いたい場合

【TODO】

## ざっくりと説明

サンプルのプログラムを読んだ方が深く理解できると思いますが、ざっくりと説明します。

### 1. まずはTypingTextオブジェクトを作る

引数はひらがな、カタカナ、英語、数字などの変換せずに入力できる文字である必要があります。

```js
const typingText = new TypingText("わたしは「こんにちは」といった。");
```

### 2. 後は各自お好きなように

キーの入力情報はinputKeyメソッドを利用して更新します。

```js
typingText.inputKey(keyboardEvent.key);
// 戻り値は
// "unmatch"    入力ミス
// "incomplete" 入力OKだが文章は未完成
// "complete"   入力OKで文章も完成した
```

残りのローマ字はremainingRomanプロパティで分かります。

```js
console.log(typingText.remainingRoman); // watasiha[konnnitiha]toitta.
```

ShiftやF11のようなキーとして判定したくない入力はTypingText.isValidInputKeyメソッドで弾けます。  
静的メソッドであることに注意してください。

```js
if (TypingText.isValidInputKey(keyboardEvent.key) === false) {
    return;
}
```

## 関数リファレンス

【TODO】

## license

MIT or WTFPL or くいなちゃんライセンス

## 前世

https://github.com/mogamoga1024/Typing
