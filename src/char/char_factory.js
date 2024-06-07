import { Char } from "./char.js";
import { CharZen } from "./char_zen.js";
import { CharZenXtu } from "./char_zen_xtu.js";
import { CharZenN } from "./char_zen_n.js";
import { CharCreationError } from "../error/char_creation_error.js";

export function createChar(name) {
    switch (name) {
        // あ行 
        case "あ": return new CharZen(name, ["a"]);
        case "い": return new CharZen(name, ["i", "yi"]);
        case "う": return new CharZen(name, ["u", "wu", "whu"]);
        case "え": return new CharZen(name, ["e"]);
        case "お": return new CharZen(name, ["o"]);

        case "いぇ": return new CharZen(name, ["ye"]);

        case "うぁ": return new CharZen(name, ["wha"]);
        case "うぃ": return new CharZen(name, ["wi", "whi"]);
        case "うぇ": return new CharZen(name, ["we", "whe"]);
        case "うぉ": return new CharZen(name, ["who"]);

        case "ゐ": return new CharZen(name, ["wi"]);
        case "ゑ": return new CharZen(name, ["we"]);

        case "ぁ": return new CharZen(name, ["xa", "la"]);
        case "ぃ": return new CharZen(name, ["xi", "li", "xyi", "lyi"]);
        case "ぅ": return new CharZen(name, ["xu", "lu"]);
        case "ぇ": return new CharZen(name, ["xe", "le", "xye", "lye"]);
        case "ぉ": return new CharZen(name, ["xo", "lo"]);

        // か行 
        case "か": return new CharZen(name, ["ka", "ca"]);
        case "き": return new CharZen(name, ["ki"]);
        case "く": return new CharZen(name, ["ku", "cu", "qu"]);
        case "け": return new CharZen(name, ["ke"]);
        case "こ": return new CharZen(name, ["ko", "co"]);

        case "きゃ": return new CharZen(name, ["kya"]);
        case "きぃ": return new CharZen(name, ["kyi"]);
        case "きゅ": return new CharZen(name, ["kyu"]);
        case "きぇ": return new CharZen(name, ["kye"]);
        case "きょ": return new CharZen(name, ["kyo"]);

        case "くゃ": return new CharZen(name, ["qya"]);
        case "くゅ": return new CharZen(name, ["qyu"]);
        case "くょ": return new CharZen(name, ["qyo"]);

        case "くぁ": return new CharZen(name, ["qa", "qwa", "kwa"]);
        case "くぃ": return new CharZen(name, ["qi", "qwi", "qyi"]);
        case "くぅ": return new CharZen(name, ["qwu"]);
        case "くぇ": return new CharZen(name, ["qe", "qwe", "qye"]);
        case "くぉ": return new CharZen(name, ["qo", "qwo"]);

        case "が": return new CharZen(name, ["ga"]);
        case "ぎ": return new CharZen(name, ["gi"]);
        case "ぐ": return new CharZen(name, ["gu"]);
        case "げ": return new CharZen(name, ["ge"]);
        case "ご": return new CharZen(name, ["go"]);

        case "ぎゃ": return new CharZen(name, ["gya"]);
        case "ぎぃ": return new CharZen(name, ["gyi"]);
        case "ぎゅ": return new CharZen(name, ["gyu"]);
        case "ぎぇ": return new CharZen(name, ["gye"]);
        case "ぎょ": return new CharZen(name, ["gyo"]);

        case "ぐぁ": return new CharZen(name, ["gwa"]);
        case "ぐぃ": return new CharZen(name, ["gwi"]);
        case "ぐぅ": return new CharZen(name, ["gwu"]);
        case "ぐぇ": return new CharZen(name, ["gwe"]);
        case "ぐぉ": return new CharZen(name, ["gwo"]);

        case "ゕ": return new CharZen(name, ["xka", "lka"]);
        case "ゖ": return new CharZen(name, ["xke", "lke"]);

        // さ行 
        case "さ": return new CharZen(name, ["sa"]);
        case "し": return new CharZen(name, ["si", "ci", "shi"]);
        case "す": return new CharZen(name, ["su"]);
        case "せ": return new CharZen(name, ["se", "ce"]);
        case "そ": return new CharZen(name, ["so"]);

        case "しゃ": return new CharZen(name, ["sya", "sha"]);
        case "しぃ": return new CharZen(name, ["syi"]);
        case "しゅ": return new CharZen(name, ["syu", "shu"]);
        case "しぇ": return new CharZen(name, ["sye", "she"]);
        case "しょ": return new CharZen(name, ["syo", "sho"]);

        case "すぁ": return new CharZen(name, ["swa"]);
        case "すぃ": return new CharZen(name, ["swi"]);
        case "すぅ": return new CharZen(name, ["swu"]);
        case "すぇ": return new CharZen(name, ["swe"]);
        case "すぉ": return new CharZen(name, ["swo"]);

        case "ざ": return new CharZen(name, ["za"]);
        case "じ": return new CharZen(name, ["zi", "ji"]);
        case "ず": return new CharZen(name, ["zu"]);
        case "ぜ": return new CharZen(name, ["ze"]);
        case "ぞ": return new CharZen(name, ["zo"]);

        case "じゃ": return new CharZen(name, ["zya", "ja", "jya"]);
        case "じぃ": return new CharZen(name, ["zyi", "jyi"]);
        case "じゅ": return new CharZen(name, ["zyu", "ju", "jyu"]);
        case "じぇ": return new CharZen(name, ["zye", "je", "jye"]);
        case "じょ": return new CharZen(name, ["zyo", "jo", "jyo"]);

        // た行 
        case "た": return new CharZen(name, ["ta"]);
        case "ち": return new CharZen(name, ["ti", "chi"]);
        case "つ": return new CharZen(name, ["tu", "tsu"]);
        case "て": return new CharZen(name, ["te"]);
        case "と": return new CharZen(name, ["to"]);

        case "ちゃ": return new CharZen(name, ["tya", "cha", "cya"]);
        case "ちぃ": return new CharZen(name, ["tyi", "cyi"]);
        case "ちゅ": return new CharZen(name, ["tyu", "chu", "cyu"]);
        case "ちぇ": return new CharZen(name, ["tye", "che", "cye"]);
        case "ちょ": return new CharZen(name, ["tyo", "cho", "cyo"]);

        case "つぁ": return new CharZen(name, ["tsa"]);
        case "つぃ": return new CharZen(name, ["tsi"]);
        case "つぇ": return new CharZen(name, ["tse"]);
        case "つぉ": return new CharZen(name, ["tso"]);

        case "てゃ": return new CharZen(name, ["tha"]);
        case "てぃ": return new CharZen(name, ["thi"]);
        case "てゅ": return new CharZen(name, ["thu"]);
        case "てぇ": return new CharZen(name, ["the"]);
        case "てょ": return new CharZen(name, ["tho"]);

        case "とぁ": return new CharZen(name, ["twa"]);
        case "とぃ": return new CharZen(name, ["twi"]);
        case "とぅ": return new CharZen(name, ["twu"]);
        case "とぇ": return new CharZen(name, ["twe"]);
        case "とぉ": return new CharZen(name, ["two"]);

        case "だ": return new CharZen(name, ["da"]);
        case "ぢ": return new CharZen(name, ["di"]);
        case "づ": return new CharZen(name, ["du"]);
        case "で": return new CharZen(name, ["de"]);
        case "ど": return new CharZen(name, ["do"]);

        case "ぢゃ": return new CharZen(name, ["dya"]);
        case "ぢぃ": return new CharZen(name, ["dyi"]);
        case "ぢゅ": return new CharZen(name, ["dyu"]);
        case "ぢぇ": return new CharZen(name, ["dye"]);
        case "ぢょ": return new CharZen(name, ["dyo"]);

        case "でゃ": return new CharZen(name, ["dha"]);
        case "でぃ": return new CharZen(name, ["dhi"]);
        case "でゅ": return new CharZen(name, ["dhu"]);
        case "でぇ": return new CharZen(name, ["dhe"]);
        case "でょ": return new CharZen(name, ["dho"]);

        case "どぁ": return new CharZen(name, ["dwa"]);
        case "どぃ": return new CharZen(name, ["dwi"]);
        case "どぅ": return new CharZen(name, ["dwu"]);
        case "どぇ": return new CharZen(name, ["dwe"]);
        case "どぉ": return new CharZen(name, ["dwo"]);

        case "っ": return new CharZenXtu();

        // な行 
        case "な": return new CharZen(name, ["na"]);
        case "に": return new CharZen(name, ["ni"]);
        case "ぬ": return new CharZen(name, ["nu"]);
        case "ね": return new CharZen(name, ["ne"]);
        case "の": return new CharZen(name, ["no"]);

        case "にゃ": return new CharZen(name, ["nya"]);
        case "にぃ": return new CharZen(name, ["nyi"]);
        case "にゅ": return new CharZen(name, ["nyu"]);
        case "にぇ": return new CharZen(name, ["nye"]);
        case "にょ": return new CharZen(name, ["nyo"]);

        // は行 
        case "は": return new CharZen(name, ["ha"]);
        case "ひ": return new CharZen(name, ["hi"]);
        case "ふ": return new CharZen(name, ["hu", "fu"]);
        case "へ": return new CharZen(name, ["he"]);
        case "ほ": return new CharZen(name, ["ho"]);

        case "ひゃ": return new CharZen(name, ["hya"]);
        case "ひぃ": return new CharZen(name, ["hyi"]);
        case "ひゅ": return new CharZen(name, ["hyu"]);
        case "ひぇ": return new CharZen(name, ["hye"]);
        case "ひょ": return new CharZen(name, ["hyo"]);

        case "ふぁ": return new CharZen(name, ["fa", "fwa"]);
        case "ふぃ": return new CharZen(name, ["fi", "fwi", "fyi"]);
        case "ふぅ": return new CharZen(name, ["fwu"]);
        case "ふぇ": return new CharZen(name, ["fe", "fwe", "fye"]);
        case "ふぉ": return new CharZen(name, ["fo", "fwo"]);

        case "ふゃ": return new CharZen(name, ["fya"]);
        case "ふゅ": return new CharZen(name, ["fyu"]);
        case "ふょ": return new CharZen(name, ["fyo"]);

        case "ば": return new CharZen(name, ["ba"]);
        case "び": return new CharZen(name, ["bi"]);
        case "ぶ": return new CharZen(name, ["bu"]);
        case "べ": return new CharZen(name, ["be"]);
        case "ぼ": return new CharZen(name, ["bo"]);

        case "びゃ": return new CharZen(name, ["bya"]);
        case "びぃ": return new CharZen(name, ["byi"]);
        case "びゅ": return new CharZen(name, ["byu"]);
        case "びぇ": return new CharZen(name, ["bye"]);
        case "びょ": return new CharZen(name, ["byo"]);

        case "ゔぁ": return new CharZen(name, ["va"]);
        case "ゔぃ": return new CharZen(name, ["vi", "vyi"]);
        case "ゔ":   return new CharZen(name, ["vu"]);
        case "ゔぇ": return new CharZen(name, ["ve", "vye"]);
        case "ゔぉ": return new CharZen(name, ["vo"]);

        case "ゔゃ": return new CharZen(name, ["vya"]);
        case "ゔゅ": return new CharZen(name, ["vyu"]);
        case "ゔょ": return new CharZen(name, ["vyo"]);

        case "ぱ": return new CharZen(name, ["pa"]);
        case "ぴ": return new CharZen(name, ["pi"]);
        case "ぷ": return new CharZen(name, ["pu"]);
        case "ぺ": return new CharZen(name, ["pe"]);
        case "ぽ": return new CharZen(name, ["po"]);

        case "ぴゃ": return new CharZen(name, ["pya"]);
        case "ぴぃ": return new CharZen(name, ["pyi"]);
        case "ぴゅ": return new CharZen(name, ["pyu"]);
        case "ぴぇ": return new CharZen(name, ["pye"]);
        case "ぴょ": return new CharZen(name, ["pyo"]);

        // ま行 
        case "ま": return new CharZen(name, ["ma"]);
        case "み": return new CharZen(name, ["mi"]);
        case "む": return new CharZen(name, ["mu"]);
        case "め": return new CharZen(name, ["me"]);
        case "も": return new CharZen(name, ["mo"]);

        case "みゃ": return new CharZen(name, ["mya"]);
        case "みぃ": return new CharZen(name, ["myi"]);
        case "みゅ": return new CharZen(name, ["myu"]);
        case "みぇ": return new CharZen(name, ["mye"]);
        case "みょ": return new CharZen(name, ["myo"]);

        // や行 
        case "や": return new CharZen(name, ["ya"]);
        case "ゆ": return new CharZen(name, ["yu"]);
        case "よ": return new CharZen(name, ["yo"]);

        case "ゃ": return new CharZen(name, ["xya", "lya"]);
        case "ゅ": return new CharZen(name, ["xyu", "lyu"]);
        case "ょ": return new CharZen(name, ["xyo", "lyo"]);

        // ら行 
        case "ら": return new CharZen(name, ["ra"]);
        case "り": return new CharZen(name, ["ri"]);
        case "る": return new CharZen(name, ["ru"]);
        case "れ": return new CharZen(name, ["re"]);
        case "ろ": return new CharZen(name, ["ro"]);

        case "りゃ": return new CharZen(name, ["rya"]);
        case "りぃ": return new CharZen(name, ["ryi"]);
        case "りゅ": return new CharZen(name, ["ryu"]);
        case "りぇ": return new CharZen(name, ["rye"]);
        case "りょ": return new CharZen(name, ["ryo"]);

        // わ行 
        case "わ": return new CharZen(name, ["wa"]);
        case "を": return new CharZen(name, ["wo"]);
        case "ん": return new CharZenN();

        case "ゎ": return new CharZen(name, ["xwa", "lwa"]);

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

        case "0": return new Char(name, ["0"]);
        case "1": return new Char(name, ["1"]);
        case "2": return new Char(name, ["2"]);
        case "3": return new Char(name, ["3"]);
        case "4": return new Char(name, ["4"]);
        case "5": return new Char(name, ["5"]);
        case "6": return new Char(name, ["6"]);
        case "7": return new Char(name, ["7"]);
        case "8": return new Char(name, ["8"]);
        case "9": return new Char(name, ["9"]);

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
