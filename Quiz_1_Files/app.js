const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const path = require("path");
const app = express();

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
// app.use("/css", express.static(path.join(__dirname, "bootstrap-4.1.3/dist/css"))); // was going to install bootstrap in the file, but decided against it. Currently using static versions of bootstrap scripts and css (see public folder)
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
// CUSTOM MIDDLEWARE TO USE USERNAME
app.use((req,res, next)=>{
    const username = req.cookies.username;
    
    res.locals.username = "";
    if(username){
        res.locals.username = username;
        console.log(`${username} has signed in`);
    }
    next();
})
app.use(methodOverride((req,res)=>{
    if(req.body && req.body._method){
        const method = req.body._method;
        return method;
        }
    })
);

const baseRouter = require("./routes/base");
app.use("/", baseRouter);

const cluckRouter = require("./routes/clucks");
app.use("/", cluckRouter);

// SERVER
const PORT = 5215;
const HOST = 'localhost';
app.listen(PORT, HOST,(err) =>{
    if(err){
        console.error(err);
    } else {
        console.log(`Server is now listening at http://${HOST}:${PORT}`);
    }
});