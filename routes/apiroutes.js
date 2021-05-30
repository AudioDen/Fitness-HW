const db = require("../models")

module.exports = app => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(data => {
        res.json(data)
      })
  })

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(data => {
        res.json(data)
      })
  })

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then(newEntry => {
        res.json(newEntry)
      })
  })

  app.put("/api/workouts/:id", (req, res) => {
    let idToUpdate = req.params.id;
    let data = req.body;

    db.Workout.findByIdAndUpdate({_id: idToUpdate}, {
      $push: {exercises: data}
    }).then(updated => {
      res.json(updated)
    })
  })
}