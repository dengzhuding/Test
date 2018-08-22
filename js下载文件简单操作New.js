//一般下载 
//例如要下载文件的地址为：htpp://127.0.0.1/test.rar
//该方法在火狐上没有效果的，在IE浏览器上是可以的
window.open("htpp://127.0.0.1/test.rar");



//该方法火狐有些版本是不支持的
window.location.href="htpp://127.0.0.1/test.rar";



//为了解决火狐有些版本不支持,可以改成这种方式
window.location="htpp://127.0.0.1/test.rar"; 



//该方法IE和火狐都可以，
//url表示要下载的文件路径,如:htpp://127.0.0.1/test.rar
function downloadFile(url) {   
   try{ 
        var elemIF = document.createElement("iframe");   
        elemIF.src = url;   
        elemIF.style.display = "none";   
        document.body.appendChild(elemIF);   
    }catch(e){ 
        zzrw.alert("下载异常！");
    }     
}


//表单方式直接下载文件
//url表示要下载的文件路径,如:htpp://127.0.0.1/test.rar
function downloadFile(url){
    var form=$("<form>");//定义form表单,通过表单发送请求
    form.attr("style","display:none");//设置为不显示
    form.attr("target","");
    form.attr("method","get");//设置请求类型  
    form.attr("action",url);//设置请求路径
    $("body").append(form);//添加表单到页面(body)中
    form.submit();//表单提交
}
//不跳转页面请求后台下载，后台返回一个数据流，可通过表单实现 
//如下:JQuery的ajax函数的返回类型只有xml、text、json、html等类型，
//没有“流”类型，所以我们要实现ajax下载，不能够使用相应的ajax函数进行文件下载。但可以用js生成一个form，用这个form提交参数，
//并返回“流”类型的数据。在实现过程中，页面也没有进行刷新。
//url表示请求路径,进入后台处理,后台返回一个文件流
//例如:url为htpp://127.0.0.1/test
function downloadFile(url){

    //定义一个form表单,通过form表单来发送请求
    var form=$("<form>");

    //设置表单状态为不显示
    form.attr("style","display:none");

    //method属性设置请求类型为get
    form.attr("method","get");

    //action属性设置请求路径,(如有需要,可直接在路径后面跟参数)
    //例如:htpp://127.0.0.1/test?id=123
    form.attr("action",url);

    //将表单放置在页面(body)中
    $("body").append(form);

    //表单提交
    form.submit();
}

//url表示请求路径,进入后台处理,后台返回一个文件流
//例如:url为htpp://127.0.0.1/test
function downloadFile(url){

    //定义一个form表单,通过form表单来发送请求
    var form=$("<form>");

    //设置表单状态为不显示
    form.attr("style","display:none");

    //method属性设置请求类型为post
    form.attr("method","post");

    //action属性设置请求路径,
    //请求类型是post时,路径后面跟参数的方式不可用
    //可以通过表单中的input来传递参数
    form.attr("action",url);
    $("body").append(form);//将表单放置在web中

    //在表单中添加input标签来传递参数
    //如有多个参数可添加多个input标签
    var input1=$("<input>");
    input1.attr("type","hidden");//设置为隐藏域
    input1.attr("name","id");//设置参数名称
    input1.attr("value","123");//设置参数值
    form.append(input1);//添加到表单中

    form.submit();//表单提交
}
