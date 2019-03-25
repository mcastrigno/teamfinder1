package db.dao;

import db.model.Entry;
import db.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, String> {
    User findByUsername(String username);
}
