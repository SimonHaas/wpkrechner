"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculator {
    constructor(snapshot) {
        this._snapshot = snapshot;
    }
    get snapshot() {
        return this._snapshot;
    }
    get title() {
        return Calculator._title;
    }
    get description() {
        return Calculator._description;
    }
}
exports.Calculator = Calculator;
