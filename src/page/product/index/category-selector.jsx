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
	//加载二级分类
	loadSecondCategory(){
		_product.getCategoryList(this.state.firstCategoryId).then(res => {
			this.setState({
				secondCategoryList : res
			});
		},errMsg => {
			_mm.errorTips(errMsg);
		});
	}
	//根据一级分类加载二级分类
	onFirstCategoryChange(e){
		let newValue = e.target.value || 0;
		this.setState({
			firstCategoryId: newValue,
			secondCategoryId: 0,
			secondCategoryList: []
		},() => {
			this.loadSecondCategory();
			this.onPropsCategoryChange();
		});
	}
	onSecondCategoryChange(e){
		let newValue = e.target.value || 0;
		this.setState({
			secondCategoryId: 0,
		},() => {
			this.onPropsCategoryChange();
		});
	}
	//传给父级分类
	onPropsCategoryChange(){
		let categoryChangeable = typeof this.props.onCategoryChange() === 'function';
		if(this.state.secondCategoryId){
			categoryChangeable && this.props.onCategoryChange(this.state.secondCategoryId,this.state.firstCategoryId);
		}else{
			categoryChangeable && this.props.onCategoryChange(this.state.firstCategoryId,0);
		}
	}
	render(){
		return (
      <div>
        <div className="col-md-5">
					<select id="" className="form-control cate-select" 
						onChange={(e) => this.onFirstCategoryChange(e)}>
						<option value="">请选择一级分类</option>
						{
							this.state.firstCategoryList.map((category,index) => <option key={index} value={category.id}>{category.name}</option>)
						}
					</select>
					{
						this.state.secondCategoryList.length ?
						(<select name="" id="" className="form-control cate-select"
							onChange={(e) => this.onSecondCategoryChange(e)}>
							<option value="">请选择一级分类</option>
							{
								this.state.secondCategoryList.map((category,index) => <option key={index} value={category.id}>{category.name}</option>)
							}
						</select>) : null
					}
				</div>
      </div>
		)
	}
}
export default CategorySelector;