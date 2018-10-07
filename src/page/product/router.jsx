import React from 'react';
import { BrowserRouter, Router, Switch, Redirect, Route } from 'react-router-dom';

import ProductList from 'page/product/index/index.jsx';
import Category from 'page/product/category/index.jsx';
import ProductSave from 'page/product/index/save.jsx';

class ProductRouter extends React.Component{
	render(){
		return (
			<Switch>
				<Route path="/product/index" component={ProductList}/>
				<Route path="/product/save" component={ProductSave}/>
        <Route path="/product-category" component={Category}/>
        <Redirect exact from="/product" to="/product/index" />
			</Switch>
		)
	}
}
export default ProductRouter;