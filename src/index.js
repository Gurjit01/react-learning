import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contact from "./Contact";
import App from './App';
import Nugen from './Nugen'; 
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Nugen/>,
    document.getElementById('root')
);
registerServiceWorker();
