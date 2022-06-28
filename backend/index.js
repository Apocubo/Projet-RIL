const mysql = require("mysql");
let express = require('express');

let bodyParser = require("body-parser");
const app = express();
var crypto = require('crypto');

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
  var password = crypto.createHash('sha256').update(req.body.password).digest('hex');

  connection.query('SELECT * FROM users WHERE email = "' + req.body.email + '" AND password = "' + password + '"', (err, rows) => {
    if (err) {
      res.send({
        object: {
          "email": req.body.email,
          "password": password,
        },
        result: err,
        success: false
      })

    } else {
      res.send({
        object: {
          "email": req.body.email,
          "password": password,
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
  var password = crypto.createHash('sha256').update(req.body.password).digest('hex');
  connection.query("SELECT number_ss FROM users WHERE number_ss =" + req.body.numberSS, (err, rows_verif) => {
    if (err) {
      res.send({
        result: err,
        success: false
      })

    } else {
      if (rows_verif == null || rows_verif == [] || rows_verif == "") {
        console.log("Le numéro de Sécurité Sociale n'existe pas");
        connection.query("INSERT INTO users (number_ss, pseudo, lastname, firstname, email, date_of_birth, password, token, created_at, updated_at, deleted_at, role_id) VALUES (" + req.body.numberSS + "," + req.body.pseudo + "," + req.body.lastname + "," + req.body.firstname + "," + req.body.email + "," + req.body.date_of_birth + ",'" + password + "'," + req.body.token + "," + null + "," + null + "," + null + ",3)", (err, rows) => {
          if (err) {
            res.send({
              result: err,
              success: false
            })

          } else {
            res.send({
              message: "le numero securité social est accepté car pas de doublon",
              object: {
                "numberSS": req.body.numberSS,
                "pseudo": req.body.pseudo,
                "lastname": req.body.lastname,
                "firstname": req.body.firstname,
                "email": req.body.email,
                "date_of_birth": req.body.date_of_birth,
                "password": password,
                "token": req.body.token,
              },
              result: rows,
              success: true
            })
          }
        });
      }
      else{
        res.send({
          message: "le numero securité social n'est pas accepté",
        })
      }


    }
    
  })


});




//Input : Nothing (parameters in post body request)
//Method : get
//Description : Route permits to return data from one ressource
app.get("/api/getRessourcebyID/id/:id", (req, res) => {
  connection.query("SELECT * FROM ressources WHERE id = " + req.params.id + ")", (err, rows) => {
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

//Input : Nothing (parameters in post body request)
//Method : post
//Description : Route permits the creation of an user
app.post("/api/CreateRole", (req, res) => {
  connection.query("INSERT INTO roles (id, role_name, description, created_at, updated_at, deleted_at) VALUES (" + req.body.id + "," + toString(req.body.role_name) + "," + toString(req.body.description) + "," + null + "," + null + "," + null + ")", (err, rows) => {
    if (err) {
      res.send({
        result: err,
        success: false
      })

    } else {
      res.send({
        object: {
          "id": req.body.id,
          "role_name": req.body.role_name,
          "description": req.body.description,
        },
        result: rows,
        success: true
      })
    }
  });

});


app.listen(5000, () => console.log('listining on port 5000'));
