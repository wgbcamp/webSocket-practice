//creating the webSocket object that connects to the server with added protocols
var exampleSocket = new WebSocket("wss://www.example.com/socketserver", "protocolOne");

//sending a message to the server
exampleSocket.send("The websocket server connection should be open and awaiting this message!");

//sending a message to the server only if readyState = OPEN
exampleSocket.onopen = function (event) {
    exampleSocket.send("We're sending another message to the server, but this message will only open if the readyState has transitioned from CONNECTING to OPEN!")
}

//send text message to the server
function sendText() {
    //message object to send to server
    var msg = {
        type: "message",
        text: "HELLO SERVER",
        id: "placeholderID",
        date: Date.now()
    };
    //send message object as JSON formatted string
    exampleSocket.send(JSON.stringify(msg));

}

//receive messages from the server
exampleSocket.onmessage = function (event){
    console.log(event.data);
    var msg = JSON.parse(event.data);
}

//close webSocket connection
exampleSocket.close();