package db.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;


@Data
@Entity
public class Entry {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column
    private Integer duration;

    @Column
    private String category;

    @Column
    private String subcategory;

    @Column
    private Date day;

    @Column
    private String username;
}
