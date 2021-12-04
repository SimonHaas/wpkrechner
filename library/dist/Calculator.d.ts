import { Snapshot } from "./Snapshot";
declare type CalculationFunction = (snapshot: Snapshot) => number;
export declare class Calculation {
    readonly _title: string;
    readonly _description: string;
    readonly _calculation: CalculationFunction;
    constructor(title: string, description: string, calculation: CalculationFunction);
}
declare type SimulationFunction = (snapshot: Snapshot, additionalInputs: Record<string, number>) => [Snapshot, Record<string, number>] | Snapshot;
export declare class Simulation {
    readonly _title: string;
    readonly _description: string;
    readonly _simulation: SimulationFunction;
    constructor(title: string, description: string, simulation: SimulationFunction);
}
export declare class Calculator {
    static readonly calculations: Record<string, Calculation>;
    static value(snapshot: Snapshot, calculation: string): number;
    static readonly simulations: Record<string, Simulation>;
    static siumulate(snapshot: Snapshot, additionalInputs: Record<string, number>, simulation: string): [Snapshot, Record<string, number>] | Snapshot;
}
export {};
