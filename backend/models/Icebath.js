const mongoose = require("mongoose");

const IcebathSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    // before icebath
    onAnEmptyStomach: { type: Boolean, required: true },
    hoursOfSleep: { type: Number, required: true },
    physicalActivityBefore: { type: Boolean, required: true },
    beforeBathCommentary: { type: String },
    // during icebath
    waterTemperature: { type: Number, required: true },
    timeInWater: { type: Number, required: true },
    globalFeeling: { type: String, required: true },
    duringBathCommentary: { type: String },
    // weather
    temperatureOutside: { type: Number, required: true },
    weather: { type: String, required: true },
    wind: { type: String, required: true },
    weatherCommentary: { type: String },
    // after icebath
    recoveryTime: { type: Number, required: true },
    hotDrink: { type: Boolean, required: true },
    stressDuringRecovery: { type: String, required: true },
    afterBathCommentary: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Icebath", IcebathSchema);
