# typing-jp

## これ is 何

日本語のタイピングゲームの入力判定のためのライブラリです。  
`sya, sha, sixya`のように複数あるローマ字入力にも対応しています。  

## サンプル

[タイピングゲーム](https://mogamoga1024.github.io/typing-jp/sample/sample.html)  
[プログラム](https://github.com/mogamoga1024/typing-jp/blob/main/sample/sample.js)

## ダウンロード方法

### ファイルが欲しい場合

[これ](https://github.com/mogamoga1024/typing-jp/blob/main/dist/cdn/typing-jp.js)を使ってください。

### CDNで使いたい場合

```html
<script src="https://cdn.jsdelivr.net/npm/@mogamoga1024/typing-jp@latest/dist/cdn/typing-jp.js"></script>
```

### npmで使いたい場合

```
npm i @mogamoga1024/typing-jp
```

```js
import { TypingText } from "@mogamoga1024/typing-jp";
```

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

## リファレンス：TypingTextクラス

この眠くなるようなリファレンスを読むよりも[サンプルのプログラム](https://github.com/mogamoga1024/typing-jp/blob/main/sample/sample.js)を読んだ方が速く理解できると思います。

### TypingText(text[, ignoreSpace])

コンストラクタ

|名称|型|説明|
|-|-|-|
|text|string|タイピング対象のテキスト<br>「ひらがな、カタカナ、数字、英語、ASCIIで使われている記号」のみが使われている必要があります。(半角・全角は区別しない)|
|ignoreSpace|boolean(省略可)|falseの場合、textから半角スペース、全角スペースが排除されます。trueの場合は何もしません。デフォルトはtrueです。|

#### 備考

* textが空と見なされた場合、EmptyTextErrorが投げられます。
* textがローマ字で表現できない場合、CharCreationErrorが投げられます。

### static isValidInputKey(key)

ローマ字として有効な入力かどうかを判定します。  
静的メソッドであることに注意してください。

具体例をあげると「Shift」「Ctrl」などの入力はfalse、「a」「7」などの入力はtrueを返します。

#### 引数

|名称|型|説明|
|-|-|-|
|key|string|入力されたkey<br>[KeyboardEvent:key](https://developer.mozilla.org/ja/docs/Web/API/KeyboardEvent/key)を想定|

#### 戻り値

ローマ字として有効な入力の場合はtrue、それ以外はfalse

### inputKey(key[, isCapsLock])

タイピング対象のテキストにkeyを反映させた後、その結果を返します。

#### 引数

|名称|型|説明|
|-|-|-|
|key|string|入力されたkey<br>[KeyboardEvent:key](https://developer.mozilla.org/ja/docs/Web/API/KeyboardEvent/key)を想定|
|isCapsLock|boolean(省略可)|trueの場合、CapsLockがONであると判断します。falseの場合、CapsLockがOFFであると判断します。詳しくは備考を見てください。デフォルトはfalseです。|

#### 戻り値

以下のいずれかの文字列

|値|説明|
|-|-|
|"unmatch"|入力ミス|
|"incomplete"|入力OKだが文章は未完成|
|"complete"|入力OKで文章も完成した|

#### 備考1

"complete"が返された状態で更にinputKeyメソッドを呼び出すとNoRemainingInputErrorが投げられます。

#### 備考2：isCapsLockってなんやねん

大雑把に説明すると、

isCapsLockがtrueの場合  
「あいうえお(aiueo)」というテキストに「AIUEO」と入力しても問題ないと見なします。  
isCapsLockがfalseの場合  
「あいうえお(aiueo)」というテキストに「AIUEO」と入力した場合、ローマ字として不適と見なします。(実際のキーボードの挙動に合わせている。)

意味わかんねーよ。的な方はfalse(デフォルト値)にしておけば何ら問題ありません。

### remainingRoman

現在の入力状況に対する残りのローマ字を返すプロパティです。

## license

MIT or WTFPL or くいなちゃんライセンス
