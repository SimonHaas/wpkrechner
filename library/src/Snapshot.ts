export class Snapshot {
    private _date: Date
    private _balance: number
    private _creditLine: number
    private _volume: number
    private _interestRate: number

    constructor(date: Date, balance: number, creditLine: number, volume: number, interestRate: number) {
        this._date = date
        this._balance = balance
        this._creditLine = creditLine
        this._volume = volume
        this._interestRate = interestRate
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
        this._balance = this.balance
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
}