import { Calculator } from "."
import { AssetClass } from "./AssetClass"

export class Snapshot {
    private _date: Date
    private _balance: number
    private _creditLine: number
    private _volume: number
    private _interestRate: number
    private _activeAssetClasses: boolean
    private _generatedAssetClass: boolean
    private _assetClasses: AssetClass[]

    constructor(date: Date, balance?: number, creditLine?: number, volume?: number, interestRate?: number, assetClasses?: AssetClass[], activeAssetClasses: boolean = false, generatedAssetClass: boolean = true) {
        this._date = date
        this._balance = balance
        this._creditLine = creditLine
        this._volume = volume
        this._interestRate = interestRate
        this._assetClasses = assetClasses || []
        this._activeAssetClasses = activeAssetClasses
        this._generatedAssetClass = generatedAssetClass
    }

    private calculateGeneratedAssetClass(): AssetClass {
        const assetClasses = this._assetClasses

        let value = 0
        let creditLine = 0
        for (let i = 0; i < assetClasses.length; i++) {
            value += assetClasses[i].volume
            creditLine += assetClasses[i].volume * assetClasses[i].loanToValue
        }

        const generatedValue = this.volume - value
        let generatedLoanToValue = 0
        if (generatedValue) {
            const creditLineDiff = this.creditLine - creditLine
            generatedLoanToValue = creditLineDiff / generatedValue
        }

        return new AssetClass('generated', generatedLoanToValue, generatedValue)
    }

    public clone(): Snapshot {
        return Snapshot.fromJson(JSON.stringify(this))
    }

    public static fromJson(json: string): Snapshot {
        let jsonObject = JSON.parse(json)

        let assetClasses: AssetClass[] = []
        for (let i = 0; i < jsonObject._assetClasses.length; i++) {
            assetClasses[i] = AssetClass.fromJsonObject(jsonObject._assetClasses[i])
        }

        return new Snapshot(jsonObject._date, jsonObject._balance, jsonObject._creditLine, jsonObject._volume, jsonObject._interestRate, assetClasses, jsonObject._activeAssetClasses, jsonObject._generatedAssetClass)
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
        if (this._activeAssetClasses && !this._generatedAssetClass) {
            return Calculator.value(this, 'creditLine_userInput')
        }
        return this._creditLine
    }

    public set creditLine(creditLine: number) {
        this._creditLine = creditLine
    }

    public get volume() {
        if (this._activeAssetClasses && !this._generatedAssetClass) {
            return Calculator.value(this, 'volume_userInput')
        }
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

    public get activeAssetClasses() {
        return this._activeAssetClasses
    }

    public set activeAssetClasses(activeAssetClasses: boolean) {
        this._activeAssetClasses = activeAssetClasses
    }

    public get generatedAssetClass() {
        return this._generatedAssetClass
    }

    public set generatedAssetClass(generatedAssetClass: boolean) {
        this._generatedAssetClass = generatedAssetClass
    }

    public get assetClasses() {
        return [this.calculateGeneratedAssetClass(), ...this._assetClasses]
    }

    public set assetClasses(assetClasses: AssetClass[]) {
        this._assetClasses = assetClasses
    }

    public getUserAssetClasses() {
        return this._assetClasses
    }

    public addAssetClass(assetClass: AssetClass) {
        this._assetClasses = [...this._assetClasses, assetClass]
    }

    public removeAssetClass(assetClass: AssetClass) {
        this._assetClasses = this._assetClasses.filter(currentAssetClass => currentAssetClass.title !== assetClass.title)
    }
}