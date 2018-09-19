import React from 'react';
import { BrowserRouter, Router, Switch, Redirect, Route } from 'react-router-dom';

class ListSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchType: 'productId',
      searchKeyword: '',
    }
  }
  onValueChange(e){
    let name = e.target.name,
        value = e.target.value.trim();
    this.setState({
        [name]: [value]
    })
  }
  onSearch(){
    console.log('1');
    this.props.onSearch(this.state.searchType,this.state.searchKeyword);
  }
  onSearchKeywordKeyup(e){
    if(e.keyCode == 13){
      this.onSearch();
    }
  }
	render(){
		return (
			<div className="row search-wrap">
        <div className="col-md-12">
          <div className="form-inline">
            <div className="form-group">
              <select name="searchType" className="form-control" onChange={(e) => this.onValueChange(e)}>
                <option value="productId">按商品id查询</option>
                <option value="productName">按商品名称查询</option>
              </select>
            </div>
            <div className="form-group">
              <input 
                name="searchKeyword"
                className="form-control"
                onKeyUp={(e) => this.onSearchKeywordKeyup(e)}
                onChange={(e) => this.onValueChange(e)} 
                id="exampleInputPassword3"
                placeholder="关键字" />
            </div>
            <button className="btn btn-primary" 
              onClick={(e) => this.onSearch()}>搜索</button>
           </div>
        </div>
      </div>
		)
	}
}
export default ListSearch;