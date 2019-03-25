package db.dao;

import org.springframework.data.repository.CrudRepository;

import db.model.Entry;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface EntryRepository extends CrudRepository<Entry, Integer> {
    List<Entry> getAllByDayGreaterThanEqualAndUsernameOrderByDayDesc(Date after, String username);
}
