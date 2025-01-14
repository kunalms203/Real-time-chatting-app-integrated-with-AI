import "./chat.css";
import EmojiPicker from 'emoji-picker-react';
import { useState , useRef , useEffect } from "react";

const Chat = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState("");
  const handleEmoji= e=> {
    setMessage(prev=>prev+e.emoji);
  };
  const endref = useRef(null);
  useEffect(()=>{
    endref.current.scrollIntoView({ behavior: "smooth" });
  },[message]);
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
      <div className="center">
        <div className="messege">
          <img className="img-avtar" src="./avatar.png" alt="" />
          <div className="center-text">
            <p>
              Hi everyone! I'm Shubham. I'm a software engineer.
              I'm here to help you with your project.
              Feel free to ask any questions.
              Have a great day!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="messege own">
          <div className="center-text">
            <img src="https://www.billboard.com/wp-content/uploads/2023/07/Olivia-Rodrigo-press-credit-Larissa-Hofmann-2023-billboard-1548.jpg?w=942&h=623&crop=1" alt="" />
            <p>
              Hi everyone! I'm olivia. I'm a software engineer.
              I'm here to help you with your project.
              Feel free to ask any questions.
              Have a great day!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="messege">
          <img className="img-avtar" src="./avatar.png" alt="" />
          <div className="center-text">
            <p>
              Hi everyone! I'm Shubham. I'm a software engineer.
              I'm here to help you with your project.
              Feel free to ask any questions.
              Have a great day!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="messege own">
          <div className="center-text">
            <img src="https://www.billboard.com/wp-content/uploads/2023/07/Olivia-Rodrigo-press-credit-Larissa-Hofmann-2023-billboard-1548.jpg?w=942&h=623&crop=1" alt="" />
            <p>
              Hi everyone! I'm olivia. I'm a software engineer.
              I'm here to help you with your project.
              Feel free to ask any questions.
              Have a great day!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="messege">
          <img className="img-avtar" src="./avatar.png" alt="" />
          <div className="center-text">
            <p>
              Hi everyone! I'm Shubham. I'm a software engineer.
              I'm here to help you with your project.
              Feel free to ask any questions.
              Have a great day!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="messege own">
          <div className="center-text">
            <img src="https://www.billboard.com/wp-content/uploads/2023/07/Olivia-Rodrigo-press-credit-Larissa-Hofmann-2023-billboard-1548.jpg?w=942&h=623&crop=1" alt="" />
            <p>
              Hi everyone! I'm olivia. I'm a software engineer.
              I'm here to help you with your project.
              Feel free to ask any questions.
              Have a great day!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endref}></div>
      </div>
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
