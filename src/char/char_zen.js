import { Char } from "./char.js";

export class CharZen extends Char {
    constructor(name, expectRomanArray, priority, ignoreCapsLock = false) {
        super(name, expectRomanArray, priority, ignoreCapsLock);
    }
}
