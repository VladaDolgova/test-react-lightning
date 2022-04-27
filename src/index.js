import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Example from './Example';
import utilitySprite from '@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg';
import standardSprite from '@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg';
import { IconSettings } from "@salesforce/design-system-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<IconSettings {...{ utilitySprite, standardSprite }}>
    <App />
    <Example />
    </IconSettings>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
