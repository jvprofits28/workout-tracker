const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workOutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      name: {
        type: true,
        trim: true,
        required: "please enter an exercise",
      },
      type: {
        type: String,
        trim: true,
        required: "please enter an exercise type",
      },
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
        required: "please enter exercise duration",
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
    },
  ],
});
const Workout = mongoose.model("workout", WorkoutSchema);

// Export workout model
module.exports = Workout;
