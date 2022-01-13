export declare class AssetClass {
    private _title;
    private _loanToValue;
    private _volume;
    constructor(title: string, loanToValue: number, volume: number);
    static fromJson(jsonObject: any): AssetClass;
    get title(): string;
    set title(title: string);
    get loanToValue(): number;
    set loanToValue(loanToValue: number);
    get volume(): number;
    set volume(volume: number);
}
