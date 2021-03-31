import React,{createContext,useEffect,useState} from 'react'
import axios from 'axios'
export const HomeContext=createContext();
 const HomeProvider=(props)=> {
   
  const adminUser = {
    name: "fatih",
    password: "123",
    companyNo:1234
  };
  
     
  const [state,setstate]=useState([])//gelen verinin kayıt yeri
      const [user, setUser] = useState({ name: "", password: "",companyNo:"" });
      const [error, setError] = useState("");
      //TODO:users verileri
      useEffect(() => {
        axiosData(); 
        async function axiosData (){
          axios
            .get(' http://localhost:3000/logo')
            .then((Response) => {
              //axios ile json verisi çekildi
              setstate( Response.data ); 
              
            })
            .catch((error) => {
              if (Error) alert("veri gelmedi"); //error durumuna düştüğü zaman
              console.log(error);
            });
        }
        

       
      
    },[])
    
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
        adminUser:adminUser,
        state:state
        

      }

    return (
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    )
}
export default HomeProvider;

