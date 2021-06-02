var exampleSocket = new WebSocket("wss://www.example.com/socketserver", "protocolOne");

exampleSocket.send("The websocket server connection should be open and awaiting this message!");

exampleSocket.onopen = function (event) {
    exampleSocket.send("We're sending another message to the server, but this message will only open if the readyState has transitioned from CONNECTING to OPEN!")
}

