import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Snapshot, Calculator } from 'wpk'

let snapshot = new Snapshot(new Date(), -100, 200, 500, 2)
console.log({ 'Beleihungsquote': Calculator.value(snapshot, 'Beleihungsquote') })
console.log({ 'Kreditbeanspruchung': Calculator.value(snapshot, 'Kreditbeanspruchung') })

console.log(JSON.stringify(snapshot))
console.log(snapshot.balance)
snapshot.balance = 5
console.log(JSON.stringify(snapshot))
console.log(snapshot.balance)
console.log(snapshot instanceof Snapshot)

console.log("CLONE")
console.log("old")
console.log(JSON.stringify(snapshot))
let newSnapshot = Snapshot.fromJson(JSON.stringify(snapshot))
console.log(newSnapshot instanceof Snapshot)
console.log("new")
console.log(JSON.stringify(newSnapshot))

console.log(newSnapshot.balance)
newSnapshot.balance = 7
console.log(newSnapshot.balance)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
