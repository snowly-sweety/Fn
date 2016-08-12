
//obj代表调用函数的对象（滚轮事件绑定在此对象上），handle为回调函数
function addScrollEvent(obj,handle){
	var isFF = navigator.userAgent.indexOf("Firefox");
	//如果结果为-1，说明不是Firefox浏览器；
	if (isFF != -1) {
		obj.addEventListener("DOMMouseScroll",scrollFun,false);
	} else{
		obj.onmousewheel = scrollFun;
	}
	function scrollFun(event){
		var ev = event || window.event;
		var down; 
		if (isFF != -1) {
			//火狐：当前向后滑动 (detail在其他浏览器上为0)；
			down = ev.detail > 0;
		} else{
			//当前向后滑动
			down = ev.wheelDelta < 0;
		}
		//调用匿名函数；
		handle(down);
	}
}
