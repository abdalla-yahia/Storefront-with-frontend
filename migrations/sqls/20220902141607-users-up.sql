
CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(250) NOT NULL,
        email VARCHAR (60) UNIQUE,
        password VARCHAR(200) NOT NULL
                    );
