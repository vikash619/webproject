const express = require("express");
const path = require("path");
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 4000; /*esa krne se check krta hai koi pehle se to nhi h es port pr..agar hai to ye apne se kuch aur lga dega */



// Public static path
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialsPath);


// console.log(`${__dirname}`)
app.set("view engine", 'hbs');
app.set('views', templatePath);

app.use(express.static(staticPath));
// console.log(staticPath);



//Routing
app.get("/",(req, res) =>{
    res.render('index');
});

app.get("/about",(req, res) =>{
    res.render('about');
});

app.get("/weather",(req, res) =>{
    res.render('weather');
});

app.get("*", (req,res) =>{
    res.render("404error", {
        fname: "vikash"
    });
});

app.listen(port, () =>{
    console.log(`listening to ${port}`);
})