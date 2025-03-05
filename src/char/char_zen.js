import { Char } from "./char.js";

export class CharZen extends Char {
    get ignoreCapsLock() {
        return false;
    }

    constructor(name, expectRomanArray, priority) {
        super(name, expectRomanArray, priority);
    }
}
