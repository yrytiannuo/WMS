import React from 'react';
import { Link } from 'react-router-dom';

import Mutil from 'util/mm.jsx';
import Product from 'service/Product-service.jsx';

import PageTitle from 'component/page-title/index.jsx';
import Pagination from 'util/pagination/index.jsx';
import TableList from 'util/table-list/index.jsx';
import SearchList from './index-list-search.jsx';

const _mm = new Mutil();
const _product = new Product();
import './index.scss';
class ProductList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: [],
      pageNum: 1,
      listType: 'list'
    };
  }
  componentDidMount(){
    this.loadProductList();
  }
  loadProductList(){
    let listParam = {};
    listParam.listType = this.state.listType;
    listParam.pageNum = this.state.pageNum;
    if(this.state.listType === 'search'){
      listParam.searchType = this.state.searchType;
      listParam.keyword = this.state.searchKeyword[0];
    }
    _product.getProductList(listParam).then(res => {
      this.setState(res);
    }, errMsg => {
      this.setState({
        list: []
    });
      _mm.errorTips(errMsg);
    });
  }
  //当页数变化的时候
  onPageNumChange(pageNum){
    this.setState({
      pageNum: pageNum
    }, () => {
      this.loadProductList();
    });
  }
  //改变状态
  onSetProductStatus(e,currentStatus,productId){
    let newStatus = currentStatus == 1 ? 2 : 1,
        confrimTips = currentStatus == 1 ? '确认要下架吗?' : '确认要上架吗?';
    if(window.confirm(confrimTips)){
      _product.setProductStatus({
        productId: productId,
        status: newStatus
      }).then(res => {
        _mm.successTips(res);
        this.loadProductList();
      },errMsg => {
        _mm.errorTips(errMsg);
      });
    }
  }
  //搜索
  onSearch(searchType,searchKeyword){
    let listType = searchKeyword === '' ? 'list' : 'search';
    this.setState({
      listType: listType,
      pageNum: 1,
      searchType: searchType,
      searchKeyword: searchKeyword
    }, () => {
      this.loadProductList();
    });
  }
  render(){
    let tableHeads = [
      {name: '商品ID',width: '10%'},
      {name: '商品信息',width: '50%'},
      {name: '价格',width: '10%'},
      {name: '状态',width: '15%'},
      {name: '操作',width: '15%'}
    ];
    return (
      <div id="page-wrapper">
        <PageTitle title="商品列表">
          <div className="page-header-right">
            <Link to="/product/save" className="btn btn-primary">
              <i className="fa fa-plus"></i>
              <span>添加商品</span>
            </Link>
          </div>
        </PageTitle>
        <SearchList onSearch={(searchType,searchKeyword) => {
          this.onSearch(searchType,searchKeyword);
        }} />    
        <TableList tableHeads={tableHeads}>
          {
            this.state.list.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>
                    <p>{product.name}</p>
                    <p>{product.subtitle}</p>
                  </td>
                  <td>￥{product.price}</td>
                  <td>
                    <p>{product.status == 1 ? '在售' : '已下架'}</p>
                    <button className="btn btn-xs btn-warning" onClick={(e) => {this.onSetProductStatus(e,product.status,product.id)}}>{product.status == 1 ? '下架' : '上架'}</button>
                  </td>
                  <td>
                    <Link className="opear" to={ `/product/detail/${product.id}` }>查看详情</Link>
                    <Link className="opear" to={ `/product/save/${product.id}` }>编辑</Link>
                  </td>
                </tr>
              );
            })
          }
        </TableList>
        <Pagination current={this.state.pageNum} total={this.state.total} 
                    onChange={(pageNum) => this.onPageNumChange(pageNum)}/>
      </div>
    );
  }
}

export default ProductList;
