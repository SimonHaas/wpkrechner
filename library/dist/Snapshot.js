"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const AssetClass_1 = require("./AssetClass");
class Snapshot {
    constructor(date, balance, creditLine, volume, interestRate, assetClasses, activeAssetClasses = false, generatedAssetClass = true) {
        this._date = date;
        this._balance = balance;
        this._creditLine = creditLine;
        this._volume = volume;
        this._interestRate = interestRate;
        this._assetClasses = assetClasses || [];
        this._activeAssetClasses = activeAssetClasses;
        this._generatedAssetClass = generatedAssetClass;
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
        let assetClasses = [];
        for (let i = 0; i < jsonObject._assetClasses.length; i++) {
            assetClasses[i] = AssetClass_1.AssetClass.fromJsonObject(jsonObject._assetClasses[i]);
        }
        return new Snapshot(jsonObject._date, jsonObject._balance, jsonObject._creditLine, jsonObject._volume, jsonObject._interestRate, assetClasses, jsonObject._activeAssetClasses, jsonObject._generatedAssetClass);
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
        if (this._activeAssetClasses && !this._generatedAssetClass) {
            return _1.Calculator.value(this, 'creditLine_userInput');
        }
        return this._creditLine;
    }
    set creditLine(creditLine) {
        this._creditLine = creditLine;
    }
    get volume() {
        if (this._activeAssetClasses && !this._generatedAssetClass) {
            return _1.Calculator.value(this, 'volume_userInput');
        }
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
    get activeAssetClasses() {
        return this._activeAssetClasses;
    }
    set activeAssetClasses(activeAssetClasses) {
        this._activeAssetClasses = activeAssetClasses;
    }
    get generatedAssetClass() {
        return this._generatedAssetClass;
    }
    set generatedAssetClass(generatedAssetClass) {
        this._generatedAssetClass = generatedAssetClass;
    }
    get assetClasses() {
        return [this.calculateGeneratedAssetClass(), ...this._assetClasses];
    }
    set assetClasses(assetClasses) {
        this._assetClasses = assetClasses;
    }
    getUserAssetClasses() {
        return this._assetClasses;
    }
    addAssetClass(assetClass) {
        this._assetClasses = [...this._assetClasses, assetClass];
    }
    removeAssetClass(assetClass) {
        this._assetClasses = this._assetClasses.filter(currentAssetClass => currentAssetClass.title !== assetClass.title);
    }
}
exports.Snapshot = Snapshot;
