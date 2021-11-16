import { AssetClass } from "./AssetClass"

export class Snapshot {
    private _date: Date
    private _balance: number
    private _creditLine: number
    private _volume: number
    private _interestRate: number
    private _assetClasses: AssetClass[]

    constructor(date: Date, balance: number, creditLine: number, volume: number, interestRate: number, assetClasses?: AssetClass[]) {
        this._date = date
        this._balance = balance
        this._creditLine = creditLine
        this._volume = volume
        this._interestRate = interestRate
        this._assetClasses = assetClasses
    }

    get date() {
        return this._date
    }

    set date(date: Date) {
        this._date = date
    }

    get balance() {
        return this._balance
    }

    set balance(balance: number) {
        this._balance = balance
    }

    get creditLine() {
        return this._creditLine
    }

    set creditLine(creditLine: number) {
        this._creditLine = creditLine
    }

    get volume() {
        return this._volume
    }

    set volume(volume: number) {
        this._volume = volume
    }

    get interestRate() {
        return this._interestRate
    }

    set interestRate(interestRate: number) {
        this._interestRate = interestRate
    }

    get assetClasses() {
        return this._assetClasses
    }

    set assetClasses(assetClasses: AssetClass[]) {
        this._assetClasses = assetClasses
    }
}