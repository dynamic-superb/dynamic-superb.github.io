import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './override.css'
import { hydrate, render } from "react-dom";
 
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}