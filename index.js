'use strict';

const express = require("express");
const app = express();
const port = 8500;
const handlebars = require("express-handlebars");


require('./conexion');

app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
    partialsDir: __dirname + "/views/partials/",
  })
);

app.use(express.static("public"));

        app.use(express.json());
        app.use(express.urlencoded({extended:false}));


       

app.get("/", (req, res) => {
  res.render("inicio", {layout: "principal"});
});

app.get("/98.css", (req, res) => {
  res.render("juego", { layout: "secundaria" });
});

app.get("/98.css2", (req, res) => {
  res.render("juego2", { layout: "secundaria" });
});

app.get("/98.css3", (req, res) => {
    res.render("juego3", { layout: "secundaria" });
});

app.get("/yo", (req, res) => {
    res.render("yo", { layout: "secundaria" });
});



app.listen(port, () => console.log(`App listening to port ${port}`));


