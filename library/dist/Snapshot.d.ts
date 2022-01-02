import { AssetClass } from "./AssetClass";
export declare class Snapshot {
    private _date;
    private _balance;
    private _creditLine;
    private _volume;
    private _interestRate;
    private _assetClasses;
    constructor(date: Date, balance?: number, creditLine?: number, volume?: number, interestRate?: number, assetClasses?: AssetClass[]);
    private calculateGeneratedAssetClass;
    clone(): Snapshot;
    static fromJson(json: string): Snapshot;
    get date(): Date;
    set date(date: Date);
    get balance(): number;
    set balance(balance: number);
    get creditLine(): number;
    set creditLine(creditLine: number);
    get volume(): number;
    set volume(volume: number);
    get interestRate(): number;
    set interestRate(interestRate: number);
    get assetClasses(): AssetClass[];
    set assetClasses(assetClasses: AssetClass[]);
}
