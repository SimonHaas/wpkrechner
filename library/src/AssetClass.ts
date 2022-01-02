export class AssetClass {
    private _title: string
    private _loanToValue: number
    private _value: number

    constructor(title: string, loanToValue: number, value: number) {
        this._title = title
        this._loanToValue = loanToValue
        this._value = value
    }

    public get titel() {
        return this._title
    }

    public set title(title: string) {
        this._title = title
    }

    public get loanToValue() {
        return this._loanToValue
    }

    public set loanToValue(loanToValue: number) {
        this._loanToValue = loanToValue
    }

    public get value() {
        return this._value
    }

    public set value(value: number) {
        this._value = value
    }
}