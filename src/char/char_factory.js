import { Char } from "./char.js";
import { CharZen } from "./char_zen.js";
import { CharZenXtu } from "./char_zen_xtu.js";
import { CharZenN } from "./char_zen_n.js";
import { CharCreationError } from "../error/char_creation_error.js";

export function createChar(name, priority) {
    switch (name) {
        // あ行 
        case "あ": return new CharZen(name, ["a"], priority);
        case "い": return new CharZen(name, ["i", "yi"], priority);
        case "う": return new CharZen(name, ["u", "wu", "whu"], priority);
        case "え": return new CharZen(name, ["e"], priority);
        case "お": return new CharZen(name, ["o"], priority);

        case "いぇ": return new CharZen(name, ["ye"], priority);

        case "うぁ": return new CharZen(name, ["wha"], priority);
        case "うぃ": return new CharZen(name, ["wi", "whi"], priority);
        case "うぇ": return new CharZen(name, ["we", "whe"], priority);
        case "うぉ": return new CharZen(name, ["who"], priority);

        case "ゐ": return new CharZen(name, ["wi"], priority);
        case "ゑ": return new CharZen(name, ["we"], priority);

        case "ぁ": return new CharZen(name, ["xa", "la"], priority);
        case "ぃ": return new CharZen(name, ["xi", "li", "xyi", "lyi"], priority);
        case "ぅ": return new CharZen(name, ["xu", "lu"], priority);
        case "ぇ": return new CharZen(name, ["xe", "le", "xye", "lye"], priority);
        case "ぉ": return new CharZen(name, ["xo", "lo"], priority);

        // か行 
        case "か": return new CharZen(name, ["ka", "ca"], priority);
        case "き": return new CharZen(name, ["ki"], priority);
        case "く": return new CharZen(name, ["ku", "cu", "qu"], priority);
        case "け": return new CharZen(name, ["ke"], priority);
        case "こ": return new CharZen(name, ["ko", "co"], priority);

        case "きゃ": return new CharZen(name, ["kya"], priority);
        case "きぃ": return new CharZen(name, ["kyi"], priority);
        case "きゅ": return new CharZen(name, ["kyu"], priority);
        case "きぇ": return new CharZen(name, ["kye"], priority);
        case "きょ": return new CharZen(name, ["kyo"], priority);

        case "くゃ": return new CharZen(name, ["qya"], priority);
        case "くゅ": return new CharZen(name, ["qyu"], priority);
        case "くょ": return new CharZen(name, ["qyo"], priority);

        case "くぁ": return new CharZen(name, ["qa", "qwa", "kwa"], priority);
        case "くぃ": return new CharZen(name, ["qi", "qwi", "qyi"], priority);
        case "くぅ": return new CharZen(name, ["qwu"], priority);
        case "くぇ": return new CharZen(name, ["qe", "qwe", "qye"], priority);
        case "くぉ": return new CharZen(name, ["qo", "qwo"], priority);

        case "が": return new CharZen(name, ["ga"], priority);
        case "ぎ": return new CharZen(name, ["gi"], priority);
        case "ぐ": return new CharZen(name, ["gu"], priority);
        case "げ": return new CharZen(name, ["ge"], priority);
        case "ご": return new CharZen(name, ["go"], priority);

        case "ぎゃ": return new CharZen(name, ["gya"], priority);
        case "ぎぃ": return new CharZen(name, ["gyi"], priority);
        case "ぎゅ": return new CharZen(name, ["gyu"], priority);
        case "ぎぇ": return new CharZen(name, ["gye"], priority);
        case "ぎょ": return new CharZen(name, ["gyo"], priority);

        case "ぐぁ": return new CharZen(name, ["gwa"], priority);
        case "ぐぃ": return new CharZen(name, ["gwi"], priority);
        case "ぐぅ": return new CharZen(name, ["gwu"], priority);
        case "ぐぇ": return new CharZen(name, ["gwe"], priority);
        case "ぐぉ": return new CharZen(name, ["gwo"], priority);

        case "ゕ": return new CharZen(name, ["xka", "lka"], priority);
        case "ゖ": return new CharZen(name, ["xke", "lke"], priority);

        // さ行 
        case "さ": return new CharZen(name, ["sa"], priority);
        case "し": return new CharZen(name, ["si", "ci", "shi"], priority);
        case "す": return new CharZen(name, ["su"], priority);
        case "せ": return new CharZen(name, ["se", "ce"], priority);
        case "そ": return new CharZen(name, ["so"], priority);

        case "しゃ": return new CharZen(name, ["sya", "sha"], priority);
        case "しぃ": return new CharZen(name, ["syi"], priority);
        case "しゅ": return new CharZen(name, ["syu", "shu"], priority);
        case "しぇ": return new CharZen(name, ["sye", "she"], priority);
        case "しょ": return new CharZen(name, ["syo", "sho"], priority);

        case "すぁ": return new CharZen(name, ["swa"], priority);
        case "すぃ": return new CharZen(name, ["swi"], priority);
        case "すぅ": return new CharZen(name, ["swu"], priority);
        case "すぇ": return new CharZen(name, ["swe"], priority);
        case "すぉ": return new CharZen(name, ["swo"], priority);

        case "ざ": return new CharZen(name, ["za"], priority);
        case "じ": return new CharZen(name, ["zi", "ji"], priority);
        case "ず": return new CharZen(name, ["zu"], priority);
        case "ぜ": return new CharZen(name, ["ze"], priority);
        case "ぞ": return new CharZen(name, ["zo"], priority);

        case "じゃ": return new CharZen(name, ["zya", "ja", "jya"], priority);
        case "じぃ": return new CharZen(name, ["zyi", "jyi"], priority);
        case "じゅ": return new CharZen(name, ["zyu", "ju", "jyu"], priority);
        case "じぇ": return new CharZen(name, ["zye", "je", "jye"], priority);
        case "じょ": return new CharZen(name, ["zyo", "jo", "jyo"], priority);

        // た行 
        case "た": return new CharZen(name, ["ta"], priority);
        case "ち": return new CharZen(name, ["ti", "chi"], priority);
        case "つ": return new CharZen(name, ["tu", "tsu"], priority);
        case "て": return new CharZen(name, ["te"], priority);
        case "と": return new CharZen(name, ["to"], priority);

        case "ちゃ": return new CharZen(name, ["tya", "cha", "cya"], priority);
        case "ちぃ": return new CharZen(name, ["tyi", "cyi"], priority);
        case "ちゅ": return new CharZen(name, ["tyu", "chu", "cyu"], priority);
        case "ちぇ": return new CharZen(name, ["tye", "che", "cye"], priority);
        case "ちょ": return new CharZen(name, ["tyo", "cho", "cyo"], priority);

        case "つぁ": return new CharZen(name, ["tsa"], priority);
        case "つぃ": return new CharZen(name, ["tsi"], priority);
        case "つぇ": return new CharZen(name, ["tse"], priority);
        case "つぉ": return new CharZen(name, ["tso"], priority);

        case "てゃ": return new CharZen(name, ["tha"], priority);
        case "てぃ": return new CharZen(name, ["thi"], priority);
        case "てゅ": return new CharZen(name, ["thu"], priority);
        case "てぇ": return new CharZen(name, ["the"], priority);
        case "てょ": return new CharZen(name, ["tho"], priority);

        case "とぁ": return new CharZen(name, ["twa"], priority);
        case "とぃ": return new CharZen(name, ["twi"], priority);
        case "とぅ": return new CharZen(name, ["twu"], priority);
        case "とぇ": return new CharZen(name, ["twe"], priority);
        case "とぉ": return new CharZen(name, ["two"], priority);

        case "だ": return new CharZen(name, ["da"], priority);
        case "ぢ": return new CharZen(name, ["di"], priority);
        case "づ": return new CharZen(name, ["du"], priority);
        case "で": return new CharZen(name, ["de"], priority);
        case "ど": return new CharZen(name, ["do"], priority);

        case "ぢゃ": return new CharZen(name, ["dya"], priority);
        case "ぢぃ": return new CharZen(name, ["dyi"], priority);
        case "ぢゅ": return new CharZen(name, ["dyu"], priority);
        case "ぢぇ": return new CharZen(name, ["dye"], priority);
        case "ぢょ": return new CharZen(name, ["dyo"], priority);

        case "でゃ": return new CharZen(name, ["dha"], priority);
        case "でぃ": return new CharZen(name, ["dhi"], priority);
        case "でゅ": return new CharZen(name, ["dhu"], priority);
        case "でぇ": return new CharZen(name, ["dhe"], priority);
        case "でょ": return new CharZen(name, ["dho"], priority);

        case "どぁ": return new CharZen(name, ["dwa"], priority);
        case "どぃ": return new CharZen(name, ["dwi"], priority);
        case "どぅ": return new CharZen(name, ["dwu"], priority);
        case "どぇ": return new CharZen(name, ["dwe"], priority);
        case "どぉ": return new CharZen(name, ["dwo"], priority);

        case "っ": return new CharZenXtu(name, ["xtu", "xtsu", "ltu", "ltsu"], priority);

        // な行 
        case "な": return new CharZen(name, ["na"], priority);
        case "に": return new CharZen(name, ["ni"], priority);
        case "ぬ": return new CharZen(name, ["nu"], priority);
        case "ね": return new CharZen(name, ["ne"], priority);
        case "の": return new CharZen(name, ["no"], priority);

        case "にゃ": return new CharZen(name, ["nya"], priority);
        case "にぃ": return new CharZen(name, ["nyi"], priority);
        case "にゅ": return new CharZen(name, ["nyu"], priority);
        case "にぇ": return new CharZen(name, ["nye"], priority);
        case "にょ": return new CharZen(name, ["nyo"], priority);

        // は行 
        case "は": return new CharZen(name, ["ha"], priority);
        case "ひ": return new CharZen(name, ["hi"], priority);
        case "ふ": return new CharZen(name, ["hu", "fu"], priority);
        case "へ": return new CharZen(name, ["he"], priority);
        case "ほ": return new CharZen(name, ["ho"], priority);

        case "ひゃ": return new CharZen(name, ["hya"], priority);
        case "ひぃ": return new CharZen(name, ["hyi"], priority);
        case "ひゅ": return new CharZen(name, ["hyu"], priority);
        case "ひぇ": return new CharZen(name, ["hye"], priority);
        case "ひょ": return new CharZen(name, ["hyo"], priority);

        case "ふぁ": return new CharZen(name, ["fa", "fwa"], priority);
        case "ふぃ": return new CharZen(name, ["fi", "fwi", "fyi"], priority);
        case "ふぅ": return new CharZen(name, ["fwu"], priority);
        case "ふぇ": return new CharZen(name, ["fe", "fwe", "fye"], priority);
        case "ふぉ": return new CharZen(name, ["fo", "fwo"], priority);

        case "ふゃ": return new CharZen(name, ["fya"], priority);
        case "ふゅ": return new CharZen(name, ["fyu"], priority);
        case "ふょ": return new CharZen(name, ["fyo"], priority);

        case "ば": return new CharZen(name, ["ba"], priority);
        case "び": return new CharZen(name, ["bi"], priority);
        case "ぶ": return new CharZen(name, ["bu"], priority);
        case "べ": return new CharZen(name, ["be"], priority);
        case "ぼ": return new CharZen(name, ["bo"], priority);

        case "びゃ": return new CharZen(name, ["bya"], priority);
        case "びぃ": return new CharZen(name, ["byi"], priority);
        case "びゅ": return new CharZen(name, ["byu"], priority);
        case "びぇ": return new CharZen(name, ["bye"], priority);
        case "びょ": return new CharZen(name, ["byo"], priority);

        case "ゔぁ": return new CharZen(name, ["va"], priority);
        case "ゔぃ": return new CharZen(name, ["vi", "vyi"], priority);
        case "ゔ":   return new CharZen(name, ["vu"], priority);
        case "ゔぇ": return new CharZen(name, ["ve", "vye"], priority);
        case "ゔぉ": return new CharZen(name, ["vo"], priority);

        case "ゔゃ": return new CharZen(name, ["vya"], priority);
        case "ゔゅ": return new CharZen(name, ["vyu"], priority);
        case "ゔょ": return new CharZen(name, ["vyo"], priority);

        case "ぱ": return new CharZen(name, ["pa"], priority);
        case "ぴ": return new CharZen(name, ["pi"], priority);
        case "ぷ": return new CharZen(name, ["pu"], priority);
        case "ぺ": return new CharZen(name, ["pe"], priority);
        case "ぽ": return new CharZen(name, ["po"], priority);

        case "ぴゃ": return new CharZen(name, ["pya"], priority);
        case "ぴぃ": return new CharZen(name, ["pyi"], priority);
        case "ぴゅ": return new CharZen(name, ["pyu"], priority);
        case "ぴぇ": return new CharZen(name, ["pye"], priority);
        case "ぴょ": return new CharZen(name, ["pyo"], priority);

        // ま行 
        case "ま": return new CharZen(name, ["ma"], priority);
        case "み": return new CharZen(name, ["mi"], priority);
        case "む": return new CharZen(name, ["mu"], priority);
        case "め": return new CharZen(name, ["me"], priority);
        case "も": return new CharZen(name, ["mo"], priority);

        case "みゃ": return new CharZen(name, ["mya"], priority);
        case "みぃ": return new CharZen(name, ["myi"], priority);
        case "みゅ": return new CharZen(name, ["myu"], priority);
        case "みぇ": return new CharZen(name, ["mye"], priority);
        case "みょ": return new CharZen(name, ["myo"], priority);

        // や行 
        case "や": return new CharZen(name, ["ya"], priority);
        case "ゆ": return new CharZen(name, ["yu"], priority);
        case "よ": return new CharZen(name, ["yo"], priority);

        case "ゃ": return new CharZen(name, ["xya", "lya"], priority);
        case "ゅ": return new CharZen(name, ["xyu", "lyu"], priority);
        case "ょ": return new CharZen(name, ["xyo", "lyo"], priority);

        // ら行 
        case "ら": return new CharZen(name, ["ra"], priority);
        case "り": return new CharZen(name, ["ri"], priority);
        case "る": return new CharZen(name, ["ru"], priority);
        case "れ": return new CharZen(name, ["re"], priority);
        case "ろ": return new CharZen(name, ["ro"], priority);

        case "りゃ": return new CharZen(name, ["rya"], priority);
        case "りぃ": return new CharZen(name, ["ryi"], priority);
        case "りゅ": return new CharZen(name, ["ryu"], priority);
        case "りぇ": return new CharZen(name, ["rye"], priority);
        case "りょ": return new CharZen(name, ["ryo"], priority);

        // わ行 
        case "わ": return new CharZen(name, ["wa"], priority);
        case "を": return new CharZen(name, ["wo"], priority);
        case "ん": return new CharZenN(name, ["nn", "n'", "xn"], priority);

        case "ゎ": return new CharZen(name, ["xwa", "lwa"], priority);

        // アルファベット・数字
        case "a": return new Char(name, ["a"], priority);
        case "b": return new Char(name, ["b"], priority);
        case "c": return new Char(name, ["c"], priority);
        case "d": return new Char(name, ["d"], priority);
        case "e": return new Char(name, ["e"], priority);
        case "f": return new Char(name, ["f"], priority);
        case "g": return new Char(name, ["g"], priority);
        case "h": return new Char(name, ["h"], priority);
        case "i": return new Char(name, ["i"], priority);
        case "j": return new Char(name, ["j"], priority);
        case "k": return new Char(name, ["k"], priority);
        case "l": return new Char(name, ["l"], priority);
        case "m": return new Char(name, ["m"], priority);
        case "n": return new Char(name, ["n"], priority);
        case "o": return new Char(name, ["o"], priority);
        case "p": return new Char(name, ["p"], priority);
        case "q": return new Char(name, ["q"], priority);
        case "r": return new Char(name, ["r"], priority);
        case "s": return new Char(name, ["s"], priority);
        case "t": return new Char(name, ["t"], priority);
        case "u": return new Char(name, ["u"], priority);
        case "v": return new Char(name, ["v"], priority);
        case "w": return new Char(name, ["w"], priority);
        case "x": return new Char(name, ["x"], priority);
        case "y": return new Char(name, ["y"], priority);
        case "z": return new Char(name, ["z"], priority);

        case "A": return new Char(name, ["A"], priority);
        case "B": return new Char(name, ["B"], priority);
        case "C": return new Char(name, ["C"], priority);
        case "D": return new Char(name, ["D"], priority);
        case "E": return new Char(name, ["E"], priority);
        case "F": return new Char(name, ["F"], priority);
        case "G": return new Char(name, ["G"], priority);
        case "H": return new Char(name, ["H"], priority);
        case "I": return new Char(name, ["I"], priority);
        case "J": return new Char(name, ["J"], priority);
        case "K": return new Char(name, ["K"], priority);
        case "L": return new Char(name, ["L"], priority);
        case "M": return new Char(name, ["M"], priority);
        case "N": return new Char(name, ["N"], priority);
        case "O": return new Char(name, ["O"], priority);
        case "P": return new Char(name, ["P"], priority);
        case "Q": return new Char(name, ["Q"], priority);
        case "R": return new Char(name, ["R"], priority);
        case "S": return new Char(name, ["S"], priority);
        case "T": return new Char(name, ["T"], priority);
        case "U": return new Char(name, ["U"], priority);
        case "V": return new Char(name, ["V"], priority);
        case "W": return new Char(name, ["W"], priority);
        case "X": return new Char(name, ["X"], priority);
        case "Y": return new Char(name, ["Y"], priority);
        case "Z": return new Char(name, ["Z"], priority);

        case "0": return new Char(name, ["0"], priority);
        case "1": return new Char(name, ["1"], priority);
        case "2": return new Char(name, ["2"], priority);
        case "3": return new Char(name, ["3"], priority);
        case "4": return new Char(name, ["4"], priority);
        case "5": return new Char(name, ["5"], priority);
        case "6": return new Char(name, ["6"], priority);
        case "7": return new Char(name, ["7"], priority);
        case "8": return new Char(name, ["8"], priority);
        case "9": return new Char(name, ["9"], priority);

        // 記号 ASCII順 半角
        case " ": return new Char(name, [" "], priority);
        case "!": return new Char(name, ["!"], priority);
        case '"': return new Char(name, ['"']);
        case "#": return new Char(name, ["#"], priority);
        case "$": return new Char(name, ["$"], priority);
        case "%": return new Char(name, ["%"], priority);
        case "&": return new Char(name, ["&"], priority);
        case "'": return new Char(name, ["'"], priority);
        case "(": return new Char(name, ["("], priority);
        case ")": return new Char(name, [")"], priority);
        case "*": return new Char(name, ["*"], priority);
        case "+": return new Char(name, ["+"], priority);
        case ",": return new Char(name, [","], priority);
        case "-": return new Char(name, ["-"], priority);
        case ".": return new Char(name, ["."], priority);
        case "/": return new Char(name, ["/"], priority);
        case ":": return new Char(name, [":"], priority);
        case ";": return new Char(name, [";"], priority);
        case "<": return new Char(name, ["<"], priority);
        case "=": return new Char(name, ["="], priority);
        case ">": return new Char(name, [">"], priority);
        case "?": return new Char(name, ["?"], priority);
        case "@": return new Char(name, ["@"], priority);
        case "[": return new Char(name, ["["], priority);
        case "\\": return new Char(name, ["\\"], priority);
        case "]": return new Char(name, ["]"], priority);
        case "^": return new Char(name, ["^"], priority);
        case "_": return new Char(name, ["_"], priority);
        case "`": return new Char(name, ["`"], priority);
        case "{": return new Char(name, ["{"], priority);
        case "|": return new Char(name, ["|"], priority);
        case "}": return new Char(name, ["}"], priority);
        case "~": return new Char(name, ["~"], priority);

        // 記号 ASCII順 全角
        case "　": return new CharZen(name, [" "], priority);
        case "！": return new CharZen(name, ["!"], priority);
        case "”": return new CharZen(name, ['"']);
        case "＃": return new CharZen(name, ["#"], priority);
        case "＄": return new CharZen(name, ["$"], priority);
        case "％": return new CharZen(name, ["%"], priority);
        case "＆": return new CharZen(name, ["&"], priority);
        case "’": return new CharZen(name, ["'"], priority);
        case "（": return new CharZen(name, ["("], priority);
        case "）": return new CharZen(name, [")"], priority);
        case "＊": return new CharZen(name, ["*"], priority);
        case "＋": return new CharZen(name, ["+"], priority);
        case "、": return new CharZen(name, [","], priority);
        case "ー": return new CharZen(name, ["-"], priority);
        case "。": return new CharZen(name, ["."], priority);
        case "・": return new CharZen(name, ["/"], priority);
        case "：": return new CharZen(name, [":"], priority);
        case "；": return new CharZen(name, [";"], priority);
        case "＜": return new CharZen(name, ["<"], priority);
        case "＝": return new CharZen(name, ["="], priority);
        case "＞": return new CharZen(name, [">"], priority);
        case "？": return new CharZen(name, ["?"], priority);
        case "＠": return new CharZen(name, ["@"], priority);
        case "「": return new CharZen(name, ["["], priority);
        case "￥": return new CharZen(name, ["\\"], priority);
        case "」": return new CharZen(name, ["]"], priority);
        case "＾": return new CharZen(name, ["^"], priority);
        case "＿": return new CharZen(name, ["_"], priority);
        case "‘": return new CharZen(name, ["`"], priority);
        case "｛": return new CharZen(name, ["{"], priority);
        case "｜": return new CharZen(name, ["|"], priority);
        case "｝": return new CharZen(name, ["}"], priority);
        case "～": return new CharZen(name, ["~"], priority);

        default: throw new CharCreationError(`Charの生成に失敗しました：name = ${name}`);
    }
};
