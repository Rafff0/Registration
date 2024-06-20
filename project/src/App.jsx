import React, { useState } from "react";
import "./App.css";
import SignUp from "./components/SignUp";

const App = () => {
  const [users, setUsers] = useState({
    id: "",
    name: "",
    surename: "",
    login: "",
    password: "",
  });
  const [userList, setUserList] = useState([]);
  const [err, setErr] = useState("start");

  function checker(e) {
    e.preventDefault();
    let { id, name, surename, login, password } = users;

    if (!(id && name && surename && login && password)) {
      setErr("Fill all the fields");
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(login)) {
      setErr("Login must be email");
      return;
    }

    if (userList.find((elm) => elm.login == login)) {
      setErr("Login already exist");
      return;
    }
    if (password.length < 6) {
      setErr("Enter longer password");
      return;
    }
    setErr("");
    setUserList([...userList, users]);
    setUsers({ id: "", name: "", surename: "", login: "", password: "" });
  }

  function setter(e) {
    let change = e.target.placeholder.toLowerCase();
    let value = e.target.value;
    let newState = { ...users };
    newState[change] = value;
    setUsers({ ...newState });
  }

  return (
    <div>
      <SignUp err={err} onCheck={checker} onSet={setter} items={users} />
    </div>
  );
};

export default App;
