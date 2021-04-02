import React, { useState, useContext, useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import { AppContext } from "../context/AppContext";
import axios from 'axios'
function Home() {

  const [error, setError] = useState("");

  const { state, Logout, setUser, user } = useContext(AppContext);


  const Login = (details) => {

    if (state.length) {
      state.map((user) => {
        if (
          details.password == user.password &&
          details.name == user.Name &&
          details.companyNo == user.companyNo

        ) {
          setError("")
          console.log("giriş başarılı");
          setUser({
            name: details.name,
            password: details.password,
            companyNo: details.companyNo
          });
        } else {
          console.log("tekrar dene");
          setError("tekrar dene")
        }
      }
      )

    }
  };



  return (
    <div className="App">
      {user.name !== "" ? (
        <div className="welcome">
          <h2>
            Welcome<span>{user.name}</span>
          </h2>
          <button onClick={Logout}>logout</button>
          
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}
export default Home;