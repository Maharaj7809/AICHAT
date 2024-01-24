import { useState } from "react";
import { sendMessageToOpenAI } from "./axios";
import AI from './AI';
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = async () => {
    const response = await sendMessageToOpenAI(input);
    setMessages([
      ...messages,
      { text: input, isUser: true },
      { text: response, isUser: false },
    ]);
    setInput("");
  };

  return (
    <div style={{backgroundImage: `url('https://i.ibb.co/TLTp4L7/3d-robot-hand-background-ai-technology-side-view-53876-129789.jpg')`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
    <div><AI/></div>
  </div>
    // <div className="App">
  
    //   <div className="chat">
    //     {messages.map((message, index) => (
    //       <div
    //         key={index}
    //         className={message.isUser ? "user-message" : "bot-message"}
    //       >
    //         {message.text}
    //       </div>
    //     ))}
    //   </div>
    //   <div className="input-container">
    //     <input
    //       type="text"
    //       value={input}
    //       onChange={(e) => setInput(e.target.value)}
    //     />
    //     <button onClick={handleMessageSubmit}>Send</button>
    //   </div>
    // </div>
  );
}

export default App;
