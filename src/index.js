import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contact from "./Contact";
import App from './App';
import Nugen from './Nugen';
import registerServiceWorker from './registerServiceWorker';


const baseUrl= "http://localhost:3000";


ReactDOM.render(
	<Nugen baseUrl={baseUrl}/>,
  document.getElementById('root')
);
registerServiceWorker();
