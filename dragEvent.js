function drag(selector, parentSelector) {
    const dragDom = document.querySelector(selector)
    const parentDOm = document.querySelector(parentSelector)
    if(!dragDom) {
        return 
    }
    let distanceX = 0
    let distanceY = 0
    window.doc = document
    // doc.onmousemove =  mousemoveFun
    // 一开始是这样写的，　但是在项目里面会覆盖掉之前添加的监听的mousemove事件
    // 比较好的写法是另外添加监听事件
    dragDom.addEventListener('mousedown', mouseDownFun, false)
 
    function mouseDownFun(e) {
        var e = e || window.event
        distanceX = e.clientX - dragDom.offsetLeft 
        distanceY = e.clientY - dragDom.offsetTop 
        event.preventDefault && event.preventDefault()
        event.stopPropagation && event.stopPropagation() 
        doc.addEventListener('mousemove', mousemoveFun, false)
        doc.addEventListener('mouseup', mouseupFun, false)
    } 
 
    function mousemoveFun(e) {
        var  e = e || window.event
        e.preventDefault && e.preventDefault()
        e.stopPropagation && e.stopPropagation()
        let leftX = e.clientX - distanceX  //表示被拖动的元素离父元素的左边距
        let topY = e.clientY - distanceY
        let maxLeftX = parentDOm.offsetWidth - dragDom.offsetWidth//　被拖动的ｄｉｖ能拖动的最大宽度
        let maxTopY = parentDOm.offsetHeight - dragDom.offsetHeight
        // 保证被移动的div不被移动到浏览器可视区域外
        if(leftX < 0) {
            leftX = 0
        }else if(leftX > maxLeftX) {　　// 当被拖动的元素离父元素的左边距大于
            leftX = maxLeftX
        }
        if(topY < 0) {
            topY = 0
        }else if(topY > maxTopY) {
            topY = maxTopY
        }
        dragDom.style.left = leftX + "px"
        dragDom.style.top = topY + "px"
    }
 
    function mouseupFun(e) { 
        doc.removeEventListener('mouseup', mouseupFun, false)
        doc.removeEventListener('mousemove', mousemoveFun, false)
    }
}
