"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Snapshot {
    constructor(date, lendingLimit, creditLine, depotValue) {
        this._date = date;
        this._lendingLimit = lendingLimit;
        this._creditLine = creditLine;
        this._depotValue = depotValue;
    }
    get date() {
        return this.date;
    }
    set date(date) {
        this.date = date;
    }
    get lendingLimit() {
        return this._lendingLimit;
    }
    set lendingLimit(lendingLimit) {
        this._lendingLimit = this.lendingLimit;
    }
    get creditLine() {
        return this._creditLine;
    }
    set creditLine(creditLine) {
        this._creditLine = creditLine;
    }
    get depotValue() {
        return this._depotValue;
    }
    set depotValue(depotValue) {
        this._depotValue = depotValue;
    }
}
exports.Snapshot = Snapshot;
