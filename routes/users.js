var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/movie',function(req,res,next){
  pageSearch(page,size)
})
module.exports = router;
