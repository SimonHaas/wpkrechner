import { Calculator } from "./Calculator";

export class LoanLimitToDepotValue extends Calculator {
    _title = 'Beleihungsquote'
    _desciption = 'das Verhältnis vom Beleihungswert zum Depotwert'

    public getValue(): number {
        return this.snapshot.lendingLimit / this.snapshot.depotValue
    }
}