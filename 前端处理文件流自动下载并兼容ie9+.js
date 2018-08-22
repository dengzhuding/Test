/**
 * 公共导出功能
 * model.url：请求后台地址
 * model.name：下载文件名称
 * model.data: 请求参数
 * model.type: 请求类型  post get
 * */
function exportLists(model) {
    var layerIndex=layer.msg('正在导出文件，请稍后...', {icon: 16,shade: 0.01,time: 100000 });
    var xhr=null;
    if (window.XMLHttpRequest) {//Mozilla 浏览器
        xhr = new XMLHttpRequest();
    }else {
        if (window.ActiveXObject) {//IE 浏览器
            try {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
                try {//IE 浏览器
                    xhr = new ActiveXObject("Msxml2.XMLHTTP");
                }
                catch (e) {
                }
            }
        }
    }
    xhr.open(model.type, model.url, true);
    xhr.responseType = "blob";
    xhr.setRequestHeader("Authorization", sessionStorage.getItem('cookieKey'));
    //post请求一定要添加请求头才行不然会报错
    if(model.type=='post'){
        xhr.setRequestHeader("Content-type","application/json");
    }
    xhr.onload = function() {
        if (this.status == 200) {
            var fileName = this.getResponseHeader("content-disposition");
            var blob = this.response;// this.response也就是请求的返回就是Blob对象
            var a = document.createElement('a');
            //一个字符串，表明该Blob对象所包含数据的MIME类型
            blob.type = "application/excel";
            var url = URL.createObjectURL(blob);
            a.href = url;
            $("body").append(a);
            var fileType = ".xls";
            if(fileName.endsWith(".xlsx")){
                fileType = '.xlsx';
            }
            a.download = new Date().getFullYear()+model.name+dateFormat(new Date(),1)+fileType;
            if(!!window.ActiveXObject || "ActiveXObject" in window){
                window.navigator.msSaveOrOpenBlob(blob, new Date().getFullYear()+model.name+dateFormat(new Date(),1)+fileType)
            }else {
                a.click()
            }
            window.URL.revokeObjectURL(url);
        }else{
            layer.msg('导出错误！')
        }
    }
    xhr.send(model.data);
}
