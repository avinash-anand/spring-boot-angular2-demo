package com.example.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.models.Greeting;

@RestController
@RequestMapping("/api")
public class DemoController {
	
	@RequestMapping("/greeting")
	public @ResponseBody Greeting greeting() {
		return new Greeting(1, "Hello");
	}
	
}
