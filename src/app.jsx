import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Switch, Redirect, Route } from 'react-router-dom';

import Layout from 'component/layout/index.jsx';
//页面
import Home from 'page/home/index.jsx';//首页
import Login from 'page/login/index.jsx';//登录页
import ErrorPage from 'page/error/index.jsx';//错误页
import UserList from 'page/User/index.jsx';
import ProductRouter from 'page/product/router.jsx';

class App extends React.Component{
	render(){
		let LayoutRouter = (
			<Layout>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/product" component={ProductRouter}/>
					<Route path="/product-category" component={ProductRouter}/>
					<Route path="/user/index" component={UserList}/>
					<Redirect exact form="/user" to="/user/index"/>
					<Route component={ErrorPage}></Route>
				</Switch>
			</Layout>
		);
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/login" component={Login}/>
					<Route path="/" render={ props => LayoutRouter}/>
				</Switch>
		  </BrowserRouter>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);