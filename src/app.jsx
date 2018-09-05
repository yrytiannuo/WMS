import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Switch, Redirect, Route } from 'react-router-dom';

import Layout from 'component/layout/index.jsx';
//页面
import Home from 'page/home/index.jsx';//首页
import Login from 'page/login/index.jsx';//登录页

class App extends React.Component{
	render(){
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/login" component={Login}/>
					<Route path="/" render={ props => (
						<Layout>
							<Switch>
								<Route exact path="/" component={Home}/>
								<Route path="/product" component={Home}/>
								<Route path="/prodect-categroy" component={Home}/>
							</Switch>
						</Layout>
					)}/>
				</Switch>		
		  	</BrowserRouter>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);