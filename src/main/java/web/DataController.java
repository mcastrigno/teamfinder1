package web;

import db.dao.EntryRepository;
import db.model.Entry;
import db.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextImpl;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Controller
public class DataController {

    private EntryRepository entryRepository;

    @Autowired
    public DataController(EntryRepository entryRepository) {
        this.entryRepository = entryRepository;
    }

    @PostMapping(value = "/entry/save")
    @ResponseBody
    public String saveEntry(@RequestParam int duration, @RequestParam Date day, @RequestParam String category, @RequestParam String subCategory, HttpSession session) {
        System.out.println("duration: " + duration + ", date: " + day + ", category: " + category + ", subCategory: " + subCategory);
        SecurityContextImpl security = (SecurityContextImpl) session.getAttribute("SPRING_SECURITY_CONTEXT");
        UserDetails user = (UserDetails) security.getAuthentication().getPrincipal();
        String username = user.getUsername();
        Entry entry = new Entry();
        entry.setDuration(duration);
        entry.setCategory(category);
        entry.setSubcategory(subCategory);
        entry.setDay(day);
        entry.setUsername(username);
        entryRepository.save(entry);
        return "Entry saved!";
    }

    @GetMapping(value = "/entry/getAllAfter")
    @ResponseBody
    public List<Entry> getAllEntriesAfter(@RequestParam String dateString, HttpSession session) throws ParseException {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        SecurityContextImpl security = (SecurityContextImpl) session.getAttribute("SPRING_SECURITY_CONTEXT");
        UserDetails user = (UserDetails) security.getAuthentication().getPrincipal();
        String username = user.getUsername();
        return entryRepository.getAllByDayGreaterThanEqualAndUsernameOrderByDayDesc(dateFormat.parse(dateString), username);
    }
}
