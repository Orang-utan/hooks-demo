import React, { useState, useEffect, useRef, useContext } from "react";
import { UserContext } from "../components/UserContext";
import { useForm } from "../components/useForm";
import { Hello } from "../components/Hello";
import { useFetch } from "../components/useFetch";
import { Link } from "react-router-dom";

function expensiveInitialState() {
  return localStorage.getItem("count")
    ? JSON.parse(localStorage.getItem("count"))
    : 0;
}

export const Home = ({ history }) => {
  const [count, setCount] = useState(expensiveInitialState);
  const [{ count1, count2 }, setTwoCounts] = useState({ count1: 0, count2: 0 });
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [showHello, setShowHello] = useState(true);
  const inputRef = useRef();
  const postId = 5;
  const { user } = useContext(UserContext);

  const { data, loading } = useFetch(`http://numbersapi.com/${count}`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  useEffect(() => {
    console.log("re-rendered");
    const onMouseMove = e => {
      //console.log(e);
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      console.log("unmount");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [count, values.email]);

  return (
    <div className="App">
      <h1>Simple counter</h1>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>
        +
      </button>
      <h3>{count}</h3>
      <div>{loading ? "loading..." : data}</div>
      <h1>Two counters</h1>
      <button
        onClick={() =>
          setTwoCounts(currentState => ({
            ...currentState,
            count1: currentState.count1 + 1
          }))
        }
      >
        +
      </button>
      <h3>{count1}</h3>
      <h3>{count2}</h3>

      <input
        ref={inputRef}
        name="email"
        placeholder="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
      />
      <button onClick={() => setShowHello(!showHello)}>Toggle Hello</button>
      {showHello && <Hello />}
      <button
        onClick={() => {
          history.push("/about");
        }}
      >
        Button to go to about
      </button>
      <Link to={`/posts/${postId}`}>Go to Post 5</Link>
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus
      </button>
      <h3>User from context:</h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
