import { Calculator } from "./Calculator";
import { Snapshot } from "./Snapshot";

export class LoanLimitToDepotValue implements Calculator {
    title = 'Beleihungsquote'
    description = 'das Verhältnis vom Beleihungswert zum Depotwert'
    static value(snapshot: Snapshot): number {
        return snapshot.lendingLimit / snapshot.depotValue
    }
}

// export class LoanLimitToDepotValue extends Calculator {
//     _title = 'Beleihungsquote'
//     _desciption = 'das Verhältnis vom Beleihungswert zum Depotwert'

//     public getValue(): number {
//         return this.snapshot.lendingLimit / this.snapshot.depotValue
//     }
// }