const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");
const port = 2500;

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));

let productos = [
    { nombre: "tomate", tipo: "fruta", precio: "$50", stock: "true", ruta: "/img/tomate.jpg"},
    { nombre: "papa", tipo: "verdura", precio: "$20", stock: "false", ruta: "/img/papas.jpg" },
    { nombre: "espinaca", tipo: "verdura", precio: "$15", stock: "true" , ruta: "/img/espinaca.jpg"},
    { nombre: "uva", tipo: "fruta", precio: "$200", stock: "true", ruta: "/img/uvas.jpg" },
    { nombre: "lechuga", tipo: "verdura", precio: "$150", stock: "false", ruta: "/img/lechuga.jpg" },
    { nombre: "sandia", tipo: "fruta", precio: "$100", stock: "true", ruta: "/img/sandia.jpg" },
    { nombre: "manzana", tipo: "fruta", precio: "$85", stock: "true", ruta: "/img/manzana.jpg" },
    { nombre: "pera", tipo: "fruta", precio: "$40", stock: "false" , ruta: "/img/pera.jpg"},
    { nombre: "palta", tipo: "verdura", precio: "$77", stock: "true" , ruta: "/img/palta.jpg"}
];

let p =  [1,2,3,4,5];

let largo = productos.length;

app.get("/verduleria", (req, res) => {
    res.render("index", { productos: productos, largo: largo });
    //res.render("pruebas", { p : p});
});

app.listen(port, () => {
    console.log("hi");
});
