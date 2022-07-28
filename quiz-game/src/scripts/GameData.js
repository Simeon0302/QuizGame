export default class GameData {
    #questionObj;
    #score;
    #isReady;

    constructor (questionObj = null, score = null) {
        this.#questionObj = questionObj;
        this.#score = score;  
        this.#isReady = false;  
    }

    get questionObj() {
        return this.#questionObj;
    }

    get score() {
        return this.#score;
    }

    get isReady() {
        return this.#isReady;
    }

    set questionObj(value) {
        this.#questionObj = value;
        this.ProccessDataStatus();
    }

    set score(value) {
        this.#score = value;
        this.ProccessDataStatus();
    }

    ProccessDataStatus() {
        this.#isReady = this.#questionObj !== null && this.#score !== null
    }

    Reset() {
        this.#questionObj = null;
        this.#score = null;
        this.#isReady = false;
    }
}