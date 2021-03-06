import React, { useReducer } from "react";
import MessageContext from "./messageContext";
import messageReducer from "./messageReducer";
import { SHOW_MESSAGE, CLEAR_MESSAGE } from "../types";

const MessageState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(messageReducer, initialState);

  // Set Alert
  const showMessage = (msg, type) => {
    dispatch({
      type: SHOW_MESSAGE,
      payload: { msg, type },
    });
  };

  const clearMessage = () => {
    dispatch({
      type: CLEAR_MESSAGE,
    });
  };
  return (
    <MessageContext.Provider
      value={{
        messages: state,
        showMessage,
        clearMessage,
      }}
    >
      {props.children}
    </MessageContext.Provider>
  );
};

export default MessageState;
