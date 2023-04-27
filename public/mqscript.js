/*
var host ;
var port ;
var client ;

var clientId

*/

 function startConnect(){

//   client = new Paho.MQTT.Client("broker.mqttdashboard.com",Number(8000), "clientId");

  host= document.getElementById("hostId").value ;
  port= document.getElementById("portId").value ;

  topicSubscribId = document.getElementById("topicId").value ;
 
  clientId = "clientId."+parseInt(Math.random()+100) ;

   client = new Paho.MQTT.Client(host,Number(port), clientId);   
   console.log('host :'+document.getElementById("hostId").value + ':' + document.getElementById("portId").value);
   client.onConnectionLost = onConnectionLost;
   client.onMessageArrived = onMessageArrived;

   client.connect({onSuccess:onConnect});
   }

   function startDisConnect(){
    console.log("disconnect");   
    client.disconnect();
   }

   function publickMessage(){
       console.log("publickMessage");
       message = new Paho.MQTT.Message("MtQyOkOtrewqewqyus");
       message.destinationName = topicSubscribId;
       client.send(message);
   }

   functin subscribe(){
      console.log('subscribe');
   }   

   function onConnect() {
       console.log("onConnect");
       client.subscribe(topicSubscribId);

//       client.subscribe("TEST/MQTT");
//       message = new Paho.MQTT.Message("s kOtrewq ");
//       message.destinationName = "mtt";
//       message.destinationName = "TEST/MQTT";
//       client.send(message);
   }

   function onConnectionLost(responseObject) {
     if (responseObject.errorCode !== 0 ) {
       console.log("onConnectLost:" + responseObject.errorMessage);
     }
   }

   function onMessageArrived(message) {
      console.log("onMessageArrived:"+message.payloadString);    
      document.getElementById("messages").innerHTML += ''+document.getElementById("hostId").value+':'+document.getElementById("portId").value +"<span>  "+message.payloadString + "</span> <br>" ;
     // document.getElementById("send").innerHTML ='host : '+document.getElementById("hostId").value+':'+document.getElementById("portId").value + message.payloadString;
 
      let jsMessage = JSON.parse(message.payloadString);
     handleMessage(jsMessage);
   }


 function handleMessage(message) {
     if (message != null || message != undefined) {
            console.log(message)
     }
 }
