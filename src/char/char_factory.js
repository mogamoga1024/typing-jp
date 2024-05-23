import { Char } from "./char.js";
import { CharJp } from "./char_jp.js";
import { CharJpXtu } from "./char_jp_xtu.js";
import { CharJpN } from "./char_jp_n.js";
import { CharCreationError } from "../error/char_creation_error.js";

export function createChar(name) {
    switch (name) {
        // あ行 
        case "あ": return new CharJp(name, ["a"]);
        case "い": return new CharJp(name, ["i", "yi"]);
        case "う": return new CharJp(name, ["u", "wu", "whu"]);
        case "え": return new CharJp(name, ["e"]);
        case "お": return new CharJp(name, ["o"]);

        case "いぇ": return new CharJp(name, ["ye"]);

        case "うぁ": return new CharJp(name, ["wha"]);
        case "うぃ": return new CharJp(name, ["wi", "whi"]);
        case "うぇ": return new CharJp(name, ["we", "whe"]);
        case "うぉ": return new CharJp(name, ["who"]);

        case "ゐ": return new CharJp(name, ["wi"]);
        case "ゑ": return new CharJp(name, ["we"]);

        case "ぁ": return new CharJp(name, ["xa", "la"]);
        case "ぃ": return new CharJp(name, ["xi", "li", "xyi", "lyi"]);
        case "ぅ": return new CharJp(name, ["xu", "lu"]);
        case "ぇ": return new CharJp(name, ["xe", "le", "xye", "lye"]);
        case "ぉ": return new CharJp(name, ["xo", "lo"]);

        // か行 
        case "か": return new CharJp(name, ["ka", "ca"]);
        case "き": return new CharJp(name, ["ki"]);
        case "く": return new CharJp(name, ["ku", "cu", "qu"]);
        case "け": return new CharJp(name, ["ke"]);
        case "こ": return new CharJp(name, ["ko", "co"]);

        case "きゃ": return new CharJp(name, ["kya"]);
        case "きぃ": return new CharJp(name, ["kyi"]);
        case "きゅ": return new CharJp(name, ["kyu"]);
        case "きぇ": return new CharJp(name, ["kye"]);
        case "きょ": return new CharJp(name, ["kyo"]);

        case "くゃ": return new CharJp(name, ["qya"]);
        case "くゅ": return new CharJp(name, ["qyu"]);
        case "くょ": return new CharJp(name, ["qyo"]);

        case "くぁ": return new CharJp(name, ["qa", "qwa", "kwa"]);
        case "くぃ": return new CharJp(name, ["qi", "qwi", "qyi"]);
        case "くぅ": return new CharJp(name, ["qwu"]);
        case "くぇ": return new CharJp(name, ["qe", "qwe", "qye"]);
        case "くぉ": return new CharJp(name, ["qo", "qwo"]);

        case "が": return new CharJp(name, ["ga"]);
        case "ぎ": return new CharJp(name, ["gi"]);
        case "ぐ": return new CharJp(name, ["gu"]);
        case "げ": return new CharJp(name, ["ge"]);
        case "ご": return new CharJp(name, ["go"]);

        case "ぎゃ": return new CharJp(name, ["gya"]);
        case "ぎぃ": return new CharJp(name, ["gyi"]);
        case "ぎゅ": return new CharJp(name, ["gyu"]);
        case "ぎぇ": return new CharJp(name, ["gye"]);
        case "ぎょ": return new CharJp(name, ["gyo"]);

        case "ぐぁ": return new CharJp(name, ["gwa"]);
        case "ぐぃ": return new CharJp(name, ["gwi"]);
        case "ぐぅ": return new CharJp(name, ["gwu"]);
        case "ぐぇ": return new CharJp(name, ["gwe"]);
        case "ぐぉ": return new CharJp(name, ["gwo"]);

        case "ゕ": return new CharJp(name, ["xka", "lka"]);
        case "ゖ": return new CharJp(name, ["xke", "lke"]);

        // さ行 
        case "さ": return new CharJp(name, ["sa"]);
        case "し": return new CharJp(name, ["si", "ci", "shi"]);
        case "す": return new CharJp(name, ["su"]);
        case "せ": return new CharJp(name, ["se", "ce"]);
        case "そ": return new CharJp(name, ["so"]);

        case "しゃ": return new CharJp(name, ["sya", "sha"]);
        case "しぃ": return new CharJp(name, ["syi"]);
        case "しゅ": return new CharJp(name, ["syu", "shu"]);
        case "しぇ": return new CharJp(name, ["sye", "she"]);
        case "しょ": return new CharJp(name, ["syo", "sho"]);

        case "すぁ": return new CharJp(name, ["swa"]);
        case "すぃ": return new CharJp(name, ["swi"]);
        case "すぅ": return new CharJp(name, ["swu"]);
        case "すぇ": return new CharJp(name, ["swe"]);
        case "すぉ": return new CharJp(name, ["swo"]);

        case "ざ": return new CharJp(name, ["za"]);
        case "じ": return new CharJp(name, ["zi", "ji"]);
        case "ず": return new CharJp(name, ["zu"]);
        case "ぜ": return new CharJp(name, ["ze"]);
        case "ぞ": return new CharJp(name, ["zo"]);

        case "じゃ": return new CharJp(name, ["zya", "ja", "jya"]);
        case "じぃ": return new CharJp(name, ["zyi", "jyi"]);
        case "じゅ": return new CharJp(name, ["zyu", "ju", "jyu"]);
        case "じぇ": return new CharJp(name, ["zye", "je", "jye"]);
        case "じょ": return new CharJp(name, ["zyo", "jo", "jyo"]);

        // た行 
        case "た": return new CharJp(name, ["ta"]);
        case "ち": return new CharJp(name, ["ti", "chi"]);
        case "つ": return new CharJp(name, ["tu", "tsu"]);
        case "て": return new CharJp(name, ["te"]);
        case "と": return new CharJp(name, ["to"]);

        case "ちゃ": return new CharJp(name, ["tya", "cha", "cya"]);
        case "ちぃ": return new CharJp(name, ["tyi", "cyi"]);
        case "ちゅ": return new CharJp(name, ["tyu", "chu", "cyu"]);
        case "ちぇ": return new CharJp(name, ["tye", "che", "cye"]);
        case "ちょ": return new CharJp(name, ["tyo", "cho", "cyo"]);

        case "つぁ": return new CharJp(name, ["tsa"]);
        case "つぃ": return new CharJp(name, ["tsi"]);
        case "つぇ": return new CharJp(name, ["tse"]);
        case "つぉ": return new CharJp(name, ["tso"]);

        case "てゃ": return new CharJp(name, ["tha"]);
        case "てぃ": return new CharJp(name, ["thi"]);
        case "てゅ": return new CharJp(name, ["thu"]);
        case "てぇ": return new CharJp(name, ["the"]);
        case "てょ": return new CharJp(name, ["tho"]);

        case "とぁ": return new CharJp(name, ["twa"]);
        case "とぃ": return new CharJp(name, ["twi"]);
        case "とぅ": return new CharJp(name, ["twu"]);
        case "とぇ": return new CharJp(name, ["twe"]);
        case "とぉ": return new CharJp(name, ["two"]);

        case "だ": return new CharJp(name, ["da"]);
        case "ぢ": return new CharJp(name, ["di"]);
        case "づ": return new CharJp(name, ["du"]);
        case "で": return new CharJp(name, ["de"]);
        case "ど": return new CharJp(name, ["do"]);

        case "ぢゃ": return new CharJp(name, ["dya"]);
        case "ぢぃ": return new CharJp(name, ["dyi"]);
        case "ぢゅ": return new CharJp(name, ["dyu"]);
        case "ぢぇ": return new CharJp(name, ["dye"]);
        case "ぢょ": return new CharJp(name, ["dyo"]);

        case "でゃ": return new CharJp(name, ["dha"]);
        case "でぃ": return new CharJp(name, ["dhi"]);
        case "でゅ": return new CharJp(name, ["dhu"]);
        case "でぇ": return new CharJp(name, ["dhe"]);
        case "でょ": return new CharJp(name, ["dho"]);

        case "どぁ": return new CharJp(name, ["dwa"]);
        case "どぃ": return new CharJp(name, ["dwi"]);
        case "どぅ": return new CharJp(name, ["dwu"]);
        case "どぇ": return new CharJp(name, ["dwe"]);
        case "どぉ": return new CharJp(name, ["dwo"]);

        case "っ": return new CharJpXtu();

        // な行 
        case "な": return new CharJp(name, ["na"]);
        case "に": return new CharJp(name, ["ni"]);
        case "ぬ": return new CharJp(name, ["nu"]);
        case "ね": return new CharJp(name, ["ne"]);
        case "の": return new CharJp(name, ["no"]);

        case "にゃ": return new CharJp(name, ["nya"]);
        case "にぃ": return new CharJp(name, ["nyi"]);
        case "にゅ": return new CharJp(name, ["nyu"]);
        case "にぇ": return new CharJp(name, ["nye"]);
        case "にょ": return new CharJp(name, ["nyo"]);

        // は行 
        case "は": return new CharJp(name, ["ha"]);
        case "ひ": return new CharJp(name, ["hi"]);
        case "ふ": return new CharJp(name, ["hu", "fu"]);
        case "へ": return new CharJp(name, ["he"]);
        case "ほ": return new CharJp(name, ["ho"]);

        case "ひゃ": return new CharJp(name, ["hya"]);
        case "ひぃ": return new CharJp(name, ["hyi"]);
        case "ひゅ": return new CharJp(name, ["hyu"]);
        case "ひぇ": return new CharJp(name, ["hye"]);
        case "ひょ": return new CharJp(name, ["hyo"]);

        case "ふぁ": return new CharJp(name, ["fa", "fwa"]);
        case "ふぃ": return new CharJp(name, ["fi", "fwi", "fyi"]);
        case "ふぅ": return new CharJp(name, ["fwu"]);
        case "ふぇ": return new CharJp(name, ["fe", "fwe", "fye"]);
        case "ふぉ": return new CharJp(name, ["fo", "fwo"]);

        case "ふゃ": return new CharJp(name, ["fya"]);
        case "ふゅ": return new CharJp(name, ["fyu"]);
        case "ふょ": return new CharJp(name, ["fyo"]);

        case "ば": return new CharJp(name, ["ba"]);
        case "び": return new CharJp(name, ["bi"]);
        case "ぶ": return new CharJp(name, ["bu"]);
        case "べ": return new CharJp(name, ["be"]);
        case "ぼ": return new CharJp(name, ["bo"]);

        case "びゃ": return new CharJp(name, ["bya"]);
        case "びぃ": return new CharJp(name, ["byi"]);
        case "びゅ": return new CharJp(name, ["byu"]);
        case "びぇ": return new CharJp(name, ["bye"]);
        case "びょ": return new CharJp(name, ["byo"]);

        case "ゔぁ": return new CharJp(name, ["va"]);
        case "ゔぃ": return new CharJp(name, ["vi", "vyi"]);
        case "ゔ":   return new CharJp(name, ["vu"]);
        case "ゔぇ": return new CharJp(name, ["ve", "vye"]);
        case "ゔぉ": return new CharJp(name, ["vo"]);

        case "ゔゃ": return new CharJp(name, ["vya"]);
        case "ゔゅ": return new CharJp(name, ["vyu"]);
        case "ゔょ": return new CharJp(name, ["vyo"]);

        case "ぱ": return new CharJp(name, ["pa"]);
        case "ぴ": return new CharJp(name, ["pi"]);
        case "ぷ": return new CharJp(name, ["pu"]);
        case "ぺ": return new CharJp(name, ["pe"]);
        case "ぽ": return new CharJp(name, ["po"]);

        case "ぴゃ": return new CharJp(name, ["pya"]);
        case "ぴぃ": return new CharJp(name, ["pyi"]);
        case "ぴゅ": return new CharJp(name, ["pyu"]);
        case "ぴぇ": return new CharJp(name, ["pye"]);
        case "ぴょ": return new CharJp(name, ["pyo"]);

        // ま行 
        case "ま": return new CharJp(name, ["ma"]);
        case "み": return new CharJp(name, ["mi"]);
        case "む": return new CharJp(name, ["mu"]);
        case "め": return new CharJp(name, ["me"]);
        case "も": return new CharJp(name, ["mo"]);

        case "みゃ": return new CharJp(name, ["mya"]);
        case "みぃ": return new CharJp(name, ["myi"]);
        case "みゅ": return new CharJp(name, ["myu"]);
        case "みぇ": return new CharJp(name, ["mye"]);
        case "みょ": return new CharJp(name, ["myo"]);

        // や行 
        case "や": return new CharJp(name, ["ya"]);
        case "ゆ": return new CharJp(name, ["yu"]);
        case "よ": return new CharJp(name, ["yo"]);

        case "ゃ": return new CharJp(name, ["xya", "lya"]);
        case "ゅ": return new CharJp(name, ["xyu", "lyu"]);
        case "ょ": return new CharJp(name, ["xyo", "lyo"]);

        // ら行 
        case "ら": return new CharJp(name, ["ra"]);
        case "り": return new CharJp(name, ["ri"]);
        case "る": return new CharJp(name, ["ru"]);
        case "れ": return new CharJp(name, ["re"]);
        case "ろ": return new CharJp(name, ["ro"]);

        case "りゃ": return new CharJp(name, ["rya"]);
        case "りぃ": return new CharJp(name, ["ryi"]);
        case "りゅ": return new CharJp(name, ["ryu"]);
        case "りぇ": return new CharJp(name, ["rye"]);
        case "りょ": return new CharJp(name, ["ryo"]);

        // わ行 
        case "わ": return new CharJp(name, ["wa"]);
        case "を": return new CharJp(name, ["wo"]);
        case "ん": return new CharJpN();

        case "ゎ": return new CharJp(name, ["xwa", "lwa"]);

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
