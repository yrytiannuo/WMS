import React from 'react';

import './index.scss';

import MUtil from 'util/mm.jsx';
import User from 'service/user-service.jsx';

const _mm = new MUtil();
const _user = new User();

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: _mm.getUrlParam('redirect') || ''
        }
    }
    componentWillMount(){
        document.title = '登录 - KNOX NOE';
    }
    //当用户名发生改变
    onInputChange(e){
        let inputValue = e.target.value,
            inputName = e.target.name;
        this.setState({
            [inputName]: inputValue
        });
    }
    //用户登录
    onSubmit(e){
        let loginInfo = {
            username: this.state.username,
            password: this.state.password
        },
        checkResult = _user.checkLoginInfo(loginInfo);
        //验证通过
        if(checkResult.status){
             _user.login(loginInfo).then((res) => {
                _mm.setStorage('userInfo', res);
                this.props.history.push(this.state.redirect);
            },(err) => {
                _mm.errorTips(err);
            });
        }
        else{
            _mm.errorTips(checkResult.msg);
        }
    }   
    onInputKeyUp(e){
        if(e.keyCode === 13){
            this.onSubmit();
        }
    }
    render(){
        return (
                <div className="col-md-4 col-md-offset-4">
                    <div className="panel panel-default login-panel">
                        <div className="panel-heading">欢迎登录 - Knox-Noe</div>
                        <div className="panel-body">
                        <div>
                            <div className="form-group"> 
                                <input type="email" name="username" className="form-control" onKeyUp={e => this.onInputKeyUp(e)} placeholder="请输入用户名" onChange={e => this.onInputChange(e)}/>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-control" onKeyUp={e => this.onInputKeyUp(e)} placeholder="请输入密码" onChange={e => this.onInputChange(e)}/>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block"
                                    onClick={e => this.onSubmit(e)}>Submit</button>
                        </div>
                        </div>
                    </div>
                </div>        
        );
    }
}

export default Login;
