$(document).ready(
		function() {
			$("#btnGetUsers").click(function() {
				$.ajax({
					url : 'xmlType/userXmlAction.action',
					type : 'POST',
					data : "",
					dataType : 'xml',
					success : function(data) {
						//alert(data);  
						$(data).find("user").each(function(){                              
							var userId=$(this).children("id").text();         
							var userName=$(this).children("name").text();
							
							$('<input type="radio" value="' + userId + '">' + userName + "</input>").appendTo($("#usersResult"));
						});
					}
				});
			});
});