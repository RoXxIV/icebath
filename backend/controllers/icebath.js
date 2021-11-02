const Icebath = require("../models/Icebath");

exports.createIcebath = (req, res, next) => {
  delete req.body._id;
  const icebath = new Icebath({
    ...req.body,
  });
  icebath
    .save()
    .then(() => res.status(201).json({ message: "Datas saved !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyIcebath = (req, res, next) => {
  Icebath.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Datas edited !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteIcebath = (req, res, next) => {
  Icebath.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Datas deleted !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneIcebath = (req, res, next) => {
  Icebath.findOne({ _id: req.params.id })
    .then((icebath) => res.status(200).json(icebath))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllIcebath = (req, res, next) => {
  Icebath.find()
    .then((icebaths) => res.status(200).json(icebaths))
    .catch((error) => res.status(400).json({ error }));
};
