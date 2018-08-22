$('.fancybox').fancybox({ 
helpers: { 
//缩略图 
thumbs : { 
            width: 50, 
            height: 50 
        }, 
        //overlay为null时，页面锁死 
overlay:{ 
            showEarly : false 
        }, 
        //控制按钮，前一个，后一个，缩放，关闭 
        buttons	: {}, 
        //控制标题位置，为空则为默认 
        title:{ 
        //type:'outside' 
        } 
}, 
//在面板右上角是否出现关闭按钮 
closeBtn : true, 
//点击内容是否关闭面板 
closeClick:true, 
//打开速度，动画效果 
openSpeed:200, 
//关闭速度，动画效果 
closeSpeed:50, 
//鼠标滚轴控制图片 
mouseWheel:true, 
//内容，可以覆盖默认展现的内容 
content:null, 
//标题内容，可以覆盖默认的标题 
title:'zhang', 
//与content功能相似，但更灵活 
//href:'D:/picture/IMAG0077.JPG', 
direction:{ 
next:'left', 
pre:'right' 
}, 
//控制content上面的前进与后退是否可用，点击桌面图层是否消失(与overlay为null功能相似)，true为否 
//modal:true 
}); 
});
