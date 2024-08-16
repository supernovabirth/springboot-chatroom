let stompClient = null;
let username = null;

function connectToChat() {
    username = document.getElementById('name-input').value.trim();
    if (!username) {
        alert("Please enter your name!");
        return;
    }

    const socket = new SockJS('/chat');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, onConnected, onError);
}

function onConnected() {
    // Subscribe to the Public Topic
    stompClient.subscribe('/topic/public', onMessageReceived);

    // Tell your username to the server
    stompClient.send("/app/chat.addUser",
        {},
        JSON.stringify({sender: username, content: 'has joined the chat', type: 'JOIN'})
    );

    document.getElementById('name-form').style.display = 'none';
    document.getElementById('chat-room').style.display = 'flex';

    // Add event listener for window unload to send LEAVE message
    window.addEventListener('beforeunload', disconnectFromChat);
}

function onError(error) {
    console.error('Could not connect to WebSocket server. Please refresh this page to try again!');
}

function sendMessage(event) {
    const messageInput = document.getElementById('message-input');
    const messageContent = messageInput.value.trim();

    if (messageContent && stompClient) {
        const chatMessage = {
            sender: username,
            content: messageContent,
            type: 'CHAT'
        };

        stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage));
        messageInput.value = '';
    }
    event.preventDefault();
}

function onMessageReceived(payload) {
const message = JSON.parse(payload.body);

const messageElement = document.createElement('div');
messageElement.classList.add('message');

const usernameElement = document.createElement('strong');
usernameElement.classList.add('username');
usernameElement.innerText = message.sender;
messageElement.appendChild(usernameElement);

const textElement = document.createElement('span');

if (message.type === 'JOIN') {
    textElement.innerText = ' has joined the chat';
    textElement.style.fontStyle = 'italic';
    textElement.style.color = 'green';
} else if (message.type === 'LEAVE') {
    textElement.innerText = ' has left the chat';
    textElement.style.fontStyle = 'italic';
    textElement.style.color = 'red';
} else {
    textElement.innerText = message.content;
}

messageElement.appendChild(textElement);
document.getElementById('message-container').appendChild(messageElement);
}

function disconnectFromChat() {
    if (stompClient) {
        stompClient.send("/app/chat.sendMessage", {}, JSON.stringify({sender: username, type: 'LEAVE'}));
        stompClient.disconnect();
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}