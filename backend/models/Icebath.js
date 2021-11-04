const mongoose = require("mongoose");

const IcebathSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    physicalActivityBefore: { type: Boolean, required: true },
    waterTemperature: { type: Number, required: true },
    timeInWater: { type: Number, required: true },
    temperatureOutside: { type: Number, required: true },
    weather: { type: String, required: true },
    wind: { type: String, required: true },
    recoveryTime: { type: Number, required: true },
    stressDuringRecovery: { type: String, required: true },
    globalFeeling: { type: String, required: true },
    commentary: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Icebath", IcebathSchema);
