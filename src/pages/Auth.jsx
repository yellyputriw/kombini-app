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
    <section id="login" className="grid grid-cols-2 max-h-screen ">
      <div className="container flex flex-col items-center w-full h-screen">
        {isLogin ? (
          <img
            src="https://images.unsplash.com/photo-1594955332421-2033cfd867b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt="login"
            className="object-cover w-full h-full"
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1584269940522-10239e4bec6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="SignUp"
            className="object-cover w-full h-full"
          />
        )}
      </div>
      <div className="flex items-center justify-center flex-col py-6 px-36 max-h-screen">
        <h1 className="text-5xl mb-6 font-semibold text-orange-600">
          Kombini App
        </h1>
        <div className=" my-4 shadow-md p-8 rounded-lg w-full">
          <h2 className="mb-4 text-2xl text-center">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                ref={emailInputRef}
                className="border rounded-md py-3 px-4"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="password" className="mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                minLength="8"
                required
                ref={passwordInputRef}
                className="border rounded-md py-3 px-4"
              />
            </div>
            <div className="flex justify-center">
              <button className="text-center bg-orange-500 text-white font-semibold w-full rounded-md py-3 px-4 hover:bg-white border border-orange-500 hover:text-orange-500">
                {isLogin ? "Login" : "Create Account"}
              </button>
            </div>
          </form>
          <div className="my-4">
            {isLogin ? (
              <p className="text-sm">
                Don't have an account?{" "}
                <button
                  className="text-sm border-b border-b-orange-500 hover:text-orange-500"
                  onClick={switchAuthModeHandler}>
                  Sign Up
                </button>
              </p>
            ) : (
              <p className="text-sm">
                Already have an account?{" "}
                <button
                  className="text-sm border-b border-b-orange-500 hover:text-orange-500"
                  onClick={switchAuthModeHandler}>
                  Login
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
