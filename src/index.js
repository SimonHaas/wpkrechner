import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Snapshot, Calculator } from 'wpk'

let snapshot = new Snapshot(Date(), -100, 200, 500)
console.log({ 'Beleihungsquote': Calculator.value(snapshot, 'Beleihungsquote') })
console.log({ 'Kreditbeanspruchung': Calculator.value(snapshot, 'Kreditbeanspruchung') })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
