import React, { Component } from "react";
import ReactDOM from "react-dom";
import ChatMessage from "../../Components/Messaging/ChatMessage";
import Signup from "../../Components/Messaging/Signup";
import ChatApp from "../../Components/Messaging/ChatApp";
import "../../Components/Messaging/message.css";

import { default as Chatkit } from "@pusher/chatkit-server";

const chatkit = new Chatkit({
  instanceLocator: "v1:us1:33698389-3965-4f60-aec9-9a955b4f7956",
  key:
    "530edcc8-b3c6-4bdf-b68f-9440c5b2114f:SF8XG0EH8PGpiuk5YGWhRyuXD93UN+L7GGNYBETZMp4="
});

class Messaging extends Component {
  state = {
    currentView: "ChatMessage",
    currentUsername: "",
    currentId: ""
  };

  changeView = view => {
    this.setState({
      currentView: view
    });
  };

  createUser = username => {
    chatkit
      .createUser({
        id: username,
        name: username
      })
      .then(currentUser => {
        this.setState({
          currentUsername: username,
          currentId: username,
          currentView: "chatApp"
        });
      })
      .catch(err => {
        if (err.status === 400) {
          this.setState({
            currentUsername: username,
            currentId: username,
            currentView: "chatApp"
          });
        } else {
          console.log(err.status);
        }
      });
  };

  render() {
    let view = "";

    if (this.state.currentView === "ChatMessage") {
      view = <ChatMessage changeView={this.changeView} />;
    } else if (this.state.currentView === "signup") {
      view = <Signup onSubmit={this.createUser} />;
    } else if (this.state.currentView === "chatApp") {
      view = <ChatApp currentId={this.state.currentId} />;
    }
    return <div className="App">{view}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Messaging />, rootElement);

export default Messaging
