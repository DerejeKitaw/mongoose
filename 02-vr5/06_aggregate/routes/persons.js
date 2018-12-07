const router = require('express').Router();
const { Person } = require('../model/person');

router.get('/', async (req, res) => {
  const persons = await Person.find({},{"__v":0,"_id":0}).lean();
  res.send(persons);
});
// run an aggregate query that will get all of the people who like a given
// item. To see the full documentation on ways to use the aggregate
// framework, see http://docs.mongodb.org/manual/core/aggregation/
router.get('/all', async (req, res) => {
  try {
    const persons = await Person.aggregate(
      [// Select the field we want to deal with
      { $project: { name: 1, likes: 1 } },
      // unwind 'likes', which will create a document for each like
      { $unwind: '$likes' },
      // groupe everything by the like and then add each name with that like to the set for the like
      {
        $group: {
          _id: { likes: '$likes' },
          likers: { $addToSet: '$name' }
        }
      }],
      function(err, result) {
        if (err) throw err;
        res.send(result);
        // console.log(result);
      }
    );
  } catch (ex) {
    res.status(500).send(ex);
  }
  // res.send(persons);
});

router.post('/', async (req, res) => {
  const person = new Person({
    name: req.body.name,
    age: req.body.age,
    birthday: req.body.birthday,
    gender: req.body.gender,
    likes: req.body.likes
  });

  const newPerson = await person.save();
  res.send(newPerson);
});

module.exports = router;
