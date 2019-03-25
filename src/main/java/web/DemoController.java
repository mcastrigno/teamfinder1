package web;

import db.dao.UserRepository;
import db.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class DemoController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @RequestMapping("/")
    public String root() {
        return "views/index.html";
    }

    @RequestMapping("/buttons")
    public String buttons() {
        return "views/buttons.html";
    }

    @RequestMapping("/results")
    public String results() {
        return "views/results.html";
    }

    @GetMapping("/login")
    public String login() {
        return "views/login.html";
    }

    @GetMapping("/register")
    public String register() {
        return "views/register.html";
    }

    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public String createUser(@RequestParam String username, @RequestParam String password) {
        if (userRepository.findByUsername(username) == null) {
            User user = new User();
            user.setUsername(username);
            user.setPassword(passwordEncoder.encode(password));
            userRepository.save(user);
        }
        return "redirect:/login";
    }
}
