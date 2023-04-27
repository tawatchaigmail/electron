var mqtt = require('mqtt');

//const MQTT_SERVER = "Your Server Address";
const MQTT_SERVER = "127.0.0.1";
const MQTT_PORT = "1883";
//if your server don't have username and password let blank.
const MQTT_USER = ""; 
const MQTT_PASSWORD = "";
const SUBSCRIBE= 'mtt/topic';

var clientId = 'clieantID:'

// Connect MQTT
var client = mqtt.connect({
    host: MQTT_SERVER,
    port: MQTT_PORT,
    username: MQTT_USER,
    password: MQTT_PASSWORD
});

client.on('connect', function () {
    // Subscribe any topic
    console.log("MTMT Connect");
    client.subscribe(SUBSCRIBE, function (err) {
        if (err) {
            console.log(err);
        }
    });
});

// Receive Message and print on terminal
client.on('message', function (topic, message) {
    // message is Buffer
   // console.log(' message :');
    console.log(message.toString());
});

/*
setInterval(() => {
    client.publish(SUBSCRIBE, " from odJS");
}, 5000);
*/

exports.clientId ; 

    
