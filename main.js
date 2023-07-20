const express = require("express");
const app = express();
port = 5000;

//Static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/imgs", express.static(__dirname + "public/imgs"));
app.use("/json", express.static(__dirname + "public/json"));

//templating Engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

//Routes
const pageRoutes = require("./src/routes/routes");

//"Main" page route
app.use("/", pageRoutes);

//listen on port 5000
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`));