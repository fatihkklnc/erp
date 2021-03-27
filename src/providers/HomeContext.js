import React,{createContext,useState} from 'react'

export const HomeContext=createContext();
 export const HomeProvider =(props)=> {
    const adminUser = {
        name: "fatih",
        password: "admin123",
      };
    
      const [user, setUser] = useState({ name: "", password: "" });
      const [error, setError] = useState("");
    
      const Login = (details) => {
        console.log(details);
        if (
          details.password == adminUser.password &&
          details.name == adminUser.name
        ) {
          setError("")
          console.log("giriş başarılı");
          setUser({
            name: details.name,
            password: details.password,
          });
        } else {
          console.log("tekrar dene");
          setError("tekrar dene")
        }
      };
      const Logout =()=>{
        setUser({name: "", password: ""})
      }
      const contextValue={
        user:user,
        error:error,
        Login:Login,
        Logout:Logout

      }

    return (
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    )
}

