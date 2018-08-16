/**
 * @param col bootstrapTable列表生成配置对象
 */
 
var searchValue ={};//查询匹配对象
 
 
var $button = $('<div class="columns pull-right search-button"><button class="btn btn-default" type="button" name="refresh" title="查询"><i class="glyphicon glyphicon-search icon-search"></i></button></div>');
var $input = $('<div class="columns pull-right search-input"><input class="form-control" type="text" placeholder="搜索"></div>');
var $select = $('<div class="columns pull-right search-select"><select></select></div>');
 
var addSearchGroup = function(col)
{
      // 插入选项
 
      var button ,input,select;
      button = $button;input = $input;select = $select;////局部变量缓存全局变量 提高代码性能
 
 
     var selectDom = $select.find('select');////缓存dom节点查找结果 避免在循环里用
 
 
     for(var i = 0; i < col.length; i++){
         if(col[i].visible != false){
             var $option = '<option value="'+col[i].field+'">'+col[i].title+'</option>';
             selectDom.append($option);
         }
     }
 
     //插入多选框、输入框、按钮
     $('.fixed-table-toolbar').append(button,input,select);
}
 
/*
button = $button
*/
 
searchAction($button);
 
function searchAction(button){
 
    //写入上一次查询的条件
     if(searchValue.select != undefined){
         $select.find('select').val(searchValue.select);
     };
     if(searchValue.input != undefined){
         $input.find('input').val(searchValue.input);
     };
     //写入查询条件
      // 获取查询选项
     button.click(function(){
 
           var option = $select.find('select').val();
           var inputval = $input.find('input').val();
 
           searchValue.select =option;
           searchValue.inputval =inputval;
      //定义刷新参数
         if(inputval != ''){
             var param = {
                 url: sWebRootPath+"/json/getAjaxData.jsp?v="+new Date().getTime(),
                 query: {
                     filters:[
                         {'colname':option,'filtertype':'LIKE','filtervalues':inputval}
                     ]
                 }
             }
         }else{
             var param = {
                url: sWebRootPath+"/json/getAjaxData.jsp?v="+new Date().getTime(),
             }
         }
           // 刷新表格
        $('#tablelist').bootstrapTable('refresh',param);
       });
 
}
