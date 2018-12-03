const express = require("express");
const router = express.Router();

// HOMEPAGE RENDER
router.get("/", (req, res)=>{
    res.render("homePage");
});

router.get("/sign_in", (req,res)=>{
    res.render("signIn");
})

router.post("/sign_in", (req, res) =>{
    const username = req.body.username;
    res.cookie("username", username);
    res.redirect("/index");
})

module.exports = router;