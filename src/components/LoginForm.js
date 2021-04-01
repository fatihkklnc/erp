import React, { useState,useContext,useEffect } from 'react'
import axios from 'axios'
import {HomeContext} from '../providers/HomeContext'


const LoginForm=(props)=> {
    
    const {Login,error,adminUser,state}=useContext(HomeContext);
    
    const [details,setDetails]=useState({name:"",password:"",companyNo:"",session:""})
    const [stateCompany,setStateCompany]=useState(false)
    
    //TODO:inputlardan gelen veri kontrolü arrow ile 
    
    useEffect(() => {
        
                    
                    
       

    }, [details])
   
    //TODO:state den gelen veri
    

    
    const handleChance=(event)=>{
        
        let name=event.target.name;
        let value=event.target.value;
        setDetails({...details,[name]:value})
        
    }
    const submitHandler=event=>{
        event.preventDefault();
        Login(details);
    }
        
    return  (
        <div>
            <form onSubmit={submitHandler} className="form">
            
            <div className="form-inner">
                <h2>Login</h2>
                {(error!="")?<div>{error}</div>:""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={handleChance}></input>
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={handleChance}></input>
                </div>
               {(stateCompany)?
                   <div className="form-group">
                  <label htmlFor="companyNo">CompanyNo:</label>
                  <input type="number" name="companyNo" id="companyNo" onChange={handleChance}></input>
                 </div>
                :""
               }
                
                  
                
                
                <div className="form-group">
                    <label htmlFor="session">Session:</label>
                    <input type="number" name="session" id="session" onChange={handleChance}></input>
                </div>
                
                
                <input type="submit" value="Submit"></input>
            </div>
        </form>
        {state.users.map((user)=>
        <h4 key={user.id}>{(user.Name==details.name)?setStateCompany(true):setStateCompany(false)}</h4>
        )
        
        }
        </div>
        

    )
}

export default LoginForm;