package com.joe.jquery.action;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts2.ServletActionContext;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class UserXmlAction extends ActionSupport {

	public String execute() throws  IOException {
		ActionContext ctx = ActionContext.getContext();        
//		HttpServletRequest request = (HttpServletRequest)ctx.get(ServletActionContext.HTTP_REQUEST);        
		HttpServletResponse response = (HttpServletResponse)ctx.get(ServletActionContext.HTTP_RESPONSE);        
		
		response.setContentType("text/xml;charset=utf-8"); //（1）一定要在（2）的前面，不然会乱码  
		response.setCharacterEncoding("UTF-8"); //（2）  
		response.setHeader("Cache-Control", "no-cache");   
		PrintWriter out=response.getWriter();         //（3）一定要在（1）（2）的后面  
		
		StringBuilder sb=new StringBuilder();  
		sb.append("<?xml version='1.0' encoding='UTF-8'?><users>");//最外层节点唯一，不然报错  

		sb.append("<user><id>1</id><name>abc</name></user>");
		sb.append("<user><id>2</id><name>xyz</name></user>");  
		sb.append("</users>");  
		out.print(sb.toString());  
		out.flush();  
		out.close();

		return "success";
	}
}
