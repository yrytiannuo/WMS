import React from 'react';
import { Link } from 'react-router-dom';

import PageTitle from 'component/page-title/index.jsx';

class Error extends React.Component{
  constructor(propos){
    super(propos);
  }
  render(){
    return (
      <div id="page-wrapper">
        <PageTitle title="出错了！"/>
        <div className="row">
          <div className="col-md-12">
            <span>路径出错了，</span>
            <Link to="/">点我返回首页</Link>
          </div>
        </div> 
      </div>
    );
  }
}

export default Error;
