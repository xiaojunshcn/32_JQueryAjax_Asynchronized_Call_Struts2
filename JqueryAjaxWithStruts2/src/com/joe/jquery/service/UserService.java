package com.joe.jquery.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.joe.jquery.util.DBProcessor;
import com.joe.jquery.vo.UserVO;

public class UserService {
	public List<UserVO> getUser() {
		Connection conn = DBProcessor.createConnection();
		String sql = "select * from tb_user";

		UserVO userVO = null;
		List<UserVO> users = new ArrayList<UserVO>();
		try {
			PreparedStatement ps = DBProcessor.prepare(conn, sql);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				userVO = new UserVO();
				userVO.setId(rs.getInt("id"));
				userVO.setName(rs.getString("name"));
				users.add(userVO);
			}
			DBProcessor.close(rs);
			DBProcessor.close(ps);
			DBProcessor.close(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return users;
	}

	public void addUser(UserVO userVO) {
		Connection conn = DBProcessor.createConnection();
		String sql = "insert into tb_user (id, name) values(?,?)";

		try {
			PreparedStatement ps = DBProcessor.prepare(conn, sql);
			ps.setInt(1, userVO.getId());
			ps.setString(2, userVO.getName());
			ps.executeUpdate();

			DBProcessor.close(ps);
			DBProcessor.close(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
