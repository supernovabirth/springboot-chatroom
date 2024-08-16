# X Chatroom Application

## Overview
X Chatroom is a real-time chat application built using Spring Boot and WebSockets. Users can join the chatroom, send messages, and see messages from other users in real-time.

## Features
- Real-time messaging using WebSockets
- User join and leave notifications
- Responsive UI

## Technologies Used
- Spring Boot
- Spring WebSocket
- STOMP over WebSocket
- SockJS
- HTML/CSS/JavaScript

## Prerequisites
- Java 17 or higher
- Maven

## Getting Started

### Clone the Repository
### Build the Project
### Run the Application

The application will start on [http://localhost:8080](http://localhost:8080).

## Project Structure
- **pom.xml**: Maven configuration file with dependencies and plugins.
- **src/main/java/com/chatroom/x**: Contains the main application and configuration files.
  - **XChatroomApplication.java**: Main class to run the Spring Boot application.
  - **config/WebSocketConfig.java**: Configuration for WebSocket and STOMP.
  - **controller/ChatController.java**: Controller to handle chat messages.
  - **model/ChatMessage.java**: Model class representing a chat message.
- **src/main/resources/static**: Contains static resources like HTML, CSS, and JavaScript files.
  - **index.html**: Main HTML file for the chatroom UI.
  - **main.css**: CSS file for styling the chatroom.
  - **app.js**: JavaScript file for handling WebSocket connections and UI interactions.

## Usage
## Access the Chatroom
1. Open a web browser and navigate to [http://localhost:8080](http://localhost:8080).
2. Enter your name and click "Join" to enter the chatroom.
3. Type a message in the input box and click "Send" to send a message.

## WebSocket Endpoints
- **/chat**: STOMP endpoint for WebSocket connections.
- **/app/chat.sendMessage**: Endpoint to send chat messages.
- **/app/chat.addUser**: Endpoint to add a user to the chatroom.
- **/topic/public**: Topic to broadcast messages to all users.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

This README provides an overview of the X Chatroom application, including setup instructions, project structure, and usage details. Feel free to customize it further based on your specific requirements.