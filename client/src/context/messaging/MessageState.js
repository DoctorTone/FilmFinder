import React, { useReducer } from "react";
import MessageContext from "./messageContext";
import messageReducer from "./messageReducer";
import { SHOW_MESSAGE, REMOVE_MESSAGE } from "../types";

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

  const removeMessage = (msg) => {
    dispatch({
      type: REMOVE_MESSAGE,
      payload: msg,
    });
  };
  return (
    <MessageContext.Provider
      value={{
        messages: state,
        showMessage,
        removeMessage,
      }}
    >
      {props.children}
    </MessageContext.Provider>
  );
};

export default AlertState;
