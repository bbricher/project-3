import React, { Component } from "react";
import { ChatManager, TokenProvider } from "@pusher/chatkit-client";
import Input from "./Input";
import MessageList from "./MessageList";

class ChatApp extends Component {
  state = {
    currentUser: null,
    currentRoom: { users: [] },
    messages: [],
    users: []
  };

  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator: "v1:us1:33698389-3965-4f60-aec9-9a955b4f7956",
      userId: this.props.currentId,
      tokenProvider: new TokenProvider({
        url:
          "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/33698389-3965-4f60-aec9-9a955b4f7956/token"
      })
    });
    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser: currentUser });
        return currentUser.subscribeToRoom({
          roomId: "adb4e838-b93e-4b09-bd46-7e80f8ac9e23",
          messageLimit: 100,
          hooks: {
            onMessage: message => {
              this.setState({
                messages: [...this.state.messages, message]
              });
            }
          }
        });
      })
      .then(currentRoom => {
        this.setState({
          currentRoom,
          users: currentRoom.userIds
        });
      })
      .catch(error => console.log(error));
  }
  addMessage = text => {
    this.state.currentUser
      .sendMessage({
        text,
        roomId: this.state.currentRoom.id
      })
      .catch(error => console.error("error", error));
  };
  render() {
    return (
      <div>
        <h2 className="header">Hi There, Ask us anything</h2>
        <MessageList messages={this.state.messages} />
        <Input className="input-field" onSubmit={this.addMessage} />
      </div>
    );
  }
}

export default ChatApp;