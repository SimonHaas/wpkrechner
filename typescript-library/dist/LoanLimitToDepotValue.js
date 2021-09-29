"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calculator_1 = require("./Calculator");
class LoanLimitToDepotValue extends Calculator_1.Calculator {
    constructor() {
        super(...arguments);
        this._title = 'Beleihungsquote';
        this._desciption = 'das Verhältnis vom Beleihungswert zum Depotwert';
    }
    getValue() {
        return this.snapshot.lendingLimit / this.snapshot.depotValue;
    }
}
exports.LoanLimitToDepotValue = LoanLimitToDepotValue;
