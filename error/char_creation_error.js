
export class CharCreationError extends Error {
    constructor(message = "Charの生成に失敗しました") {
        super(message);
        this.name = "CharCreationError";
    }
}
