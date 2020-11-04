const express = require("express)")
const PORT = process.env.PORT || 8080
const app = express()
const exhbs = require("express-handlebars")
// const routes = require("./controllers/burgerController.js")

app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(routes)




app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});