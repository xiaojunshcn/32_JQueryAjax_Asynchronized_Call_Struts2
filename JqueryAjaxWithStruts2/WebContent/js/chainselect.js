$(document).ready(function(){
	//找到三个下拉框
	var carnameSelect = $(".carname").children("select");
	var cartypeSelect = $(".cartype").children("select");
	var wheeltypeSelect = $(".wheeltype").children("select");
	var carimg = $(".carimg");
	//给三个下拉框注册事件
	carnameSelect.change(function(){
		//1.需要获得当前下拉框的值
		var carnameValue = $(this).val();
		//1.1只要第一个下拉框内容有变化，第三个下拉框都要先隐藏起来
		wheeltypeSelect.parent().hide();
		//1.2将汽车图片隐藏起来
		carimg.hide().attr("src","");
		//2.如果值不为空，则将下拉框的值传送给服务器
		if (carnameValue != "") {
			if (!carnameSelect.data(carnameValue)) {
				//$.post("ChainSelect",{keyword: carnameValue, type: "top"},function(data){
				
				//this commented url is a valid url
				//$.post("/JqueryAjaxWithStruts2/test/chainSelectAction.action",{keyword: carnameValue, type: "top"},function(data){
				$.post("test/chainSelectAction.action",{keyword: carnameValue, type: "top"},function(data){
					data = data.carTypes;
					//2.1接收服务器返回的汽车类型
					if (data.length != 0) {
						//2.2解析汽车类型的数据，填充到汽车类型的下拉框中
						cartypeSelect.html("");
						$("<option value=''>请选择汽车类型</option>").appendTo(cartypeSelect);
						for (var i = 0; i < data.length; i++) {
							$("<option value='" + data[i] + "'>" + data[i] + "</option>").appendTo(cartypeSelect);
						}
						//2.2.1汽车类型的下拉框显示出
						cartypeSelect.parent().show();
						//2.2.2第一个下拉框后面的指示图片显示出来
						carnameSelect.next().show();
					} else {
						//2.3没有任何汽车类型的数据
						cartypeSelect.parent().hide();
						carnameSelect.next().hide();
					}
					carnameSelect.data(carnameValue, data);
				}, "json");
			} else {
				var data = carnameSelect.data(carnameValue);
				//2.1接收服务器返回的汽车类型
				if (data.length != 0) {
					//2.2解析汽车类型的数据，填充到汽车类型的下拉框中
					cartypeSelect.html("");
					$("<option value=''>请选择汽车类型</option>").appendTo(cartypeSelect);
					for (var i = 0; i < data.length; i++) {
						$("<option value='" + data[i] + "'>" + data[i] + "</option>").appendTo(cartypeSelect);
					}
					//2.2.1汽车类型的下拉框显示出
					cartypeSelect.parent().show();
					//2.2.2第一个下拉框后面的指示图片显示出来
					carnameSelect.next().show();
				} else {
					//2.3没有任何汽车类型的数据
					cartypeSelect.parent().hide();
					carnameSelect.next().hide();
				}
			}
		} else {
			//3.如果值为空，那么第二个下拉框所在span要隐藏起来，第一个下拉框后面的指示图片也要隐藏
			cartypeSelect.parent().hide();
			carnameSelect.next().hide();
		}
	});

	cartypeSelect.change(function(){
		//1.需要获得当前下拉框的值
		var cartypeValue = $(this).val();
		//1.1将汽车图片隐藏起来
		carimg.hide().attr("src","");
		//2.如果值不为空，则将下拉框的值传送给服务器
		if (cartypeValue != "") {
			if (!cartypeSelect.data(cartypeValue)) {
				//$.post("ChainSelect",{keyword: cartypeValue, type: "sub"},function(data){
				
				//this commented url is a valid url
				//$.post("/JqueryAjaxWithStruts2/test/chainSelectAction.action",{keyword: cartypeValue, type: "sub"},function(data){
				$.post("test/chainSelectAction.action",{keyword: cartypeValue, type: "sub"},function(data){
					data = data.wheelTypes;
					//2.1接收服务器返回的汽车类型
					if (data.length != 0) {
						//2.2解析汽车类型的数据，填充到车轮类型的下拉框中
						wheeltypeSelect.html("");
						$("<option value=''>请选择车轮类型</option>").appendTo(wheeltypeSelect);
						for (var i = 0; i < data.length; i++) {
							$("<option value='" + data[i] + "'>" + data[i] + "</option>").appendTo(wheeltypeSelect);
						}
						//2.2.1车轮类型的下拉框显示出
						wheeltypeSelect.parent().show();
						//2.2.2第二个下拉框后面的指示图片显示出来
						cartypeSelect.next().show();
					} else {
						//2.3没有任何汽车类型的数据		
						wheeltypeSelect.parent().hide();
						cartypeSelect.next().hide();
					}
					cartypeSelect.data(cartypeValue, data);
				}, "json");
			} else {
				var data = cartypeSelect.data(cartypeValue);
				//2.1接收服务器返回的汽车类型
				if (data.length != 0) {
					//2.2解析汽车类型的数据，填充到车轮类型的下拉框中
					wheeltypeSelect.html("");
					$("<option value=''>请选择车轮类型</option>").appendTo(wheeltypeSelect);
					for (var i = 0; i < data.length; i++) {
						$("<option value='" + data[i] + "'>" + data[i] + "</option>").appendTo(wheeltypeSelect);
					}
					//2.2.1车轮类型的下拉框显示出
					wheeltypeSelect.parent().show();
					//2.2.2第二个下拉框后面的指示图片显示出来
					cartypeSelect.next().show();
				} else {
					//2.3没有任何汽车类型的数据		
					wheeltypeSelect.parent().hide();
					cartypeSelect.next().hide();
				}
			}
		} else {
			//3.如果值为空，那么第三个下拉框所在span要隐藏起来，第二个下拉框后面的指示图片也要隐藏
			wheeltypeSelect.parent().hide();
			cartypeSelect.next().hide();
		}
	});

	wheeltypeSelect.change(function(){
		//1.获取车轮类型
		var wheeltypeValue = $(this).val();
		//2.根据汽车厂商名称，汽车型号和车轮类型得到汽车图片的文件名
		var carnameValue = carnameSelect.val();
		var cartypeValue = cartypeSelect.val();
		var carimgname = carnameValue + "_" + cartypeValue + "_" + wheeltypeValue + ".jpg";

		//3.显示出loading的图片
		carimg.hide();
		$(".carloading").show();
		//4.通过Javascript中的Image对象预装载图片
		var cacheimg = new Image();
		$(cacheimg).attr("src","images/" + carimgname).load(function(){
			//隐藏loading图片
			$(".carloading").hide();
			//显示汽车图片
			carimg.attr("src","images/" + carimgname).show();
		});
		//3.修改汽车图片节点的src的值，让汽车图片显示出来
		//carimg.attr("src","images/" + carimgname).show();
		//4.使汽车图片的节点显示出来
	});


	//给数据装载中的节点定义ajax事件，实现动画提示效果
	$(".loading").ajaxStart(function(){
		$(this).css("visibility","visible");
		$(this).animate({
			opacity: 1
		},0);
	}).ajaxStop(function(){
		$(this).animate({
			opacity: 0
		},500);
	});
})
