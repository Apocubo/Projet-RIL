CREATE TABLE ConnectedCitizen(
       id INT PRIMARY KEY AUTO_INCREMENT,
       numeroSS INT,
       matricule VARCHAR(50),
       pseudo VARCHAR(60),
       lastname VARCHAR(60),
       prename VARCHAR(60),
       email varchar(255),
       birth_date VARCHAR(10),
       pass_word VARCHAR(255),
       token VARCHAR(255),
       created_at TIMESTAMP,
       updated_at TIMESTAMP,
       deleted_at TIMESTAMP,
       PRIMARY KEY (id),
);

CREATE TABLE Roles(
       id INT PRIMARY KEY AUTO_INCREMENT,
       name_Role VARCHAR(50),
       created_at TIMESTAMP,
       updated_at TIMESTAMP,
       deleted_at TIMESTAMP,
);

CREATE TABLE Personnals(
       id INT PRIMARY KEY AUTO_INCREMENT,
       matricule VARCHAR(50),
       pseudo VARCHAR(60),
       n_role INT,
       created_at TIMESTAMP,
       updated_at TIMESTAMP,
       deleted_at TIMESTAMP,
       PRIMARY KEY (id)
       FOREIGN KEY (n_role) REFERENCES Roles(id)

);

INSERT INTO ConnectedCitizen(
       numeroSS,
       matricule, 
       pseudo,
       lastname,
       prename,
       email,
       birth_date,
       pass_word,
       token,
       created_at,
       updated_at,
       deleted_at       
       )
VALUES(
       12345678998754,
       "testperso"
       "pseudo",
       "lucas",
       "dupont",
       "lucas.dupont@gmail.com",
       "01/10/1990",
       "",
       ""
       "",
       "",
       "",
);

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';

flush privileges;
