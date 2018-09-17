import React from 'react';
import { BrowserRouter, Router, Switch, Redirect, Route } from 'react-router-dom';

import ProductList from 'page/product/index/index.jsx';
import Category from 'page/product/category/index.jsx';

class ProductRouter extends React.Component{
	render(){
		return (
			<Switch>
				<Route path="/product/index" component={ProductList}/>
        <Route path="/product-category" component={Category}/>
        <Redirect exact from="/product" to="/product/index" />
			</Switch>
		)
	}
}
export default ProductRouter;