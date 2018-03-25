var express = require('express');
var router = express.Router();
var mysql=require('mysql')
var mysqlConfig=require('../config/config.js')
var connection=mysql.createConnection(mysqlConfig.db)
var size=8;
console.log('数据库开始连接...')
connection.connect()
console.log('数据库连接成功')

// function pageSearch(page,size){
//   connection.query(`select * from movie_info limit ${(page-1)*size},${size}`,
//   function(err,results,fields){
//     if(err) console.log(err)
//     console.log(results)
//   })
// }

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/movie',function(req,res,next){
  var page=req.query.page
  console.log(page)
  connection.query(`select * from movie_info limit ${(page-1)*size},${size}`,
  function(err,results,fields){
    if(err) console.log(err)
    var data={
      code:200,
      data:results
    }
    res.json(data)
  })
})
module.exports = router;
