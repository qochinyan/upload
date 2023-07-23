import { useDispatch, useSelector } from "react-redux";
import "./Chat.scss";
import chatOpenCloserIcon from "../../assets/chatOpenCloser.png";
import { useEffect, useMemo, useRef, useState } from "react";

const Chat = () => {
  const [chatInputValue, setChatInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  let randomUserName = useMemo(()=>"Anonym"+Math.round((Math.random()*10000)),[])
  let isOpen = useSelector((state) => state.chat.open);

  let inputRef = useRef();
  useEffect(() => {
    isOpen && inputRef.current.focus();
  }, [isOpen]);
  const dispatch = useDispatch();
  const chatOpenCloser = () => {
    dispatch({
      type: isOpen ? "CLOSE_CHAT" : "OPEN_CHAT",
    });
  };
  const sendMessage = (evt) => {
    let newMessages = [...messages];
    newMessages.push({ author: randomUserName, text: chatInputValue });
    setMessages(newMessages);
    setChatInputValue("");                                                          
    inputRef.current.focus();
  };

  // to bottom refs
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className={`chat-container ${isOpen ? "opening" : "closing"}`}>
      <div className="chat-box">
        <div className="messages-box">
          {messages.map((m, i) => (
            <div className="oneMessage" key={i + "wwe"}>
            <span className="username">{m.author}</span>: <span className="text">{m.text}</span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-input-box">
          <input
            ref={inputRef}
            placeholder="input message"
            className="chatSendingText"
            type="text"
            value={chatInputValue}
            onChange={(evt) => {
              setChatInputValue(evt.target.value);
            }}
            onKeyDown={(evt) => {
              evt.which === 13 && sendMessage();
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="30"
            height="30"
            viewBox="0 0 110 80"
            xmlSpace="preserve"
            style={{ cursor: "pointer" }}
            onClick={sendMessage}
          >
            <g
              style={{
                stroke: "none",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                fill: "none",
                fillRule: "nonzero",
                opacity: 1,
                transform:
                  "translate(45.02412451361867 45.024124513618645) scale(1.83 1.83)",
              }}
            >
              <path
                d="M 89.999 3.075 C 90 3.02 90 2.967 89.999 2.912 c -0.004 -0.134 -0.017 -0.266 -0.038 -0.398 c -0.007 -0.041 -0.009 -0.081 -0.018 -0.122 c -0.034 -0.165 -0.082 -0.327 -0.144 -0.484 c -0.018 -0.046 -0.041 -0.089 -0.061 -0.134 c -0.053 -0.119 -0.113 -0.234 -0.182 -0.346 C 89.528 1.382 89.5 1.336 89.469 1.29 c -0.102 -0.147 -0.212 -0.288 -0.341 -0.417 c -0.13 -0.13 -0.273 -0.241 -0.421 -0.344 c -0.042 -0.029 -0.085 -0.056 -0.129 -0.082 c -0.118 -0.073 -0.239 -0.136 -0.364 -0.191 c -0.039 -0.017 -0.076 -0.037 -0.116 -0.053 c -0.161 -0.063 -0.327 -0.113 -0.497 -0.147 c -0.031 -0.006 -0.063 -0.008 -0.094 -0.014 c -0.142 -0.024 -0.285 -0.038 -0.429 -0.041 C 87.03 0 86.983 0 86.936 0.001 c -0.141 0.003 -0.282 0.017 -0.423 0.041 c -0.035 0.006 -0.069 0.008 -0.104 0.015 c -0.154 0.031 -0.306 0.073 -0.456 0.129 L 1.946 31.709 c -1.124 0.422 -1.888 1.473 -1.943 2.673 c -0.054 1.199 0.612 2.316 1.693 2.838 l 34.455 16.628 l 16.627 34.455 C 53.281 89.344 54.334 90 55.481 90 c 0.046 0 0.091 -0.001 0.137 -0.003 c 1.199 -0.055 2.251 -0.819 2.673 -1.943 L 89.815 4.048 c 0.056 -0.149 0.097 -0.3 0.128 -0.453 c 0.008 -0.041 0.011 -0.081 0.017 -0.122 C 89.982 3.341 89.995 3.208 89.999 3.075 z M 75.086 10.672 L 37.785 47.973 L 10.619 34.864 L 75.086 10.672 z M 55.136 79.381 L 42.027 52.216 l 37.302 -37.302 L 55.136 79.381 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "#584f7d",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform=" matrix(1 0 0 1 0 0) "
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>
      <img
        onClick={chatOpenCloser}
        src={chatOpenCloserIcon}
        alt=""
        className={`chatOpenCloser ${isOpen && "closer"}`}
      />
    </div>
  );
};

export default Chat;
