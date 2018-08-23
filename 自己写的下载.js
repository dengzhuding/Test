

if (myBrowser()==="IE"||myBrowser()==="Edge"){
				SaveAs5(url);
	        }
	        else
	        {
	            download(url);
	        }


//		//定义一个form表单,通过form表单来发送请求
//	    var form=$("<form>");
//	    //设置表单状态为不显示
//	    form.attr("style","display:none");
//	    //method属性设置请求类型为post
//	    form.attr("method","post");
//	    //action属性设置请求路径,
//	    //请求类型是post时,路径后面跟参数的方式不可用
//	    //可以通过表单中的input来传递参数
//	    form.attr("action",url);
//	    $("body").append(form);//将表单放置在web中
//	    //在表单中添加input标签来传递参数
//	    //如有多个参数可添加多个input标签
//	    var input1=$("<input>");
//	    input1.attr("type","hidden");//设置为隐藏域
//	    input1.attr("name","id");//设置参数名称
//	    input1.attr("value",id);//设置参数值
//	    form.append(input1).submit().remove();//表单提交
        //谷歌，360极速等浏览器下载
        function download(src) {
        	var $a = document.createElement('a');
            $a.setAttribute("href", src);
            $a.setAttribute("download", "");

            var evObj = document.createEvent('MouseEvents');
            evObj.initMouseEvent( 'click', true, true, window, 0, 0, 0, 0, 0, false, false, true, false, 0, null);
            $a.dispatchEvent(evObj);
        };
        //IE浏览器图片保存本地
        function SaveAs5(imgURL)
        {
            var oPop = window.open(imgURL,"","width=0, height=0, top=1000, left=1000");
            for(; oPop.document.readyState != "complete"; )
            {
                if (oPop.document.readyState == "complete")
                	break;
            }
            oPop.document.execCommand("SaveAs");
            oPop.close();
        }
        function myBrowser(){
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
            var isOpera = userAgent.indexOf("Opera") > -1;
            if (isOpera) {
                return "Opera"
            }; //判断是否Opera浏览器
            if (userAgent.indexOf("Firefox") > -1) {
                return "FF";
            } //判断是否Firefox浏览器
            if (userAgent.indexOf("Chrome") > -1){
                return "Chrome";
            }
            if (userAgent.indexOf("Safari") > -1) {
                return "Safari";
            } //判断是否Safari浏览器
            if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
                return "IE";
            }; //判断是否IE浏览器
            if (userAgent.indexOf("Trident") > -1) {
                return "Edge";
            } //判断是否Edge浏览器
        }
