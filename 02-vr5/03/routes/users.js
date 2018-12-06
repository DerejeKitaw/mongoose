const router = require('express').Router();

router.get('/', function(req, res) {
  res.send('/api/users works!!');
});

module.exports = router;
