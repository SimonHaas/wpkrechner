"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoanLimitToDepotValue {
    constructor() {
        this.title = 'Beleihungsquote';
        this.description = 'das Verhältnis vom Beleihungswert zum Depotwert';
    }
    static value(snapshot) {
        return snapshot.lendingLimit / snapshot.depotValue;
    }
}
exports.LoanLimitToDepotValue = LoanLimitToDepotValue;
// export class LoanLimitToDepotValue extends Calculator {
//     _title = 'Beleihungsquote'
//     _desciption = 'das Verhältnis vom Beleihungswert zum Depotwert'
//     public getValue(): number {
//         return this.snapshot.lendingLimit / this.snapshot.depotValue
//     }
// }
