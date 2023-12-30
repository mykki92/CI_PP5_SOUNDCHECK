import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();

  /*
    Checks if the user is currently signed in or not
    Refreshes the access token if a user is signed in
    Redirects the user to the landing page
  */
  useEffect(() => {
    const handleMount = async () => {
      try {
        await axios.post("/dj-rest-auth/token/refresh/");
        // if user is signed in, the code below will run
        if (userAuthStatus === "loggedIn") {
          history.push("/");
        }
      } catch (err) {
        // if user is not signed in, the code below will run
        if (userAuthStatus === "loggedOut") {
          history.push("/");
        }
      }
    };

    handleMount();
  }, [history, userAuthStatus]);
};