import React, { useContext } from "react";
import MessageContext from "../../context/messaging/messageContext";

const Messages = () => {
  const messageContext = useContext(MessageContext);

  const { messages } = messageContext;

  return (
    <div>
      {messages !== null
        ? messages.map((msg) => (
            <p key="1" className="mt-3 text-danger">
              {msg.msg}
            </p>
          ))
        : null}
    </div>
  );
};

export default Messages;
