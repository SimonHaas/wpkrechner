import { Snapshot } from "./Snapshot";
export declare abstract class Calculator {
    private _snapshot;
    protected static _title: string;
    protected static _description: string;
    constructor(snapshot: Snapshot);
    get snapshot(): Snapshot;
    get title(): string;
    get description(): string;
    abstract getValue(snapshot: Snapshot): number;
}
