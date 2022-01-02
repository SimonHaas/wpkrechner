export declare class AssetClass {
    private _title;
    private _loanToValue;
    private _value;
    constructor(title: string, loanToValue: number, value: number);
    get titel(): string;
    set title(title: string);
    get loanToValue(): number;
    set loanToValue(loanToValue: number);
    get value(): number;
    set value(value: number);
}
