import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {sayHello, sayGoodbye, Greeter} from 'typescript-library'
import * as wpk from 'wpk/index'


sayHello();
sayHello();
sayGoodbye();

console.log(Greeter)
let test = new Greeter('Tim')
console.log(test.greet())


console.log(wpk.isWds())


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
