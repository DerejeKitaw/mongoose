const router = require('express').Router();
const { Project } = require('../model/project');

router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.send(projects);
});

router.post('/', async (req, res) => {
  let project = new Project({
    name: req.body.name
  });

  let newProject = await project.save();
  res.send(newProject);
});

module.exports = router;
