import { Char } from "./char.js";
import { CharJp } from "./char_jp.js";
import { CharJpXtu } from "./char_jp_xtu.js";
import { CharJpN } from "./char_jp_n.js";
import { CharCreationError } from "../error/char_creation_error.js";

export function createChar(name) {
    switch (name) {
        // あ行 
        case "あ": case "ア": return new CharJp(name, ["a"]);
        case "い": case "イ": return new CharJp(name, ["i", "yi"]);
        case "う": case "ウ": return new CharJp(name, ["u", "wu", "whu"]);
        case "え": case "エ": return new CharJp(name, ["e"]);
        case "お": case "オ": return new CharJp(name, ["o"]);

        case "いぇ": case "イェ": return new CharJp(name, ["ye"]);

        case "うぁ": case "ウァ": return new CharJp(name, ["wha"]);
        case "うぃ": case "ウィ": return new CharJp(name, ["wi", "whi"]);
        case "うぇ": case "ウェ": return new CharJp(name, ["we", "whe"]);
        case "うぉ": case "ウォ": return new CharJp(name, ["who"]);

        case "ゐ": case "ヰ": return new CharJp(name, ["wi"]);
        case "ゑ": case "ヱ": return new CharJp(name, ["we"]);

        case "ぁ": case "ァ": return new CharJp(name, ["xa", "la"]);
        case "ぃ": case "ィ": return new CharJp(name, ["xi", "li", "xyi", "lyi"]);
        case "ぅ": case "ゥ": return new CharJp(name, ["xu", "lu"]);
        case "ぇ": case "ェ": return new CharJp(name, ["xe", "le", "xye", "lye"]);
        case "ぉ": case "ォ": return new CharJp(name, ["xo", "lo"]);

        // か行 
        case "か": case "カ": return new CharJp(name, ["ka", "ca"]);
        case "き": case "キ": return new CharJp(name, ["ki"]);
        case "く": case "ク": return new CharJp(name, ["ku", "cu", "qu"]);
        case "け": case "ケ": return new CharJp(name, ["ke"]);
        case "こ": case "コ": return new CharJp(name, ["ko", "co"]);

        case "きゃ": case "キャ": return new CharJp(name, ["kya"]);
        case "きぃ": case "キィ": return new CharJp(name, ["kyi"]);
        case "きゅ": case "キュ": return new CharJp(name, ["kyu"]);
        case "きぇ": case "キェ": return new CharJp(name, ["kye"]);
        case "きょ": case "キョ": return new CharJp(name, ["kyo"]);

        case "くゃ": case "クャ": return new CharJp(name, ["qya"]);
        case "くゅ": case "クュ": return new CharJp(name, ["qyu"]);
        case "くょ": case "クョ": return new CharJp(name, ["qyo"]);

        case "くぁ": case "クァ": return new CharJp(name, ["qa", "qwa", "kwa"]);
        case "くぃ": case "クィ": return new CharJp(name, ["qi", "qwi", "qyi"]);
        case "くぅ": case "クゥ": return new CharJp(name, ["qwu"]);
        case "くぇ": case "クェ": return new CharJp(name, ["qe", "qwe", "qye"]);
        case "くぉ": case "クォ": return new CharJp(name, ["qo", "qwo"]);

        case "が": case "ガ": return new CharJp(name, ["ga"]);
        case "ぎ": case "ギ": return new CharJp(name, ["gi"]);
        case "ぐ": case "グ": return new CharJp(name, ["gu"]);
        case "げ": case "ゲ": return new CharJp(name, ["ge"]);
        case "ご": case "ゴ": return new CharJp(name, ["go"]);

        case "ぎゃ": case "ギャ": return new CharJp(name, ["gya"]);
        case "ぎぃ": case "ギィ": return new CharJp(name, ["gyi"]);
        case "ぎゅ": case "ギュ": return new CharJp(name, ["gyu"]);
        case "ぎぇ": case "ギェ": return new CharJp(name, ["gye"]);
        case "ぎょ": case "ギョ": return new CharJp(name, ["gyo"]);

        case "ぐぁ": case "グァ": return new CharJp(name, ["gwa"]);
        case "ぐぃ": case "グィ": return new CharJp(name, ["gwi"]);
        case "ぐぅ": case "グゥ": return new CharJp(name, ["gwu"]);
        case "ぐぇ": case "グェ": return new CharJp(name, ["gwe"]);
        case "ぐぉ": case "グォ": return new CharJp(name, ["gwo"]);

        case "ヵ": case "ヵ": return new CharJp(name, ["xka", "lka"]);
        case "ヶ": case "ヶ": return new CharJp(name, ["xke", "lke"]);

        // さ行 
        case "さ": case "サ": return new CharJp(name, ["sa"]);
        case "し": case "シ": return new CharJp(name, ["si", "ci", "shi"]);
        case "す": case "ス": return new CharJp(name, ["su"]);
        case "せ": case "セ": return new CharJp(name, ["se", "ce"]);
        case "そ": case "ソ": return new CharJp(name, ["so"]);

        case "しゃ": case "シャ": return new CharJp(name, ["sya", "sha"]);
        case "しぃ": case "シィ": return new CharJp(name, ["syi"]);
        case "しゅ": case "シュ": return new CharJp(name, ["syu", "shu"]);
        case "しぇ": case "シェ": return new CharJp(name, ["sye", "she"]);
        case "しょ": case "ショ": return new CharJp(name, ["syo", "sho"]);

        case "すぁ": case "スァ": return new CharJp(name, ["swa"]);
        case "すぃ": case "スィ": return new CharJp(name, ["swi"]);
        case "すぅ": case "スゥ": return new CharJp(name, ["swu"]);
        case "すぇ": case "スェ": return new CharJp(name, ["swe"]);
        case "すぉ": case "スォ": return new CharJp(name, ["swo"]);

        case "ざ": case "ザ": return new CharJp(name, ["za"]);
        case "じ": case "ジ": return new CharJp(name, ["zi", "ji"]);
        case "ず": case "ズ": return new CharJp(name, ["zu"]);
        case "ぜ": case "ゼ": return new CharJp(name, ["ze"]);
        case "ぞ": case "ゾ": return new CharJp(name, ["zo"]);

        case "じゃ": case "ジャ": return new CharJp(name, ["zya", "ja", "jya"]);
        case "じぃ": case "ジィ": return new CharJp(name, ["zyi", "jyi"]);
        case "じゅ": case "ジュ": return new CharJp(name, ["zyu", "ju", "jyu"]);
        case "じぇ": case "ジェ": return new CharJp(name, ["zye", "je", "jye"]);
        case "じょ": case "ジョ": return new CharJp(name, ["zyo", "jo", "jyo"]);

        // た行 
        case "た": case "タ": return new CharJp(name, ["ta"]);
        case "ち": case "チ": return new CharJp(name, ["ti", "chi"]);
        case "つ": case "ツ": return new CharJp(name, ["tu", "tsu"]);
        case "て": case "テ": return new CharJp(name, ["te"]);
        case "と": case "ト": return new CharJp(name, ["to"]);

        case "ちゃ": case "チャ": return new CharJp(name, ["tya", "cha", "cya"]);
        case "ちぃ": case "チィ": return new CharJp(name, ["tyi", "cyi"]);
        case "ちゅ": case "チュ": return new CharJp(name, ["tyu", "chu", "cyu"]);
        case "ちぇ": case "チェ": return new CharJp(name, ["tye", "che", "cye"]);
        case "ちょ": case "チョ": return new CharJp(name, ["tyo", "cho", "cyo"]);

        case "つぁ": case "ツァ": return new CharJp(name, ["tsa"]);
        case "つぃ": case "ツィ": return new CharJp(name, ["tsi"]);
        case "つぇ": case "ツェ": return new CharJp(name, ["tse"]);
        case "つぉ": case "ツォ": return new CharJp(name, ["tso"]);

        case "てゃ": case "テャ": return new CharJp(name, ["tha"]);
        case "てぃ": case "ティ": return new CharJp(name, ["thi"]);
        case "てゅ": case "テュ": return new CharJp(name, ["thu"]);
        case "てぇ": case "テェ": return new CharJp(name, ["the"]);
        case "てょ": case "テョ": return new CharJp(name, ["tho"]);

        case "とぁ": case "トァ": return new CharJp(name, ["twa"]);
        case "とぃ": case "トィ": return new CharJp(name, ["twi"]);
        case "とぅ": case "トゥ": return new CharJp(name, ["twu"]);
        case "とぇ": case "トェ": return new CharJp(name, ["twe"]);
        case "とぉ": case "トォ": return new CharJp(name, ["two"]);

        case "だ": case "ダ": return new CharJp(name, ["da"]);
        case "ぢ": case "ヂ": return new CharJp(name, ["di"]);
        case "づ": case "ヅ": return new CharJp(name, ["du"]);
        case "で": case "デ": return new CharJp(name, ["de"]);
        case "ど": case "ド": return new CharJp(name, ["do"]);

        case "ぢゃ": case "ヂャ": return new CharJp(name, ["dya"]);
        case "ぢぃ": case "ヂィ": return new CharJp(name, ["dyi"]);
        case "ぢゅ": case "ヂュ": return new CharJp(name, ["dyu"]);
        case "ぢぇ": case "ヂェ": return new CharJp(name, ["dye"]);
        case "ぢょ": case "ヂョ": return new CharJp(name, ["dyo"]);

        case "でゃ": case "デャ": return new CharJp(name, ["dha"]);
        case "でぃ": case "ディ": return new CharJp(name, ["dhi"]);
        case "でゅ": case "デュ": return new CharJp(name, ["dhu"]);
        case "でぇ": case "デェ": return new CharJp(name, ["dhe"]);
        case "でょ": case "デョ": return new CharJp(name, ["dho"]);

        case "どぁ": case "ドァ": return new CharJp(name, ["dwa"]);
        case "どぃ": case "ドィ": return new CharJp(name, ["dwi"]);
        case "どぅ": case "ドゥ": return new CharJp(name, ["dwu"]);
        case "どぇ": case "ドェ": return new CharJp(name, ["dwe"]);
        case "どぉ": case "ドォ": return new CharJp(name, ["dwo"]);

        case "っ": case "ッ": return new CharJpXtu();

        // な行 
        case "な": case "ナ": return new CharJp(name, ["na"]);
        case "に": case "ニ": return new CharJp(name, ["ni"]);
        case "ぬ": case "ヌ": return new CharJp(name, ["nu"]);
        case "ね": case "ネ": return new CharJp(name, ["ne"]);
        case "の": case "ノ": return new CharJp(name, ["no"]);

        case "にゃ": case "ニャ": return new CharJp(name, ["nya"]);
        case "にぃ": case "ニィ": return new CharJp(name, ["nyi"]);
        case "にゅ": case "ニュ": return new CharJp(name, ["nyu"]);
        case "にぇ": case "ニェ": return new CharJp(name, ["nye"]);
        case "にょ": case "ニョ": return new CharJp(name, ["nyo"]);

        // は行 
        case "は": case "ハ": return new CharJp(name, ["ha"]);
        case "ひ": case "ヒ": return new CharJp(name, ["hi"]);
        case "ふ": case "フ": return new CharJp(name, ["hu", "fu"]);
        case "へ": case "ヘ": return new CharJp(name, ["he"]);
        case "ほ": case "ホ": return new CharJp(name, ["ho"]);

        case "ひゃ": case "ヒャ": return new CharJp(name, ["hya"]);
        case "ひぃ": case "ヒィ": return new CharJp(name, ["hyi"]);
        case "ひゅ": case "ヒュ": return new CharJp(name, ["hyu"]);
        case "ひぇ": case "ヒェ": return new CharJp(name, ["hye"]);
        case "ひょ": case "ヒョ": return new CharJp(name, ["hyo"]);

        case "ふぁ": case "ファ": return new CharJp(name, ["fa", "fwa"]);
        case "ふぃ": case "フィ": return new CharJp(name, ["fi", "fwi", "fyi"]);
        case "ふぅ": case "フゥ": return new CharJp(name, ["fwu"]);
        case "ふぇ": case "フェ": return new CharJp(name, ["fe", "fwe", "fye"]);
        case "ふぉ": case "フォ": return new CharJp(name, ["fo", "fwo"]);

        case "ふゃ": case "フャ": return new CharJp(name, ["fya"]);
        case "ふゅ": case "フュ": return new CharJp(name, ["fyu"]);
        case "ふょ": case "フョ": return new CharJp(name, ["fyo"]);

        case "ば": case "バ": return new CharJp(name, ["ba"]);
        case "び": case "ビ": return new CharJp(name, ["bi"]);
        case "ぶ": case "ブ": return new CharJp(name, ["bu"]);
        case "べ": case "ベ": return new CharJp(name, ["be"]);
        case "ぼ": case "ボ": return new CharJp(name, ["bo"]);

        case "びゃ": case "ビャ": return new CharJp(name, ["bya"]);
        case "びぃ": case "ビィ": return new CharJp(name, ["byi"]);
        case "びゅ": case "ビュ": return new CharJp(name, ["byu"]);
        case "びぇ": case "ビェ": return new CharJp(name, ["bye"]);
        case "びょ": case "ビョ": return new CharJp(name, ["byo"]);

        case "ヴぁ": case "ヴァ": return new CharJp(name, ["va"]);
        case "ヴぃ": case "ヴィ": return new CharJp(name, ["vi", "vyi"]);
        case "ヴ": case "ヴ": return new CharJp(name, ["vu"]);
        case "ヴぇ": case "ヴェ": return new CharJp(name, ["ve", "vye"]);
        case "ヴぉ": case "ヴォ": return new CharJp(name, ["vo"]);

        case "ヴゃ": case "ヴャ": return new CharJp(name, ["vya"]);
        case "ヴゅ": case "ヴュ": return new CharJp(name, ["vyu"]);
        case "ヴょ": case "ヴョ": return new CharJp(name, ["vyo"]);

        case "ぱ": case "パ": return new CharJp(name, ["pa"]);
        case "ぴ": case "ピ": return new CharJp(name, ["pi"]);
        case "ぷ": case "プ": return new CharJp(name, ["pu"]);
        case "ぺ": case "ペ": return new CharJp(name, ["pe"]);
        case "ぽ": case "ポ": return new CharJp(name, ["po"]);

        case "ぴゃ": case "ピャ": return new CharJp(name, ["pya"]);
        case "ぴぃ": case "ピィ": return new CharJp(name, ["pyi"]);
        case "ぴゅ": case "ピュ": return new CharJp(name, ["pyu"]);
        case "ぴぇ": case "ピェ": return new CharJp(name, ["pye"]);
        case "ぴょ": case "ピョ": return new CharJp(name, ["pyo"]);

        // ま行 
        case "ま": case "マ": return new CharJp(name, ["ma"]);
        case "み": case "ミ": return new CharJp(name, ["mi"]);
        case "む": case "ム": return new CharJp(name, ["mu"]);
        case "め": case "メ": return new CharJp(name, ["me"]);
        case "も": case "モ": return new CharJp(name, ["mo"]);

        case "みゃ": case "ミャ": return new CharJp(name, ["mya"]);
        case "みぃ": case "ミィ": return new CharJp(name, ["myi"]);
        case "みゅ": case "ミュ": return new CharJp(name, ["myu"]);
        case "みぇ": case "ミェ": return new CharJp(name, ["mye"]);
        case "みょ": case "ミョ": return new CharJp(name, ["myo"]);

        // や行 
        case "や": case "ヤ": return new CharJp(name, ["ya"]);
        case "ゆ": case "ユ": return new CharJp(name, ["yu"]);
        case "よ": case "ヨ": return new CharJp(name, ["yo"]);

        case "ゃ": case "ャ": return new CharJp(name, ["xya", "lya"]);
        case "ゅ": case "ュ": return new CharJp(name, ["xyu", "lyu"]);
        case "ょ": case "ョ": return new CharJp(name, ["xyo", "lyo"]);

        // ら行 
        case "ら": case "ラ": return new CharJp(name, ["ra"]);
        case "り": case "リ": return new CharJp(name, ["ri"]);
        case "る": case "ル": return new CharJp(name, ["ru"]);
        case "れ": case "レ": return new CharJp(name, ["re"]);
        case "ろ": case "ロ": return new CharJp(name, ["ro"]);

        case "りゃ": case "リャ": return new CharJp(name, ["rya"]);
        case "りぃ": case "リィ": return new CharJp(name, ["ryi"]);
        case "りゅ": case "リュ": return new CharJp(name, ["ryu"]);
        case "りぇ": case "リェ": return new CharJp(name, ["rye"]);
        case "りょ": case "リョ": return new CharJp(name, ["ryo"]);

        // わ行 
        case "わ": case "ワ": return new CharJp(name, ["wa"]);
        case "を": case "ヲ": return new CharJp(name, ["wo"]);
        case "ん": case "ン": return new CharJpN();

        case "ゎ": case "ヮ": return new CharJp(name, ["xwa", "lwa"]);

        // アルファベット・数字
        case "a": return new Char(name, ["a"]);
        case "b": return new Char(name, ["b"]);
        case "c": return new Char(name, ["c"]);
        case "d": return new Char(name, ["d"]);
        case "e": return new Char(name, ["e"]);
        case "f": return new Char(name, ["f"]);
        case "g": return new Char(name, ["g"]);
        case "h": return new Char(name, ["h"]);
        case "i": return new Char(name, ["i"]);
        case "j": return new Char(name, ["j"]);
        case "k": return new Char(name, ["k"]);
        case "l": return new Char(name, ["l"]);
        case "m": return new Char(name, ["m"]);
        case "n": return new Char(name, ["n"]);
        case "o": return new Char(name, ["o"]);
        case "p": return new Char(name, ["p"]);
        case "q": return new Char(name, ["q"]);
        case "r": return new Char(name, ["r"]);
        case "s": return new Char(name, ["s"]);
        case "t": return new Char(name, ["t"]);
        case "u": return new Char(name, ["u"]);
        case "v": return new Char(name, ["v"]);
        case "w": return new Char(name, ["w"]);
        case "x": return new Char(name, ["x"]);
        case "y": return new Char(name, ["y"]);
        case "z": return new Char(name, ["z"]);

        case "A": return new Char(name, ["A"]);
        case "B": return new Char(name, ["B"]);
        case "C": return new Char(name, ["C"]);
        case "D": return new Char(name, ["D"]);
        case "E": return new Char(name, ["E"]);
        case "F": return new Char(name, ["F"]);
        case "G": return new Char(name, ["G"]);
        case "H": return new Char(name, ["H"]);
        case "I": return new Char(name, ["I"]);
        case "J": return new Char(name, ["J"]);
        case "K": return new Char(name, ["K"]);
        case "L": return new Char(name, ["L"]);
        case "M": return new Char(name, ["M"]);
        case "N": return new Char(name, ["N"]);
        case "O": return new Char(name, ["O"]);
        case "P": return new Char(name, ["P"]);
        case "Q": return new Char(name, ["Q"]);
        case "R": return new Char(name, ["R"]);
        case "S": return new Char(name, ["S"]);
        case "T": return new Char(name, ["T"]);
        case "U": return new Char(name, ["U"]);
        case "V": return new Char(name, ["V"]);
        case "W": return new Char(name, ["W"]);
        case "X": return new Char(name, ["X"]);
        case "Y": return new Char(name, ["Y"]);
        case "Z": return new Char(name, ["Z"]);

        case "0": case "０": return new Char(name, ["0"]);
        case "1": case "１": return new Char(name, ["1"]);
        case "2": case "２": return new Char(name, ["2"]);
        case "3": case "３": return new Char(name, ["3"]);
        case "4": case "４": return new Char(name, ["4"]);
        case "5": case "５": return new Char(name, ["5"]);
        case "6": case "６": return new Char(name, ["6"]);
        case "7": case "７": return new Char(name, ["7"]);
        case "8": case "８": return new Char(name, ["8"]);
        case "9": case "９": return new Char(name, ["9"]);

        // 記号 ASCII順
        case " ": case "　": return new Char(name, [" "]);
        case "!": case "！": return new Char(name, ["!"]);
        case '"': case "”": return new Char(name, ['"']);
        case "#": case "＃": return new Char(name, ["#"]);
        case "$": case "＄": return new Char(name, ["$"]);
        case "%": case "％": return new Char(name, ["%"]);
        case "&": case "＆": return new Char(name, ["&"]);
        case "'": case "’": return new Char(name, ["'"]);
        case "(": case "（": return new Char(name, ["("]);
        case ")": case "）": return new Char(name, [")"]);
        case "*": case "＊": return new Char(name, ["*"]);
        case "+": case "＋": return new Char(name, ["+"]);
        case ",": case "、": return new Char(name, [","]);
        case "-": case "ー": return new Char(name, ["-"]);
        case ".": case "。": return new Char(name, ["."]);
        case "/": case "・": return new Char(name, ["/"]);
        case ":": case "：": return new Char(name, [":"]);
        case ";": case "；": return new Char(name, [";"]);
        case "<": case "＜": return new Char(name, ["<"]);
        case "=": case "＝": return new Char(name, ["="]);
        case ">": case "＞": return new Char(name, [">"]);
        case "?": case "？": return new Char(name, ["?"]);
        case "@": case "＠": return new Char(name, ["@"]);
        case "[": case "「": return new Char(name, ["["]);
        case "\\": case "￥": return new Char(name, ["\\"]);
        case "]": case "」": return new Char(name, ["]"]);
        case "^": case "＾": return new Char(name, ["^"]);
        case "_": case "＿": return new Char(name, ["_"]);
        case "`": case "‘": return new Char(name, ["`"]);
        case "{": case "｛": return new Char(name, ["{"]);
        case "|": case "｜": return new Char(name, ["|"]);
        case "}": case "｝": return new Char(name, ["}"]);
        case "~": case "～": return new Char(name, ["~"]);

        default: throw new CharCreationError(`Charの生成に失敗しました：name = ${name}`);
    }
};
