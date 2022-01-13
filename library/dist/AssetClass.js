"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetClass = void 0;
class AssetClass {
    constructor(title, loanToValue, volume) {
        this._title = title;
        this._loanToValue = loanToValue;
        this._volume = volume;
    }
    static fromJson(json) {
        let jsonObject = JSON.parse(json);
        return AssetClass.fromJsonObject(jsonObject);
    }
    static fromJsonObject(jsonObject) {
        return new AssetClass(jsonObject._title, jsonObject._loanToValue, jsonObject._volume);
    }
    get title() {
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
    get volume() {
        return this._volume;
    }
    set volume(volume) {
        this._volume = volume;
    }
}
exports.AssetClass = AssetClass;
