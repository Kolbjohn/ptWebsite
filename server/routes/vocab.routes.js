module.exports = app => {
    const vocab = require("../controllers/vocab.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", vocab.create);
  
    // Retrieve all Tutorials
    router.get("/", vocab.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", vocab.search);
  
    // Update a Tutorial with id
    router.put("/:id", vocab.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", vocab.delete);
  
    app.use('/vocab', router);
  };