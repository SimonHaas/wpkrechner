export class AssetClass {
    private _title: string
    private _loanToValue: number
    private _volume: number

    constructor(title: string, loanToValue: number, volume: number) {
        this._title = title
        this._loanToValue = loanToValue
        this._volume = volume
    }
}