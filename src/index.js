import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Snapshot, LoanLimitToDepotValue } from 'wpk'

let snapshot = new Snapshot(Date(), 100, 200, 500)

console.log(LoanLimitToDepotValue.value(snapshot))

// let calculator = new LoanLimitToDepotValue(snapshot)
// console.log(calculator.getValue())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
