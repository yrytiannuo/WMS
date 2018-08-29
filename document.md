ES6
===
promise
---
Promise对象
```
new Promise((resolve,reject)=>{
    $.ajax({
        url: "",
        type: "post",
        success(res){
            resolve(res);
        },
        error(err){
            reject(err);
        }
    });
}).then((res)=>{
    console.log("success后的执行事件"+res);
},(err)=>{
    console.log("error后的执行事件"+err);
});
```

