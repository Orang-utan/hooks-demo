import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";

export const About = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>About</h1>
      <p>This is an about page</p>
      <h3>User from context:</h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
