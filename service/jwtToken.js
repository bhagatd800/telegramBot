var jwt =require('jsonwebtoken');
module.exports.authenticate=function(data,cb){

var token =jwt.sign(data,process.env.SECRET_KEY,{

    expiresIn:600000
});
  cb(token)  
}