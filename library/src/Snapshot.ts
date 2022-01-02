import { AssetClass } from "./AssetClass"

export class Snapshot {
    private _date: Date
    private _balance: number
    private _creditLine: number
    private _volume: number
    private _interestRate: number
    private _assetClasses: AssetClass[]

    constructor(date: Date);
    constructor(date: Date, balance: number, creditLine: number, volume: number, interestRate: number)
    constructor(date: Date, balance?: number, creditLine?: number, volume?: number, interestRate?: number, assetClasses?: AssetClass[]) {
        this._date = date
        this._balance = balance
        this._creditLine = creditLine
        this._volume = volume
        this._interestRate = interestRate
        this._assetClasses = assetClasses
    }

    public clone(): Snapshot
    {
        return Snapshot.fromJson(JSON.stringify(this))
    }

    public static fromJson(json: string): Snapshot
    {
        let jsonObject = JSON.parse(json)
        let snapshot = new Snapshot(new Date(),0,0,0,0)
        snapshot._date = jsonObject._date
        snapshot._balance = jsonObject._balance
        snapshot._creditLine = jsonObject._creditLine
        snapshot._volume = jsonObject._volume
        snapshot._interestRate = jsonObject._interestRate
        snapshot._assetClasses = jsonObject._assetClasses

        return snapshot
    }

    public get date() {
        return this._date
    }

    public set date(date: Date) {
        this._date = date
    }

    public get balance() {
        return this._balance
    }

    public set balance(balance: number) {
        this._balance = balance
    }

    public get creditLine() {
        return this._creditLine
    }

    public set creditLine(creditLine: number) {
        this._creditLine = creditLine
    }

    public get volume() {
        return this._volume
    }

    public set volume(volume: number) {
        this._volume = volume
    }

    public get interestRate() {
        return this._interestRate
    }

    public set interestRate(interestRate: number) {
        this._interestRate = interestRate
    }

    public get assetClasses() {
        return this._assetClasses
    }

    public set assetClasses(assetClasses: AssetClass[]) {
        this._assetClasses = assetClasses
    }
}