import { Char } from "./char.js";

export class CharJp extends Char {
    constructor(name, expectRomanArray) {
        super(name, expectRomanArray, true);
    }
}
