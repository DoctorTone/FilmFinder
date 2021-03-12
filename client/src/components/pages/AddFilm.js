import React, { useEffect, useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import AddFilmForm from "../films/AddFilmForm";
import Messages from "../messages/Messages";
import MessageContext from "../../context/messaging/messageContext";

const AddFilm = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  const messageContext = useContext(MessageContext);
  const { showMessage, clearMessage } = messageContext;

  useEffect(() => {
    if (!isAuthenticated) {
      showMessage("You are currently not logged in", "warning");
    } else {
      clearMessage();
    }

    // eslint-disable-next-line
  }, [isAuthenticated, props.history]);

  return (
    <div>
      <AddFilmForm authenticated={isAuthenticated} />
      <Messages />
    </div>
  );
};

export default AddFilm;
