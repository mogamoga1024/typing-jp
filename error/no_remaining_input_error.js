
export class NoRemainingInputError extends Error {
    constructor(message = "入力すべき文字がありません") {
        super(message);
        this.name = "NoRemainingInputError";
    }
}
