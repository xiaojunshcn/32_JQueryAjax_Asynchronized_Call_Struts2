package com.joe.jquery.action;

import java.util.ArrayList;
import java.util.List;

import com.joe.jquery.service.UserService;
import com.joe.jquery.vo.UserVO;
import com.opensymphony.xwork2.ActionSupport;

public class UserAction extends ActionSupport {
	UserService us = new UserService();

	public String inputUser() {
		return "INPUT_USER";
	}

	public String queryHello() {
		this.hello = "hello world";
		return "hel";
	}

	public String loadUserInfo() {
		userInfo = new UserVO();
		userInfo.setId(3);
		userInfo.setName("name1");
		return "userInfo";
	}

	public String loadUserInfoList() {
		userList = new ArrayList<UserVO>();

		UserVO u1 = new UserVO();
		u1.setId(1);
		u1.setName("name1");

		UserVO u2 = new UserVO();
		u2.setId(2);
		u2.setName("name2");

		UserVO u3 = new UserVO();
		u3.setId(3);
		u3.setName("name3");

		userList.add(u1);
		userList.add(u2);
		userList.add(u3);
		return "userInfoList";
	}

	public String addUser() {
		/*
		 * userInfo = new UserInfo(); userInfo.setId(7);
		 * userInfo.setName("name7");
		 */

		// when it is asynchronizes to submit json format data, must serialize
		// form in js first
		// var params = $("subUserForm").serialize();
		us.addUser(userInfo);

		userList = us.getUser();
		return "ADD_SUCCESS";
	}

	public String loadAllUser() {
		userList = us.getUser();
		return "USER";
	}

	public String getHello() {
		return hello;
	}

	public void setHello(String hello) {
		this.hello = hello;
	}

	public List<UserVO> getUserList() {
		return userList;
	}

	public void setUserList(List<UserVO> userList) {
		this.userList = userList;
	}

	public UserVO getUserInfo() {
		return userInfo;
	}

	public void setUserInfo(UserVO userInfo) {
		this.userInfo = userInfo;
	}

	private String hello;
	private UserVO userInfo;
	private List<UserVO> userList;

}
