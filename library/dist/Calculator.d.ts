import { Snapshot } from "./Snapshot";
declare type CalculationFunction = (snapshot: Snapshot) => number;
export declare class Calculation {
    readonly _title: string;
    readonly _description: string;
    readonly _calculation: CalculationFunction;
    constructor(title: string, description: string, calculation: CalculationFunction);
}
export declare class Calculator {
    static readonly calculations: Record<string, Calculation>;
    static value(snapshot: Snapshot, calculation: string): number;
}
export {};
