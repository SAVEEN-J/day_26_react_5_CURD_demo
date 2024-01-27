import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

let  EarningsDAta=[
  
  {
    id:1,
    text: "Earnings (Monthly)",
    amount: "$40,000",
    textcolor: "primary",
    icon: "fa-calendar",
    progressbar: false
  },
  {
    id:2,
    text: "Earnings (Annual)",
    amount: "$215,000",
    textcolor: "success",
    icon: "fa-dollar-sign",
    progressbar: false
  },
  {
    id:3,
    text: "Tasks",
    amount: "50%",
    textcolor: "info",
    icon: "fa-clipboard-list",
    progressbar: true
  },
  {
    id:4,
    text: "Pending Requests",
    amount: "18",
    textcolor: "warning",
    icon: "fa-comments",
    progressbar: false
  },
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>
   <App EarningsDAta={EarningsDAta} />


 </Router>
   

);

