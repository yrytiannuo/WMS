import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import Mutil from 'util/mm.jsx';
import Product from 'service/Product-service.jsx';
import CategorySelector from './category-selector.jsx';

const _mm = new Mutil();
const _product = new Product();
class ProductSave extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			categoryId: 0,
			parentCategoryId: 0
		}
	}
	onCategoryChange(categoryId, parentCategoryId){
		console.log(categoryId);
	}
	render(){
		return (
			<div id="page-wrapper">
				<PageTitle title="添加商品"/>
				<form className="form-horizontal">
					<div className="form-group">
						<label className="col-sm-2 control-label">商品名称</label>
						<div className="col-md-5">
							<input type="text" className="form-control" placeholder="请输入商品名称	" />
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">商品描述</label>
						<div className="col-md-5">
							<input type="text" className="form-control" placeholder="请输入描述" />
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">所属分类</label>
						<CategorySelector onCategoryChange={
							(categoryId, parentCategoryId) => this.onCategoryChange(categoryId, parentCategoryId)}/>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">商品价格</label>
						<div className="col-md-3">
							<div className="input-group">
								<span className="input-group-addon">$</span>
								<input type="number" className="form-control" />
								<span className="input-group-addon">元</span>
							</div>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">商品库存</label>
						<div className="col-md-3">
							<div className="input-group">
								<span className="input-group-addon">$</span>
								<input type="number" className="form-control" />
								<span className="input-group-addon">件</span>
							</div>
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-10">
							<button type="submit" className="btn btn-primary">提交</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}
export default ProductSave;