import React, { useRef, useState } from "react";
// import axios from "axios";
import { useHistory } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const emailValue = emailInputRef.current.value;
    const passValue = passwordInputRef.current.value;

    console.log(emailValue, passValue);

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD4RFAxgtNBk6DompeRrdWw7W0bK0kXECM";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD4RFAxgtNBk6DompeRrdWw7W0bK0kXECM";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        password: passValue,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authetication Failed!";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
            throw new Error(errorMessage);
          });
        }
      })
      .then(() => {
        history.replace("/");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <section id="login" className="grid grid-cols-2 max-h-screen">
      <div className="container flex flex-col items-center">
        {isLogin ? (
          <img
            src="https://images.unsplash.com/photo-1594955332421-2033cfd867b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt="login"
            className="max-h-screen"
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1604551633638-482ebc019039?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="SignUp"
            className="h-full"
          />
        )}
      </div>
      <div className="container">
        <div>
          <h1>Kombini App</h1>
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required ref={emailInputRef} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                minLength="8"
                required
                ref={passwordInputRef}
              />
            </div>
            <button>{isLogin ? "Login" : "Create Account"}</button>
          </form>
          <div>
            {isLogin ? (
              <p>
                Don't have an account?{" "}
                <button onClick={switchAuthModeHandler}>Sign Up</button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button onClick={switchAuthModeHandler}>Login</button>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
