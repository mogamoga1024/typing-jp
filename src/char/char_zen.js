import { Char } from "./char.js";

export class CharZen extends Char {
    get ignoreCapsLock() {
        return true;
    }

    constructor(name, expectRomanArray) {
        super(name, expectRomanArray);
    }
}
