var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var TokenSchema = mongoose.Schema({
	tokenId: {
		type: String,
		index:true
	},
	chatId: {
		type: String
	}

});

var token = module.exports = mongoose.model('token', TokenSchema);


module.exports.createToken= function(newData, callback){

	 token.update({'tokenId':newData.tokenId},{$set:{'tokenId':newData.tokenId,'chatId':newData.chatId}},{upsert:true},callback)

}

module.exports.findData=function(cb){
	token.findOne(cb)
}