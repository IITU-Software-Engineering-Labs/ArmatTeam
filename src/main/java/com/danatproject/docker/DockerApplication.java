package com.danatproject.docker;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class DockerApplication {
	public static void main(String[] args) {
		SpringApplication.run(DockerApplication.class, args);
	}
}

@RestController
class GreetingController {
	@Value("${GREETING:Hello}")
	private String greeting;

	@GetMapping("/greet")
	public String greet() {
		return greeting + ", Docker!";
	}
}
