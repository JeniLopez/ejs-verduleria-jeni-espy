const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");
const port = 2500;

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let productos = [
    { nombre: "tomate", tipo: "fruta", precio: "$50", stock: "true" },
    { nombre: "papa", tipo: "verdura", precio: "$20", stock: "false" },
    { nombre: "espinaca", tipo: "verdura", precio: "$15", stock: "true" },
    { nombre: "uva", tipo: "fruta", precio: "$200", stock: "true" },
    { nombre: "frutilla", tipo: "fruta", precio: "$150", stock: "false" },
    { nombre: "sandia", tipo: "fruta", precio: "$100", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "$85", stock: "true" },
    { nombre: "pera", tipo: "fruta", precio: "$40", stock: "false" },
    { nombre: "palta", tipo: "verdura", precio: "$77", stock: "true" },
];

app.get("/verduleria", (req, res) => {
    // res.render("index", { productos: productos });
    res.render("index", productos);
});

app.listen(port, () => {
    console.log("hi");
});
