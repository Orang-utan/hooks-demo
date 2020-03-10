import React, { useState, useMemo } from "react";
import { Home } from "./Home";
import { About } from "./About";
import { User } from "./User";
import { Post } from "./Post";
import Counter from "./Counter";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { UserContext } from "../components/UserContext";

const App = () => {
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser }));
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <UserContext.Provider value={providerValue}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/user" exact component={User} />
            <Route path="/counter" exact component={Counter} />
            <Route path="/posts/:id" exact component={Post} />
            <Route
              path="/"
              component={() => (
                <div>
                  <h1>404</h1>
                </div>
              )}
            />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
