const express = require("express");
const fs = require("fs");


const pageRouter = express.Router();

//###################
//# PAGE REDIRECTOR #
//###################

pageRouter.get("/", async(req,res) =>{

    //example of how can be implemented new routes
    res.render("index");
});

pageRouter.get("/games", async(req,res) =>{

    //example of how can be implemented new routes
    res.render("games");
});


pageRouter.get("/test", async(req,res) =>{

    res.render("test");
});

//MUST be the last route
pageRouter.get("*", async(req,res) =>{

    res.render("404");
});

//###################
//# ROUTES FOR DATA #
//###################

pageRouter.get("/", async(req,res) =>{

    //example of how can be implemented new routes
    //res.render("index");
});



//always at the end of the page
module.exports = pageRouter;