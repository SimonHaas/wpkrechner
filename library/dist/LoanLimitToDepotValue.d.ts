import { Calculator } from "./Calculator";
import { Snapshot } from "./Snapshot";
export declare class LoanLimitToDepotValue implements Calculator {
    title: string;
    description: string;
    static value(snapshot: Snapshot): number;
}
