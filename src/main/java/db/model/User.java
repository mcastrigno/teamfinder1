package db.model;

import lombok.Data;

import javax.persistence.*;


@Data
@Entity
public class User {

    @Id
    private String username;

    @Column
    private String password;

    @Column
    private boolean active;

    @Column
    private String role;
}
