import logo from './logo.svg';
import './App.css';
import io from "socket.io-client";
import {Avatar, Button, Input, List, Skeleton} from "antd";
import {useEffect, useState} from "react";
import './components/login/login.css'
const socket = io.connect("http://localhost:3001");

function App() {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([])
  const sendMessage = () =>{
      let messageList = messages;
      messageList.push(<p>>message</p>);
      setMessages(messageList);
      socket.emit("send_message", {message: message})
  }

  useEffect(() =>{
    socket.on("receive_message", (data) => {

        alert(data.message);
      let messageList = messages;
        messageList.push(<p>{data.message}</p>);
      setMessages(messageList);
    })
  }, [socket])



  return (
    <div className={'body'}>
        <div className={'container'}>

            <List
                // className="demo-loadmore-list"
                // loading={initLoading}
                // itemLayout="horizontal"
                // loadMore={loadMore}
                dataSource={messages}
                renderItem={(item) => (
                    <List.Item
                    >


                            <div>{item}</div>

                    </List.Item>
                )}
            />

            <input onChange={(e) => {
                setMessage(e.target.value);
            }} style={{height: "33px", textAlign: "center", fontSize:"25px", marginTop: "50px"}}/>


            <Button onClick={sendMessage} style={{width: "80px"}}>Send</Button>
        </div>

    </div>
  );
}

export default App;
