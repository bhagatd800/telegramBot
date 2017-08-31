var express = require('express');
var router = express.Router();
var request = require('request');
var tokenId="425801665:AAGW1ZzvdK_Kg3S5ly9dY-jJzTPdQ_CJ-6E";

var tcpp = require('tcp-ping');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   request('http://api.telegram.org/bot'+tokenId+'/getupdates', function (error, response, body) {
//     console.log(body);
//     res.render('index',{title:body})
// });
// });

router.get('/setting', function(req, res, next) {
 ;
    res.render('setting',{title:"Set Following Info"})
});


router.get('/',function(req,res){

    tcpp.ping({ address: '46.28.246.123' },  function(err, datas) {
            console.log(datas);
            res.render('index',{data:datas})
        });



});

router.post('/sendMessage',function(req,res,next){
var id=req.body.id;
var message=req.body.message;
console.log(id);
console.log(message);
  request('http://api.telegram.org/bot'+tokenId+'/sendmessage?chat_id='+id+'&text='+message, function (error, response, body) {
   // console.log(body);
    res.render('index',{title:body})
});


})
module.exports = router;