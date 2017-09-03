var tcpp = require('tcp-ping');
var request = require('request');
var interval;
var status;
module.exports.startPing=function(datas,message,tokenId,chatId,repeatTime,pingTime,cb){
    console.log("deepak")
    clearInterval(interval);
    tcpp.probe(datas.address, datas.port, function(err, available) {
         if(available){
            status=true
            request('http://api.telegram.org/bot'+tokenId+'/sendmessage?chat_id='+chatId+'&text=Ping has startedfor '+datas.address, function (error, response, body){})
             interval=setInterval(function() {
                console.log(repeatTime);
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
             
            }
        else{
        request('http://api.telegram.org/bot'+tokenId+'/sendmessage?chat_id='+chatId+'&text=Not Available', function (error, response, body){})
             console.log("doesnot exist");
             status=false
            }
            console.log("deepak")
            console.log(status);
        cb(status);
    });

}

module.exports.stopPing=function(tokenId,chatId,cb){
    request('http://api.telegram.org/bot'+tokenId+'/sendmessage?chat_id='+chatId+'&text=Ping has been stoped.', function (error, response, body){})
  clearInterval(interval);
  status=true;
 cb(status);
}