
const CharFactory = {};

CharFactory.create = function(name) {
    switch (name) {
        // あ行 
        case "あ": case "ア": return new Char(name, ["a"]);
        case "い": case "イ": return new Char(name, ["i", "yi"]);
        case "う": case "ウ": return new Char(name, ["u", "wu", "whu"]);
        case "え": case "エ": return new Char(name, ["e"]);
        case "お": case "オ": return new Char(name, ["o"]);

        case "いぇ": case "イェ": return new Char(name, ["ye"]);

        case "うぁ": case "ウァ": return new Char(name, ["wha"]);
        case "うぃ": case "ウィ": return new Char(name, ["wi", "whi"]);
        case "うぇ": case "ウェ": return new Char(name, ["we", "whe"]);
        case "うぉ": case "ウォ": return new Char(name, ["who"]);

        case "ゐ": case "ヰ": return new Char(name, ["wi"]);
        case "ゑ": case "ヱ": return new Char(name, ["we"]);

        case "ぁ": case "ァ": return new Char(name, ["xa", "la"]);
        case "ぃ": case "ィ": return new Char(name, ["xi", "li", "xyi", "lyi"]);
        case "ぅ": case "ゥ": return new Char(name, ["xu", "lu"]);
        case "ぇ": case "ェ": return new Char(name, ["xe", "le", "xye", "lye"]);
        case "ぉ": case "ォ": return new Char(name, ["xo", "lo"]);

        // か行 
        case "か": case "カ": return new Char(name, ["ka", "ca"]);
        case "き": case "キ": return new Char(name, ["ki"]);
        case "く": case "ク": return new Char(name, ["ku", "cu", "qu"]);
        case "け": case "ケ": return new Char(name, ["ke"]);
        case "こ": case "コ": return new Char(name, ["ko", "co"]);

        case "きゃ": case "キャ": return new Char(name, ["kya"]);
        case "きぃ": case "キィ": return new Char(name, ["kyi"]);
        case "きゅ": case "キュ": return new Char(name, ["kyu"]);
        case "きぇ": case "キェ": return new Char(name, ["kye"]);
        case "きょ": case "キョ": return new Char(name, ["kyo"]);

        case "くゃ": case "クャ": return new Char(name, ["qya"]);
        case "くゅ": case "クュ": return new Char(name, ["qyu"]);
        case "くょ": case "クョ": return new Char(name, ["qyo"]);

        case "くぁ": case "クァ": return new Char(name, ["qa", "qwa", "kwa"]);
        case "くぃ": case "クィ": return new Char(name, ["qi", "qwi", "qyi"]);
        case "くぅ": case "クゥ": return new Char(name, ["qwu"]);
        case "くぇ": case "クェ": return new Char(name, ["qe", "qwe", "qye"]);
        case "くぉ": case "クォ": return new Char(name, ["qo", "qwo"]);

        case "が": case "ガ": return new Char(name, ["ga"]);
        case "ぎ": case "ギ": return new Char(name, ["gi"]);
        case "ぐ": case "グ": return new Char(name, ["gu"]);
        case "げ": case "ゲ": return new Char(name, ["ge"]);
        case "ご": case "ゴ": return new Char(name, ["go"]);

        case "ぎゃ": case "ギャ": return new Char(name, ["gya"]);
        case "ぎぃ": case "ギィ": return new Char(name, ["gyi"]);
        case "ぎゅ": case "ギュ": return new Char(name, ["gyu"]);
        case "ぎぇ": case "ギェ": return new Char(name, ["gye"]);
        case "ぎょ": case "ギョ": return new Char(name, ["gyo"]);

        case "ぐぁ": case "グァ": return new Char(name, ["gwa"]);
        case "ぐぃ": case "グィ": return new Char(name, ["gwi"]);
        case "ぐぅ": case "グゥ": return new Char(name, ["gwu"]);
        case "ぐぇ": case "グェ": return new Char(name, ["gwe"]);
        case "ぐぉ": case "グォ": return new Char(name, ["gwo"]);

        case "ヵ": case "ヵ": return new Char(name, ["xka", "lka"]);
        case "ヶ": case "ヶ": return new Char(name, ["xke", "lke"]);

        // さ行 
        case "さ": case "サ": return new Char(name, ["sa"]);
        case "し": case "シ": return new Char(name, ["si", "ci", "shi"]);
        case "す": case "ス": return new Char(name, ["su"]);
        case "せ": case "セ": return new Char(name, ["se", "ce"]);
        case "そ": case "ソ": return new Char(name, ["so"]);

        case "しゃ": case "シャ": return new Char(name, ["sya", "sha"]);
        case "しぃ": case "シィ": return new Char(name, ["syi"]);
        case "しゅ": case "シュ": return new Char(name, ["syu", "shu"]);
        case "しぇ": case "シェ": return new Char(name, ["sye", "she"]);
        case "しょ": case "ショ": return new Char(name, ["syo", "sho"]);

        case "すぁ": case "スァ": return new Char(name, ["swa"]);
        case "すぃ": case "スィ": return new Char(name, ["swi"]);
        case "すぅ": case "スゥ": return new Char(name, ["swu"]);
        case "すぇ": case "スェ": return new Char(name, ["swe"]);
        case "すぉ": case "スォ": return new Char(name, ["swo"]);

        case "ざ": case "ザ": return new Char(name, ["za"]);
        case "じ": case "ジ": return new Char(name, ["zi", "ji"]);
        case "ず": case "ズ": return new Char(name, ["zu"]);
        case "ぜ": case "ゼ": return new Char(name, ["ze"]);
        case "ぞ": case "ゾ": return new Char(name, ["zo"]);

        case "じゃ": case "ジャ": return new Char(name, ["zya", "ja", "jya"]);
        case "じぃ": case "ジィ": return new Char(name, ["zyi", "jyi"]);
        case "じゅ": case "ジュ": return new Char(name, ["zyu", "ju", "jyu"]);
        case "じぇ": case "ジェ": return new Char(name, ["zye", "je", "jye"]);
        case "じょ": case "ジョ": return new Char(name, ["zyo", "jo", "jyo"]);

        // た行 
        case "た": case "タ": return new Char(name, ["ta"]);
        case "ち": case "チ": return new Char(name, ["ti", "chi"]);
        case "つ": case "ツ": return new Char(name, ["tu", "tsu"]);
        case "て": case "テ": return new Char(name, ["te"]);
        case "と": case "ト": return new Char(name, ["to"]);

        case "ちゃ": case "チャ": return new Char(name, ["tya", "cha", "cya"]);
        case "ちぃ": case "チィ": return new Char(name, ["tyi", "cyi"]);
        case "ちゅ": case "チュ": return new Char(name, ["tyu", "chu", "cyu"]);
        case "ちぇ": case "チェ": return new Char(name, ["tye", "che", "cye"]);
        case "ちょ": case "チョ": return new Char(name, ["tyo", "cho", "cyo"]);

        case "つぁ": case "ツァ": return new Char(name, ["tsa"]);
        case "つぃ": case "ツィ": return new Char(name, ["tsi"]);
        case "つぇ": case "ツェ": return new Char(name, ["tse"]);
        case "つぉ": case "ツォ": return new Char(name, ["tso"]);

        case "てゃ": case "テャ": return new Char(name, ["tha"]);
        case "てぃ": case "ティ": return new Char(name, ["thi"]);
        case "てゅ": case "テュ": return new Char(name, ["thu"]);
        case "てぇ": case "テェ": return new Char(name, ["the"]);
        case "てょ": case "テョ": return new Char(name, ["tho"]);

        case "とぁ": case "トァ": return new Char(name, ["twa"]);
        case "とぃ": case "トィ": return new Char(name, ["twi"]);
        case "とぅ": case "トゥ": return new Char(name, ["twu"]);
        case "とぇ": case "トェ": return new Char(name, ["twe"]);
        case "とぉ": case "トォ": return new Char(name, ["two"]);

        case "だ": case "ダ": return new Char(name, ["da"]);
        case "ぢ": case "ヂ": return new Char(name, ["di"]);
        case "づ": case "ヅ": return new Char(name, ["du"]);
        case "で": case "デ": return new Char(name, ["de"]);
        case "ど": case "ド": return new Char(name, ["do"]);

        case "ぢゃ": case "ヂャ": return new Char(name, ["dya"]);
        case "ぢぃ": case "ヂィ": return new Char(name, ["dyi"]);
        case "ぢゅ": case "ヂュ": return new Char(name, ["dyu"]);
        case "ぢぇ": case "ヂェ": return new Char(name, ["dye"]);
        case "ぢょ": case "ヂョ": return new Char(name, ["dyo"]);

        case "でゃ": case "デャ": return new Char(name, ["dha"]);
        case "でぃ": case "ディ": return new Char(name, ["dhi"]);
        case "でゅ": case "デュ": return new Char(name, ["dhu"]);
        case "でぇ": case "デェ": return new Char(name, ["dhe"]);
        case "でょ": case "デョ": return new Char(name, ["dho"]);

        case "どぁ": case "ドァ": return new Char(name, ["dwa"]);
        case "どぃ": case "ドィ": return new Char(name, ["dwi"]);
        case "どぅ": case "ドゥ": return new Char(name, ["dwu"]);
        case "どぇ": case "ドェ": return new Char(name, ["dwe"]);
        case "どぉ": case "ドォ": return new Char(name, ["dwo"]);

        case "っ": case "ッ": return new っ();

        // な行 
        case "な": case "ナ": return new Char(name, ["na"]);
        case "に": case "ニ": return new Char(name, ["ni"]);
        case "ぬ": case "ヌ": return new Char(name, ["nu"]);
        case "ね": case "ネ": return new Char(name, ["ne"]);
        case "の": case "ノ": return new Char(name, ["no"]);

        case "にゃ": case "ニャ": return new Char(name, ["nya"]);
        case "にぃ": case "ニィ": return new Char(name, ["nyi"]);
        case "にゅ": case "ニュ": return new Char(name, ["nyu"]);
        case "にぇ": case "ニェ": return new Char(name, ["nye"]);
        case "にょ": case "ニョ": return new Char(name, ["nyo"]);

        // は行 
        case "は": case "ハ": return new Char(name, ["ha"]);
        case "ひ": case "ヒ": return new Char(name, ["hi"]);
        case "ふ": case "フ": return new Char(name, ["hu", "fu"]);
        case "へ": case "ヘ": return new Char(name, ["he"]);
        case "ほ": case "ホ": return new Char(name, ["ho"]);

        case "ひゃ": case "ヒャ": return new Char(name, ["hya"]);
        case "ひぃ": case "ヒィ": return new Char(name, ["hyi"]);
        case "ひゅ": case "ヒュ": return new Char(name, ["hyu"]);
        case "ひぇ": case "ヒェ": return new Char(name, ["hye"]);
        case "ひょ": case "ヒョ": return new Char(name, ["hyo"]);

        case "ふぁ": case "ファ": return new Char(name, ["fa", "fwa"]);
        case "ふぃ": case "フィ": return new Char(name, ["fi", "fwi", "fyi"]);
        case "ふぅ": case "フゥ": return new Char(name, ["fwu"]);
        case "ふぇ": case "フェ": return new Char(name, ["fe", "fwe", "fye"]);
        case "ふぉ": case "フォ": return new Char(name, ["fo", "fwo"]);

        case "ふゃ": case "フャ": return new Char(name, ["fya"]);
        case "ふゅ": case "フュ": return new Char(name, ["fyu"]);
        case "ふょ": case "フョ": return new Char(name, ["fyo"]);

        case "ば": case "バ": return new Char(name, ["ba"]);
        case "び": case "ビ": return new Char(name, ["bi"]);
        case "ぶ": case "ブ": return new Char(name, ["bu"]);
        case "べ": case "ベ": return new Char(name, ["be"]);
        case "ぼ": case "ボ": return new Char(name, ["bo"]);

        case "びゃ": case "ビャ": return new Char(name, ["bya"]);
        case "びぃ": case "ビィ": return new Char(name, ["byi"]);
        case "びゅ": case "ビュ": return new Char(name, ["byu"]);
        case "びぇ": case "ビェ": return new Char(name, ["bye"]);
        case "びょ": case "ビョ": return new Char(name, ["byo"]);

        case "ヴぁ": case "ヴァ": return new Char(name, ["va"]);
        case "ヴぃ": case "ヴィ": return new Char(name, ["vi", "vyi"]);
        case "ヴ": case "ヴ": return new Char(name, ["vu"]);
        case "ヴぇ": case "ヴェ": return new Char(name, ["ve", "vye"]);
        case "ヴぉ": case "ヴォ": return new Char(name, ["vo"]);

        case "ヴゃ": case "ヴャ": return new Char(name, ["vya"]);
        case "ヴゅ": case "ヴュ": return new Char(name, ["vyu"]);
        case "ヴょ": case "ヴョ": return new Char(name, ["vyo"]);

        case "ぱ": case "パ": return new Char(name, ["pa"]);
        case "ぴ": case "ピ": return new Char(name, ["pi"]);
        case "ぷ": case "プ": return new Char(name, ["pu"]);
        case "ぺ": case "ペ": return new Char(name, ["pe"]);
        case "ぽ": case "ポ": return new Char(name, ["po"]);

        case "ぴゃ": case "ピャ": return new Char(name, ["pya"]);
        case "ぴぃ": case "ピィ": return new Char(name, ["pyi"]);
        case "ぴゅ": case "ピュ": return new Char(name, ["pyu"]);
        case "ぴぇ": case "ピェ": return new Char(name, ["pye"]);
        case "ぴょ": case "ピョ": return new Char(name, ["pyo"]);

        // ま行 
        case "ま": case "マ": return new Char(name, ["ma"]);
        case "み": case "ミ": return new Char(name, ["mi"]);
        case "む": case "ム": return new Char(name, ["mu"]);
        case "め": case "メ": return new Char(name, ["me"]);
        case "も": case "モ": return new Char(name, ["mo"]);

        case "みゃ": case "ミャ": return new Char(name, ["mya"]);
        case "みぃ": case "ミィ": return new Char(name, ["myi"]);
        case "みゅ": case "ミュ": return new Char(name, ["myu"]);
        case "みぇ": case "ミェ": return new Char(name, ["mye"]);
        case "みょ": case "ミョ": return new Char(name, ["myo"]);

        // や行 
        case "や": case "ヤ": return new Char(name, ["ya"]);
        case "ゆ": case "ユ": return new Char(name, ["yu"]);
        case "よ": case "ヨ": return new Char(name, ["yo"]);

        case "ゃ": case "ャ": return new Char(name, ["xya", "lya"]);
        case "ゅ": case "ュ": return new Char(name, ["xyu", "lyu"]);
        case "ょ": case "ョ": return new Char(name, ["xyo", "lyo"]);

        // ら行 
        case "ら": case "ラ": return new Char(name, ["ra"]);
        case "り": case "リ": return new Char(name, ["ri"]);
        case "る": case "ル": return new Char(name, ["ru"]);
        case "れ": case "レ": return new Char(name, ["re"]);
        case "ろ": case "ロ": return new Char(name, ["ro"]);

        case "りゃ": case "リャ": return new Char(name, ["rya"]);
        case "りぃ": case "リィ": return new Char(name, ["ryi"]);
        case "りゅ": case "リュ": return new Char(name, ["ryu"]);
        case "りぇ": case "リェ": return new Char(name, ["rye"]);
        case "りょ": case "リョ": return new Char(name, ["ryo"]);

        // わ行 
        case "わ": case "ワ": return new Char(name, ["wa"]);
        case "を": case "ヲ": return new Char(name, ["wo"]);
        case "ん": case "ン": return new ん();

        case "ゎ": case "ヮ": return new Char(name, ["xwa", "lwa"]);

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

        // 記号
        case "ー": return new Char(name, ["-"]);
        case "!": case "！": return new Char(name, ["!"]);
        case "?": case "？": return new Char(name, ["?"]);
        case "'": return new Char(name, ["'"]);
        case "\"": return new Char(name, ["\""]);
        case "、": return new Char(name, [","]);
        case "。": return new Char(name, ["."]);
        case "「": return new Char(name, ["["]);
        case "」": return new Char(name, ["]"]);
        default: return null;
    }
};
