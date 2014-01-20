package com.joe.jquery.action;

import java.util.ArrayList;
import java.util.List;

//import net.sf.json.JSONArray;
//
//import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class ChainSelectAction extends ActionSupport {

	private String keyword;
	private String type;
	public String getKeyword() {
		return keyword;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	private List<String> carTypes;
	public List<String> getCarTypes() {
		return carTypes;
	}
	public void setCarTypes(List<String> carTypes) {
		this.carTypes = carTypes;
	}
	
	private List<String> wheelTypes;
	
	public List<String> getWheelTypes() {
		return wheelTypes;
	}
	public void setWheelTypes(List<String> wheelTypes) {
		this.wheelTypes = wheelTypes;
	}
	public String chainSelected() {
		System.out.println("keyword:" + keyword);	//BMW
		//top means the first drop down is changed, sub means the second dropdown list is changed
		System.out.println("type:" + type);
		
		
		if ("top".equals(type)) {
			carTypes = new ArrayList<String>();
			if ("BMW".equals(keyword)) {
				carTypes.add("6ercupe");
				carTypes.add("316ti");
			} else if ("Audi".equals(keyword)) {
				carTypes.add("tt");
			} else if ("VW".equals(keyword)) {
				carTypes.add("Golf4");
			}
		} else if ("sub".equals(type)) {
			wheelTypes = new ArrayList<String>();
			if ("6ercupe".equals(keyword)) {
				wheelTypes.add("rha");
				wheelTypes.add("rhb");
				wheelTypes.add("rhc");
			} else if ("316ti".equals(keyword)) {
				wheelTypes.add("rha");
				wheelTypes.add("rhb");
			} else if ("tt".equals(keyword)) {
				wheelTypes.add("rha");
				wheelTypes.add("rhb");
				wheelTypes.add("rhc");
			} else if ("Golf4".equals(keyword)) {
				wheelTypes.add("rha");
				wheelTypes.add("rhb");
			}
		}
		//System.out.println("carTypes.size():" + carTypes.size());
		return "SUCCESS";
	}
}
