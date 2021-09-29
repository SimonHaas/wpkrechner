import { Snapshot } from "./Snapshot";

interface ICalculator {
    readonly title: string
    readonly description: string
}

export class Calculator implements ICalculator {
    title: string;
    description: string;
}

// export abstract class Calculator {
//     private _snapshot: Snapshot
//     protected static _title: string
//     protected static _description: string

//     constructor(snapshot: Snapshot) {
//         this._snapshot = snapshot
//     }

//     get snapshot() {
//         return this._snapshot
//     }

//     get title() {
//         return Calculator._title
//     }

//     get description() {
//         return Calculator._description
//     }

//     public abstract getValue(snapshot: Snapshot): number
// }