package in.anubhav;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class RestapiApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestapiApplication.class, args);
	}

	@GetMapping("/testing")
	public  String gettesting(String[] args) {
		//return "<h1>response coming from backend boot project</h1>";
		return "<br/><br/><br/><br/><br/><br/><br/><h1 style=\"color:red; text-align:center;\">Response coming from Backend Spring Boot Project-JITENDRA</h1>";
	}
	
}
