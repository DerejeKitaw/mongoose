const router = require('express').Router();
const { Project } = require('../model/project');

router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.send(projects);
});

router.post('/', async (req, res) => {
  const project = new Project({
    name: req.body.name,
    age: req.body.age
  });

  const newProject = await project.save();
  res.send(newProject);
});

module.exports = router;
