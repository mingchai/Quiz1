const express = require("express");
const router = express.Router();
const knex = require("../db/client");

// RENDER THE NEW CLUCK PAGE
router.get("/cluck", (req,res)=>{
    res.render("./clucks/newCluck");
})

// SUBMIT THE CLUCK TO THE DB
router.post("/cluck", (req, res) =>{
const content = req.body.content;
const image_url = req.body.image;

const newCluck = {
    content,
    image_url
};

knex("cluckrtable").insert(newCluck).returning('*').then( ()=>{
    res.redirect("/index");
})
});

router.get("/index", (req, res)=>{
    knex.select("*").from("cluckrtable").orderBy("createdAt").then(noteDataArr =>{

        res.render("./clucks/cluckIndex", {noteDataArr});
    })
    
})

module.exports = router;