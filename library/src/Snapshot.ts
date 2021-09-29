export class Snapshot {
    private _date: Date
    private _lendingLimit: number
    private _creditLine: number
    private _depotValue: number

    constructor(date: Date, lendingLimit: number, creditLine: number, depotValue: number) {
        this._date = date
        this._lendingLimit = lendingLimit
        this._creditLine = creditLine
        this._depotValue = depotValue
    }

    get date() {
        return this._date
    }

    set date(date: Date) {
        this._date = date
    }

    get lendingLimit() {
        return this._lendingLimit
    }

    set lendingLimit(lendingLimit: number) {
        this._lendingLimit = this.lendingLimit
    }

    get creditLine() {
        return this._creditLine
    }

    set creditLine(creditLine: number) {
        this._creditLine = creditLine
    }

    get depotValue() {
        return this._depotValue
    }

    set depotValue(depotValue: number) {
        this._depotValue = depotValue
    }
}