const mysql = require("mysql");
let express = require('express');
let bodyParser = require("body-parser");
const app = express();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  port: process.env.MYSQL_PORT || "3306",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "password",
  database: process.env.MYSQL_DATABASE || "mybd",
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());




//Input : Nothing (parameters in post body request)
//Method : post
//Description : Route permits the connexion of an user
app.post("/api/getConnexion", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
  connection.query('SELECT * FROM users WHERE email = "' + req.body.email + '" AND password = "' + req.body.password + '"', (err, rows) => {
    if (err) {
      res.send({
        object: {
          "email": req.body.email,
          "password": req.body.password,
        },
        result: err,
        success: false
      })

    } else {
      res.send({
        object: {
          "email": req.body.email,
          "password": req.body.password,
        },
        result: rows,
        success: true
      })
    }
  });
});

//Input : Nothing (parameters in post body request)
//Method : post
//Description : Route permits the creation of an user
app.post("/api/getInscription", (req, res) => {
  const created_at = Date.now();
  const updated_at = Date.now();
  const deleted_at = Date.now();
  connection.query("INSERT INTO users (numberSS, pseudo, lastname, firstname, email, date_of_birth, password, token, created_at, updated_at, deleted_at) VALUES (" + req.body.numberSS + "," + req.body.pseudo + "," + req.body.lastname + "," + req.body.firstname + "," + req.body.email + "," + req.body.date_of_birth + "," + req.body.password + "," + req.body.token + "," + created_at + "," + updated_at + "," + deleted_at, (err, rows) => {
    if (err) {
      res.send({
        object: {
          "numberSS": req.body.numberSS,
          "pseudo": req.body.pseudo,
          "lastname": req.body.lastname,
          "firstname": req.body.firstname,
          "email": req.body.email,
          "date_of_birth": req.body.date_of_birth,
          "password": req.body.password,
          "token": req.body.token,
          "created_at": created_at,
          "updated_at": updated_at,
          "deleted_at": deleted_at,

        },
        result: err,
        success: false
      })

    } else {
      res.send({
        object: {
          "numberSS": req.body.numberSS,
          "pseudo": req.body.pseudo,
          "lastname": req.body.lastname,
          "firstname": req.body.firstname,
          "email": req.body.email,
          "date_of_birth": req.body.date_of_birth,
          "password": req.body.password,
          "token": req.body.token,
          "created_at": created_at,
          "updated_at": updated_at,
          "deleted_at": deleted_at,

        },
        result: rows,
        success: true
      })
    }
  });

});


//Input : Nothing (parameters in post body request)
//Method : get
//Description : Route permits to return data from one ressource
app.get("/api/getRessourcebyID/id/:id", (req, res) => {
  connection.query("SELECT * FROM ressources WHERE id = " + req.params.id + ")", (err, rows) => {
    if (err) {
      res.send({
        object: {
          "id": req.params.id,
        },
        result: err,
        success: false
      })

    } else {
      res.send({
        object: {
          "id": req.params.id,
        },
        result: rows,
        success: true
      })
    }
  });
});


//Input : Nothing (parameters in post body request)
//Method : get
//Description : Route permits to return data from one ressource
app.get("/api/getAllRessources/", (req, res) => {
  connection.query("SELECT * FROM ressources", (err, rows) => {
    if (err) {
      res.send({
        result: err,
        success: false
      })

    } else {
      res.send({
        object: {
          "id": req.params.id,
        },
        result: rows,
        success: true
      })
    }
  });
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM Student", (err, rows) => {
    if (err) {
      res.json({
        success: false,
        err,
      });
    } else {
      res.json({
        success: true,
        rows,
      });
    }
  });
});

app.listen(5000, () => console.log('listining on port 5000'));
