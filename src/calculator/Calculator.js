class Calculator {
    static title = 'test-name'
    static description = 'test-description'

    #value

    constructor(value) {
        this.#value = value
    }

    get value() {
        return this.#value
    }
}

export default Calculator