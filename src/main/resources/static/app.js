var stompClient = null;

var username = generateRandomUsername();

function generateRandomUsername() {
    var adjectives = ["Quick", "Lazy", "Happy", "Sad", "Angry"];
    var nouns = ["Fox", "Dog", "Cat", "Mouse", "Bear"];
    var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    var noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + noun + Math.floor(Math.random() * 1000);
}

function connect() {
    var socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/messages', function (message) {
            showMessage(JSON.parse(message.body));
        });
    });
}

function sendMessage() {
    var messageContent = document.getElementById('message-input').value;
    stompClient.send("/app/chat", {}, JSON.stringify({'username': username, 'content': messageContent}));
    document.getElementById('message-input').value = '';
}

function showMessage(message) {
    var messagesDiv = document.getElementById('messages');
    var messageElement = document.createElement('div');
    messageElement.appendChild(document.createTextNode(message.username + ": " + message.content));
    messagesDiv.appendChild(messageElement);
}

connect();