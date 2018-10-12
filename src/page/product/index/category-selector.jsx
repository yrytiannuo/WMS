import React from 'react';
import { BrowserRouter, Router, Switch, Redirect, Route } from 'react-router-dom';
import Mutil from 'util/mm.jsx';
import Product from 'service/Product-service.jsx';
import './category-selector.scss';

const _mm = new Mutil();
const _product = new Product();

class CategorySelector extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			firstCategoryList : [],
			firstCategoryId : 0,
			secondCategoryList : [],
			secondCategoryId : 0
		}
	}
	componentDidMount(){
		this.loadFirstCategory();
	}
	//加载一级分类
	loadFirstCategory(){
		_product.getCategoryList().then(res => {
			this.setState({
				firstCategoryList : res
			});
		},errMsg => {
			_mm.errorTips(errMsg);
		});
	}
	render(){
		return (
      <div>
        <div className="col-md-5">
					<select name="" id="" className="form-control cate-select">
						{
							this.state.firstCategoryList.map((category,index) => <option key={index} value={category.id}>{category.name}</option>)
						}
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
export default CategorySelector;