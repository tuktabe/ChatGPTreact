import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import { sendMsgToOpenAI } from './openai'
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi I am ChatGPT",
      isBot: true
    }
  ]);

  const handleSend = async () => {
    const res = await sendMsgToOpenAI(input);
    setMessages([
      ...messages,
      { text: input, isBot: false },
      { text : res, isBot: true}  
    
    ])
  }

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperside">
          <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">ChatGPT</span></div>
          <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Query" />What is programming ?</button>
            <button className="query"><img src={msgIcon} alt="Query" />How to use an API ?</button>
          </div>

        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg" />Upgrade to Pro</div>


        </div>

      </div>
      
     
      <div className="main">
        <div className="chats">
          {messages.map((message, i) => 
            <div key={i} className={message.isBot?"chat bot":"chat"}>
              <img className='chatImg' src={message.isBot?gptImgLogo:userIcon} alt="" /><p className="txt">{ message.text }</p>
            </div>
            
          )}

        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message' value={input} onChange={(e)=>{setInput(e.target.value)}}/><button className="send" onClick={handleSend}><img src={sendBtn} alt="Send" /></button>
          </div>
          <p>ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 20 Version.</p>
        </div>


      </div>
  
    </div>
  );
}

export default App;
