import React,{createContext,useEffect,useState} from 'react'
import axios from 'axios'
export const HomeContext=createContext();
 export const HomeProvider =(props)=> {
  const adminUser = {
    name: "fatih",
    password: "123",
    companyNo:1234
  };
     
    
      const [user, setUser] = useState({ name: "", password: "",companyNo:"" });
      const [error, setError] = useState("");
    
      const Login = (details) => {
        console.log(details);
        if (
          details.password == adminUser.password &&
          details.name == adminUser.name &&
          details.companyNo== adminUser.companyNo
        ) {
          setError("")
          console.log("giriş başarılı");
          setUser({
            name: details.name,
            password: details.password,
            companyNo:details.companyNo
          });
        } else {
          console.log("tekrar dene");
          setError("tekrar dene")
        }
      };
      const Logout =()=>{
        setUser({name: "", password: "",companyNo:""})
      }
      const contextValue={
        user:user,
        error:error,
        Login:Login,
        Logout:Logout,
        adminUser:adminUser
        

      }

    return (
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    )
}

