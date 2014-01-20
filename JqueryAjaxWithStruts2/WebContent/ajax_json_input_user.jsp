<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>ajax post with json type</title>
	<script type="text/javascript" src="./js/jquery-1.7.1.js"></script>  
	<script type="text/javascript" src="./js/joeTestAjax.js"></script>  
</head>
<body>
	<div>
		Please input a user:
	</div>
	<div>
		<form id="subUserForm">
			<input type="text" name="userInfo.id" id="id"/>
			<input type="text" name="userInfo.name" id="name"/>
		</form>
	</div>
	<div>
		<input id="addUser" type="button" value="Add a user"/>
		<input id="users" type="button" value="1: List All users"/>
		<a href="json/load_allUser.action">List All users: forward to a new page</a>
		<input id="msg" type="button" value="2: hello"/>
		<input id="msgUserInfo" type="button" value="3: load a user vo"/>
		<input id="msgUserInfoList" type="button" value="userInfoList"/>
	</div>  
	<div id="allUser">
	input_user:  
	</div> 
</body>
</html>