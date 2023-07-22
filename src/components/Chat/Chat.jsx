import { useDispatch, useSelector } from "react-redux";
import "./Chat.scss";
import chatOpenCloserIcon from "../../assets/chatOpenCloser.png";
import { useEffect, useRef } from "react";

const Chat = () => {
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

  return (
    <div className={`chat-container ${isOpen ? "opening" : "closing"}`}>
      <div className="chat-box">
        <input
          ref={inputRef}
          placeholder="input message"
          className="chatSendingText"
          type="text"
        />
      </div>
      <img
        onClick={() => chatOpenCloser()}
        src={chatOpenCloserIcon}
        alt=""
        className={`chatOpenCloser ${isOpen && "closer"}`}
      />
    </div>
  );
};

export default Chat;