module.exports = app => {
    const exercises = require("../controllers/exercise.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", exercises.create);
  
    // Retrieve all Tutorials
    router.get("/", exercises.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", exercises.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", exercises.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", exercises.delete);
  
    app.use('/exercises', router);
  };