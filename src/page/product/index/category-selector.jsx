import React from 'react';
import { BrowserRouter, Router, Switch, Redirect, Route } from 'react-router-dom';

import './category-selector.scss';


class ProductRouter extends React.Component{
	render(){
		return (
      <div>
        <div className="col-md-5">
					<select name="" id="" className="form-control cate-select">
						<option value="">请选择一级分类</option>
						<option value="">请选择二级分类</option>
					</select>
					<select name="" id="" className="form-control cate-select">
						<option value="">请选择一级分类</option>
						<option value="">请选择二级分类</option>
					</select>
				</div>
      </div>
		)
	}
}
export default ProductRouter;