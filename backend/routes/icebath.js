const express = require("express");

const router = express.Router();

const icebathController = require("../controllers/icebath");

router.post("/", icebathController.createIcebath);
router.put("/:id", icebathController.modifyIcebath);
router.delete("/:id", icebathController.deleteIcebath);
router.get("/:id", icebathController.getOneIcebath);
router.get("/", icebathController.getAllIcebath);

module.exports = router;
