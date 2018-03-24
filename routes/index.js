var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
const data = [
  {
    title: 'Title 1',
    poster:"1",
    address:"1",
    content:"测试一下大量的描述啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
  },
  {
      title: 'Title 2',
      poster:"2",
      address:"2",
      content:"测试一下大量的描述啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
    },
    {
      title: 'Title 3',
      poster:"3",
      address:"3",
      content:"测试一下大量的描述啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
    },
    {
      title: 'Title 4',
      poster:"4",
      address:"4",
      content:"测试一下大量的描述啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
    },
    {
      title: 'Title 5',
      poster:"5",
      address:"5",
      content:"测试一下大量的描述啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
    },
];

router.get('/api/test', function(req, res, next) {
  res.json({
    data:data
  })
});

module.exports = router;
