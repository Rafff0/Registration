import React from "react";

const SignUp = ({
  onSet,
  items: { id, name, surename, login, password },
  onCheck,
  err,
}) => {
  return (
    <>
      {err != "start" ? (
        !err ? (
          <p className="p">You registered successfully!</p>
        ) : (
          <p>{err}</p>
        )
      ) : (
        ""
      )}
      <form
        onSubmit={(e) => {
          onCheck(e);
        }}
      >
        <input
          onChange={(e) => onSet(e)}
          value={id}
          placeholder="Id"
          type="text"
        />
        <input
          onChange={(e) => onSet(e)}
          value={name}
          placeholder="Name"
          type="text"
        />
        <input
          onChange={(e) => onSet(e)}
          value={surename}
          placeholder="Surename"
          type="text"
        />
        <input
          onChange={(e) => onSet(e)}
          value={login}
          placeholder="Login"
          type="text"
        />
        <input
          onChange={(e) => onSet(e)}
          value={password}
          placeholder="Password"
          type="password"
        />

        <input type="submit" />
      </form>
    </>
  );
};

export default SignUp;
