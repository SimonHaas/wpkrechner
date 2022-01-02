export class AssetClass {
    private _title: string
    private _loanToValue: number
    private _volume: number

    constructor(title: string, loanToValue: number, volume: number) {
        this._title = title
        this._loanToValue = loanToValue
        this._volume = volume
    }

    public static fromJson(jsonObject: any): AssetClass {
        return new AssetClass(jsonObject._title, jsonObject._loanToValue, jsonObject._volume)
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

    public get volume() {
        return this._volume
    }

    public set volume(volume: number) {
        this._volume = volume
    }
}