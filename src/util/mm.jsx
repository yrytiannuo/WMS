class MUtil{
    request(param){
        return new Promise((resolve,reject) => {
            $.ajax({
                type: param.type || "post",
                url: param.url || '',
                dataType: param.dataType || "json",
                data: param.data || null,
                success(res){
                    //数据请求成功
                    if(0 === res.status){
                        typeof resolve === 'function' && resolve(res.data, res.msg);
                    }else if(10 === res.status){
                        //去登陆
                        this.doLogin();
                    }else{
                        typeof reject === 'function' && reject(res.msg || res.data);
                    }
                },
                error(err){
                    typeof reject === 'function' && reject(err.statusText);
                }
            });
        });
    }
    //强制登录
    doLogin(){
        window.location.href = "/login?redirect=" + encodeURIComponent(window.location.pathname);
    }
    //获取URL参数
    getUrlParam(name){
        let queryString = window.location.search.split('?')[1] || '',
        reg = new RegExp("(^|&)"+ name + "=([^&]*)(&|$)"),
        result = queryString.match(reg);
        return result ? decodeURLComponent(result[2]) : null;
    }
    //错误提示
    errorTips(errMsg){
        alert(errMsg || '出错了!');
    }

    //本地存储
    setStorage(name, data){
        let dataType = typeof data;
        if(dataType === 'object'){
            window.localStorage.setItem(name,JSON.stringify(data));
        }else if(['number','string','boolean'].indexOf(dataType) >= 0){
            window.localStorage.setItem(name,data);
        }else{
            alert('本地存储失败！');
        }
    }
    getStorage(name){
        let data = window.localStorage.getItem(name);
        if(data){
            return JSON.parse(data);
        }else{
            return '';
        }
    }
    removeStorage(name){
        window.localStorage.removeItem(name);
    }
}

export default MUtil;