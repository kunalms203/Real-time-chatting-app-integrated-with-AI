import "./chat.css";
import EmojiPicker from 'emoji-picker-react';
import { useState } from "react";

const Chat = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState("");
  const handleEmoji= e=> {
    setMessage(prev=>prev+e.emoji);
  };
  
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Kunal Shinde</span>
            <p>Hello Everyone !!!</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder="Type a message..." value={message} onChange={e=>setMessage(e.target.value)}/>
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={()=>{setShowEmojiPicker(prev=>!prev)}}/>
          <div className="picker">
          <EmojiPicker open={showEmojiPicker} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendbutton">send</button>
      </div>
    </div>
  );
};

export default Chat;
