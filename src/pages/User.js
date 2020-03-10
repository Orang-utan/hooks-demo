import React, { useContext } from "react";
import { login } from "../utils/login";
import { UserContext } from "../components/UserContext";

export const User = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1>User</h1>
      {user ? (
        <button
          onClick={() => {
            // call logout function
            setUser(null);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};
