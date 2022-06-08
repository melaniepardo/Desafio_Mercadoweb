const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const fs = require("fs")
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
app.engine(
    "handlebars",
    exphbs.engine({
        layoutsDir: __dirname + "/views",
        partialsDir: __dirname + "/views/componentes/",
    })
);

app.use("/assets", express.static('assets/imgs'))

app.set("view engine", "handlebars");//define una configuración para ser utilizada por Express
app.use("/css", express.static(__dirname +
    "/node_modules/bootstrap/dist/css"));

app.use("/assets",express.static("assets"));
app.get("/", function (req, res) {
    res.render("main", { layout: "main" });
});

app.get("/Productos", function (req, res) {
    // Paso 2
    res.render("Main", {
        layout: "Main",
        productos: ["banana",
            "cebollas",
            "lechuga",
            "papas",
            "pimenton",
            "tomate"],
    });
});
