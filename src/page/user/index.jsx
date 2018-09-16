import React from 'react';
import { Link } from 'react-router-dom';

import Mutil from 'util/mm.jsx';
import User from 'service/user-service.jsx';

import PageTitle from 'component/page-title/index.jsx';
import Pagination from 'util/pagination/index.jsx';

const _mm = new Mutil();
const _user = new User();

class UserList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: [],
      pageNum: 1
    };
  }
  componentDidMount(){
    this.loadUserList();
  }
  loadUserList(){
    _user.getUserList(this.state.pageNum).then(res => {
      this.setState(res);
      console.log(res);
    }, errMsg => {
      _mm.errorTips(errMsg);
    });
  }
  //当页数变化的时候
  onPageNumChange(pageNum){
    console.log(pageNum);
    this.setState({
      pageNUm: pageNum
    }, () => {
      this.loadUserList();
    });
  }
  render(){
    return (
      <div id="page-wrapper">
        <PageTitle title="用户列表"/>
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>用户名</th>
                  <th>邮箱</th>
                  <th>电话</th>
                  <th>注册时间</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.list.map((user, index) => {
                    return (
                      <tr key={index}>
                        <th>{user.id}</th>
                        <th>{user.username}</th>
                        <th>{user.email}</th>
                        <th>{user.phone}</th>
                        <th>{user.createTime}</th>
                      </tr>
                    );
                  })
                }       
              </tbody>
            </table>
          </div>
        </div>
        <Pagination current={this.state.pageNum} total={this.state.total} 
                    onChange={(pageNum) => this.onPageNumChange(pageNum)}/>
      </div>
    );
  }
}

export default UserList;
