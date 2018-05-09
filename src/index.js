import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Contact from "./Contact";
import App from './App';
import Nugen from './Nugen';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

// <Nugen baseUrl={baseUrl}/>

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path="/" component={App}/>
			<Route path="/nugen" component={Nugen}/>
		</div>
	</BrowserRouter>
	,
  document.getElementById('root')
);
registerServiceWorker();
