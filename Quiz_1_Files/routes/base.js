const express = require("express");
const router = express.Router();

// HOMEPAGE RENDER
router.get("/", (req, res)=>{
    res.render("homePage");
});

module.exports = router;