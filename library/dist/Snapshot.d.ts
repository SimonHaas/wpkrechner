export declare class Snapshot {
    private _date;
    private _lendingLimit;
    private _creditLine;
    private _depotValue;
    constructor(date: Date, lendingLimit: number, creditLine: number, depotValue: number);
    get date(): Date;
    set date(date: Date);
    get lendingLimit(): number;
    set lendingLimit(lendingLimit: number);
    get creditLine(): number;
    set creditLine(creditLine: number);
    get depotValue(): number;
    set depotValue(depotValue: number);
}
