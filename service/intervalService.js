var tcpp = require('tcp-ping');
var request = require('request');
var interval;
var status;
module.exports.startPing=function(datas,message,tokenId,chatId,repeatTime,pingTime,cb){
    clearInterval(interval);
    tcpp.probe(datas.address, datas.port, function(err, available) {
         if(available){
            var interval=setInterval(function() {
                tcpp.ping(datas,  function(err, dataset) {
                 if(err)
                    console.log(err);
                 else if(dataset.avg>pingTime){
                    console.log(dataset.avg)
                     request('http://api.telegram.org/bot'+tokenId+'/sendmessage?chat_id='+chatId+'&text='+message, function (error, response, body){})
                 } 
                 else{
                  console.log(dataset);
                 }});
            
             }, repeatTime);
             status=true
            }
        else{
        request('http://api.telegram.org/bot'+tokenId+'/sendmessage?chat_id='+chatId+'&text=Not Available', function (error, response, body){})
             console.log("doesnot exist");
             status=false
            }
    });
cb(status);
}

module.exports.stopPing=function(a,cb){

 clearInterval(interval);

}