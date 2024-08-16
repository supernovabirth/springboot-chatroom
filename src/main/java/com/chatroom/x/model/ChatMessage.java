package com.chatroom.x.model;

import java.util.Objects;

public class ChatMessage {
	private String content;
	private String sender;
	private MessageType type;
	
	public enum MessageType {
		CHAT, JOIN, LEAVE
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getSender() {
		return sender;
	}

	public void setSender(String sender) {
		this.sender = sender;
	}

	public MessageType getType() {
		return type;
	}

	public void setType(MessageType type) {
		this.type = type;
	}

	@Override
	public int hashCode() {
		return Objects.hash(content, sender, type);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ChatMessage other = (ChatMessage) obj;
		return Objects.equals(content, other.content) && Objects.equals(sender, other.sender) && type == other.type;
	}
	
}
