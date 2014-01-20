$(document).ready(
		function() {
			$("#msg").click(function() {
				$.ajax({
					//this commented url also is a valid one
					//url : '/JqueryAjaxWithStruts2/json/input_user!queryHello',
					url : 'json/input_user!queryHello',
					type : 'POST',
					data : "{}",
					dataType : 'json',
					success : function(data) {
						$("#allUser").html("queryHello method response:");
						$("#allUser").append("output:id:" + data.hello);
					}
				});
				/*
				 * $.getJSON("/test/input_user!queryHello", function (data) {
				 * //use.operation to retrieve hello attribute from action class.
				 * $("#allUser").html("output: " + data.hello); });
				 */
			});

			$("#msgUserInfo").click(
					function() {
						$.ajax({
							//this commented url also is a valid one
							//url : '/JqueryAjaxWithStruts2/json/userInfo!loadUserInfo',
							url : 'json/userInfo!loadUserInfo',
							type : 'post',
							data : "{}",
							dataType : 'json',
							success : function(data) {
								$("#allUser").html("loadUserInfo method response:");
								$("#allUser")
										.append(
												"<div>output:id:"
														+ data.userInfo.id
														+ ", name: "
														+ data.userInfo.name
														+ "</div>");
							}
						});
					});

			$("#msgUserInfoList").click(
					function() {
						$.ajax({
							//this commented url also is a valid one
							//url : '/JqueryAjaxWithStruts2/json/userInfoList.action',
							url : 'json/userInfoList.action',
							type : 'post',
							data : "{}",
							dataType : 'json',
							success : function(data) {
								$("#allUser").html("userInfoList method response:");
								/*
								 * $.each(data.userList, function(i, value){
								 * $("#allUser").append("<div>output:id:"+value.id+",
								 * name: "+value.name+"</div>"); });
								 */
								$(data.userList).each(
										function(i, value) {
											$("#allUser").append(
													"<div>output:id:" + value.id
															+ ", name: "
															+ value.name
															+ "</div>");
										});

							}
						});
					});

			$("#addUser").click(
					function() {
						//must call serialize() method first for the data in the form
						var params = $("#subUserForm").serialize();
						$.ajax({
							//this commented url also is a valid one
							//url : '/JqueryAjaxWithStruts2/json/add_user.action',
							url : 'json/add_user.action',
							type : 'post',
							data : params,
							dataType : 'json',
							success : function(data) {
								$("#allUser").html("add_user method response:");
								/*
								 * $.each(data.userList, function(i, value){
								 * $("#allUser").append("<div>output:id:"+value.id+",
								 * name: "+value.name+"</div>"); });
								 */
								$(data.userList).each(
										function(i, value) {
											$("#allUser").append(
													"<div>output: id:" + value.id
															+ ", name: "
															+ value.name
															+ "</div>");
										});

							}
						});
					});

			$("#users").click(
					function() {
						$.ajax({
							//this commented url also is a valid one
							//url : '/JqueryAjaxWithStruts2/json/load_allUser.action',
							url : 'json/load_allUser.action',
							type : 'post',
							data : "{}",
							dataType : 'json',
							success : function(data) {
								$("#allUser").html("load_allUser method response:");
								/*$.each(data.userList, function (i, value) { 
								 $("#allUser").append("<div>output:id:" + value.id + ", name: " + value.name + "</div>"); 
								 });*/
								$(data.userList).each(
										function(i, value) {
											$("#allUser").append(
													"<div>output:id:" + value.id
															+ ", name: "
															+ value.name
															+ "</div>");
										});

							}
						});
					});
});