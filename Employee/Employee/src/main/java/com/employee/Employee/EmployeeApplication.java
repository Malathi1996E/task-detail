package com.employee.Employee;

import jakarta.servlet.annotation.MultipartConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@MultipartConfig
@EnableWebMvc
public class EmployeeApplication<CommonsMultipartResolver> {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeApplication.class, args);
	}

}
