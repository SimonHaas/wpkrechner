"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snapshot = void 0;
const AssetClass_1 = require("./AssetClass");
class Snapshot {
    constructor(date, balance, creditLine, volume, interestRate, assetClasses) {
        this._date = date;
        this._balance = balance;
        this._creditLine = creditLine;
        this._volume = volume;
        this._interestRate = interestRate;
        this._assetClasses = assetClasses || [];
    }
    calculateGeneratedAssetClass() {
        const assetClasses = this._assetClasses;
        let value = 0;
        let creditLine = 0;
        for (let i = 0; i < assetClasses.length; i++) {
            value += assetClasses[i].volume;
            creditLine += assetClasses[i].volume * assetClasses[i].loanToValue;
        }
        const generatedValue = this.volume - value;
        let generatedLoanToValue = 0;
        if (generatedValue) {
            const creditLineDiff = this.creditLine - creditLine;
            generatedLoanToValue = creditLineDiff / generatedValue;
        }
        return new AssetClass_1.AssetClass('generated', generatedLoanToValue, generatedValue);
    }
    clone() {
        return Snapshot.fromJson(JSON.stringify(this));
    }
    static fromJson(json) {
        let jsonObject = JSON.parse(json);
        let snapshot = new Snapshot(new Date(), 0, 0, 0, 0);
        snapshot._date = jsonObject._date;
        snapshot._balance = jsonObject._balance;
        snapshot._creditLine = jsonObject._creditLine;
        snapshot._volume = jsonObject._volume;
        snapshot._interestRate = jsonObject._interestRate;
        snapshot._assetClasses = [];
        for (let i = 0; i < jsonObject._assetClasses.length; i++) {
            snapshot._assetClasses[i] = AssetClass_1.AssetClass.fromJson(jsonObject._assetClasses[i]);
        }
        return snapshot;
    }
    get date() {
        return this._date;
    }
    set date(date) {
        this._date = date;
    }
    get balance() {
        return this._balance;
    }
    set balance(balance) {
        this._balance = balance;
    }
    get creditLine() {
        return this._creditLine;
    }
    set creditLine(creditLine) {
        this._creditLine = creditLine;
    }
    get volume() {
        return this._volume;
    }
    set volume(volume) {
        this._volume = volume;
    }
    get interestRate() {
        return this._interestRate;
    }
    set interestRate(interestRate) {
        this._interestRate = interestRate;
    }
    get assetClasses() {
        return [this.calculateGeneratedAssetClass(), ...this._assetClasses];
    }
    set assetClasses(assetClasses) {
        this._assetClasses = assetClasses;
    }
}
exports.Snapshot = Snapshot;
