# typing-jp

## これ is 何

日本語のタイピングゲームの入力判定のためのライブラリ（WIP）です。  
`sya, sha, sixya`のように複数あるローマ字入力にも対応しています。  

## サンプル

[タイピングゲーム](https://mogamoga1024.github.io/typing-jp/sample/sample.html)  
[プログラム](https://github.com/mogamoga1024/typing-jp/blob/main/sample/sample.js)

## ダウンロード方法

### ファイルが欲しい場合

[これ](https://github.com/mogamoga1024/typing-jp/blob/main/dist/cdn/typing-jp.js)を使ってください。

### CDNで使いたい場合

【TODO】

### npmで使いたい場合

【TODO】

## ざっくりと説明

[サンプルのプログラム](https://github.com/mogamoga1024/typing-jp/blob/main/sample/sample.js)を読んだ方が深く理解できると思いますが、ざっくりと説明します。

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

## リファレンス

### TypingTextクラス

#### TypingText(text, ignoreSpace)

コンストラクタ

|名称|型|説明|
|-|-|-|
|text|string|タイピング対象のテキスト<br>「ひらがな、カタカナ、数字、英語、ASCIIで使われている記号」のみが使われている必要があります。(半角・全角は区別しない)|
|ignoreSpace|boolean(省略可)|falseの場合、textから半角スペース、全角スペースが排除されます。trueの場合は何もしません。デフォルトはtrueです。|

##### 備考

* textが空と見なされた場合、EmptyTextErrorが投げられます。
* textがローマ字で表現できない場合、CharCreationErrorが投げられます。



## license

MIT or WTFPL or くいなちゃんライセンス
