import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Router, Switch, Redirect, Route } from 'react-router-dom';

import Layout from 'component/layout/index.jsx';
//页面
import Home from 'page/home/index.jsx';

class App extends React.Component{
	render(){
		return (
			<BrowserRouter>
				<Layout>
					<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/product" component={Home}/>
					<Route path="/prodect-categroy" component={Home}/>
					</Switch>
				</Layout>		
		  	</BrowserRouter>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);