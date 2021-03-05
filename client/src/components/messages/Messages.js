import React, { useContext } from "react";
import MessageContext from "../../context/messaging/messageContext";

const Messages = () => {
  const messageContext = useContext(MessageContext);

  const { currentMessage } = messageContext;

  return (
    <div>
      <p className="mt-3 text-danger">{currentMessage}</p>
    </div>
  );
};

export default Messages;
