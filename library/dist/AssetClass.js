"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetClass = void 0;
class AssetClass {
    constructor(title, loanToValue, value) {
        this._title = title;
        this._loanToValue = loanToValue;
        this._value = value;
    }
    get titel() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get loanToValue() {
        return this._loanToValue;
    }
    set loanToValue(loanToValue) {
        this._loanToValue = loanToValue;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
}
exports.AssetClass = AssetClass;
