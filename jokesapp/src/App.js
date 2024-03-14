import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (isLoggedIn) => {
    setLoggedIn(isLoggedIn);
  };

  return (
    <div className="container">
      {!loggedIn ? <LoginForm onLogin={handleLogin} /> : <Home />}
    </div>
  );
};

export default App;