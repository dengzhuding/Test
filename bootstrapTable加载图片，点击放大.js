$('#productTable').bootstrapTable({  
    columns: [    
{ checkbox:true},
{ field: 'companyImage', title: '公司logo',
formatter:function(value,row,index){
var s;
if(row.companyImage!=null){
var url = row.companyImage;
//var i = row.companyImage.indexOf("webapps");
//var url = row.companyImage.substring(i+7,row.companyImage.length);
//var url = 'F:\idnex.jpg';
s = '<a class = "view"  href="javascript:void(0)"><img style="width:300;height:40px;"  src="'+url+'" /></a>';
}
            return s;
 
},
 
//定义点击之后放大图片的事件
 
events: 'operateEvents'
}, 
        { field: 'companyName', title: '公司名称'},  
        { field: 'companyAddress', title: '公司地址' },
        { field: 'companyPhone', title: '公司电话' },
        { field: 'companyIntro', title: '公司简介' },
        {
              title: "操作",
              align: 'center',
              valign: 'middle',
              width: 200, // 定义列的宽度，单位为像素px
              formatter: function (value, row, index) {
              var e = '<a href="#" mce_href="#" onclick="edit(\''+ row.id + '\')">编辑</a> ';
              var c = '<a href="#" mce_href="#" onclick="detail(\''+ row.id + '\')">查看</a> ';
              var d = '<a href="#" mce_href="#" onclick="del(\''+ row.id +'\')">删除</a> ';
              return e+d+c;
              } 
         }
    ],  
    url:'${pageContext.request.contextPath}/companyBriefController/selectByCompany',
    method: "post",//请求方式
    contentType : "application/x-www-form-urlencoded",//必须加不加没法发送数据
    dataType: "json",//期待返回数据类型
    dataField:"list",//自定义集合建值
    //排序  
    sortName:'productSort',
    sortOrder:'asc',
    //分页相关配置
    pagination:true,//设置为 true 会在表格底部显示分页条
    pageSize:5,//如果设置了分页，页面数据条数
    sidePagination:"server",//设置在哪里进行分页
    //装饰
    showRefresh: true,    //是否显示刷新按钮
    search: false,//是否显示表格搜索，此搜索是客户端搜索，不会进服务端
    strictSearch: true,
    striped: true,  //表格显示条纹 
    searchOnEnterKey:true, //设置为 true时，按回车触发搜索方法，否则自动触发搜索方法
    toolbar:"#toolbar",
    clickToSelect: true,//点击选中行
    queryParams: function (params) {  
        return {  
        pageNumber: (params.offset / params.limit) +1,    
             pageSize: params.limit  
        }  
    },
    onSearch:function(text){
    var params = $('#productTable').bootstrapTable('getOptions');//那个这个表的参数
    var param = {
    url:"${pageContext.request.contextPath}/selectLikeProduct?pageNumber="+params.pageNumber+"&pageSize="+params.pageSize+"&productName="+text,
    silent:true 
    }
    $('#productTable').bootstrapTable('refresh',param); 
    }
 
}); 
 
 
 
 
 
 
 
 
 
//点击之后放到图片
 
window.operateEvents = {
 
    'click .view': function (e, value, row, index) {
    console.log(row);
    /* var i = row.companyImage.indexOf("webapps");
var url = row.companyImage.substring(i+7,row.companyImage.length); */
var url = row.companyImage;
layer.open({//需要加载layer控件
          type: 1,
          title: false,
          closeBtn: 0,
          area: ['700px', '300px'],
          skin: 'layui-layer-nobg', //没有背景色
          shadeClose: true,
          content: '<img  src="'+url+'"/>'
        });
    },
};
