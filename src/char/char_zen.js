import { Char } from "./char.js";

export class CharZen extends Char {
    constructor(name, expectRomanArray) {
        super(name, expectRomanArray, true);
    }
}
