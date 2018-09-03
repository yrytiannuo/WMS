import React from 'react';
// import './index.css'
import PageTitle from 'component/page-title/index.jsx';

export default class Home extends React.Component{
    render(){
        return (
            <div id="page-wrapper">
                <PageTitle title="首页">
                    <button className="btn btn-warning">test</button>
                </PageTitle>
                <div className="row">
                    <div className="col-md-12">
                        body
                    </div>
                </div>
            </div>
        );
    }
}

