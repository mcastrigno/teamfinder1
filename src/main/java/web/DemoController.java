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

    @GetMapping("/login")
    public String login_container() {
        return "views/login_container.html";
    }

    @GetMapping("/profile")
    public String profile() {
    return "views/profile.html";
    }

    @GetMapping("/group")
    public String group() {
        return "views/group.html";
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
            user.setActive(true);
            userRepository.save(user);
        }
        return "redirect:/login";
    }
}
