import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AppContext = createContext();

 const AppProvider = (props) => {
    const [state,setstate]=useState([])//gelen verinin kayıt yeri
    const [user, setUser] = useState({ name: "", password: "",companyNo:"" });
    useEffect(() => {
        
        async function axiosData (){
          axios
            .get('http://localhost:3000/logo')
            .then((Response) => {
              //axios ile json verisi çekildi
              setstate(Response.data ); 
              
            })
            .catch((error) => {
              if (Error) alert("veri gelmedi"); //error durumuna düştüğü zaman
              console.log(error);
            });
        }
        
      axiosData(); 
    },[])
    const Logout =()=>{
        setUser({name: "", password: "",companyNo:""})
      }
      const context={
          Logout:Logout,
          state:state,
          setUser:setUser,
          user:user
      }
    return (
        <AppContext.Provider value={context}>
          {props.children}
        </AppContext.Provider>
      );
    };
    export default AppProvider;