
export class EmptyTextError extends Error {
    constructor(message = "テキストが空です") {
        super(message);
        this.name = "EmptyTextError";
    }
}
