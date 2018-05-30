import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Contact from "./Contact";
import App from './App';
import Login from './Login';
import Nugen from './Nugen';
import NewLogin from './NewLogin';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

// <Nugen baseUrl={baseUrl}/>

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path="/" component={App}/>
			<Route path="/login" component={Login}/>
			<Route path="/nugen" component={Nugen}/>
			<Route path="/newlogin" component={NewLogin}/>
		</div>
	</BrowserRouter>
	,
  document.getElementById('root')
);
registerServiceWorker();
