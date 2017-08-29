var express = require('express');
var router = express.Router();
var request = require('request');
var tokenId="425801665:AAGW1ZzvdK_Kg3S5ly9dY-jJzTPdQ_CJ-6E";
/* GET home page. */
router.get('/', function(req, res, next) {
  request('http://api.telegram.org/bot'+tokenId+'/getupdates', function (error, response, body) {
    console.log(body);
    res.render('index',{title:body})
});
});

router.post('/sendMessage',function(req,res,next){
var id=req.body.id;
var message=req.body.message

  request('http://api.telegram.org/bot'+tokenId+'/sendmessage?chat_id='+id+'&text='+message, function (error, response, body) {
    console.log(body);
    res.render('index',{title:body})
});


})
module.exports = router;