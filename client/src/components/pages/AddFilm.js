import React, { useEffect, useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import AddFilmForm from "../films/AddFilmForm";
import Messages from "../messages/Messages";

const AddFilm = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  useEffect(() => {
    if (!isAuthenticated) {
      props.history.push("/Login");
    }

    // eslint-disable-next-line
  }, [isAuthenticated, props.history]);

  return (
    <div>
      <AddFilmForm />
      <Messages />
    </div>
  );
};

export default AddFilm;
