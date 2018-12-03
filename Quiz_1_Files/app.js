const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const path = require("path");
const app = express();

app.use(logger("dev"));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride((req,res)=>{
    if(req.body && req.body._method){
        const method = req.body._method;
        return method;
        }
    })
);

const baseRouter = require("./routes/base");
app.use("/", baseRouter);

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