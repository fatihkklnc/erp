import React,{ useState,useContext,useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import {HomeContext} from '../providers/HomeContext';
import axios from 'axios'
 function Home() {
   
    const {user,Logout}= useContext(HomeContext);
    
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
            <LoginForm />
          )}
        </div>
      );
}
export default Home;