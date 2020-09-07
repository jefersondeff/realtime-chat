var socket = new WebSocket("ws://localhost:8080/ws");

let connect = () => {
    console.log("Attemping Connection");

    socket.onopen = () => {
        console.log("Successfully Connected");
    };
    
    socket.onmessage = msg => {
        console.log(msg);
    };

    socket.onclose = event => {
        console.log("socket Closed connection", event);
    };

    socket.onerror = error => {
        console.log("socket error", error);
    };

};

let sendMsg = msg => {
    console.log("Sending msg: ", msg);
    socket.send(msg);
};

export { connect, sendMsg };