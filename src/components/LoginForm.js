import React, { useState,useContext,useEffect } from 'react'
import axios from 'axios'
import {HomeContext} from '../providers/HomeContext'
const LoginForm=()=> {
    
    const {Login,error,adminUser,state}=useContext(HomeContext);

    const [details,setDetails]=useState({name:"",password:"",companyNo:""})
    const [stateFirma,setStateFirma]=useState(false)
    const [stateCompany,setStateCompany]=useState(false)
    //TODO:inputlardan gelen veri kontrolü arrow ile 
    useEffect(() => {
        
        if(adminUser.name == details.name && adminUser.password==details.password)
        setStateFirma(true)
        else
        setStateFirma(false)
        if(adminUser.name == details.name && adminUser.password==details.password && adminUser.companyNo==details.companyNo)
        setStateCompany(true)
        else
        setStateCompany(false)
        
    }, [details])
    //TODO:state den gelen veri
    useEffect(() => {
        dene();
    }, [])

    const dene =()=>{
        console.log(state)
        
    }
    const handleChance=(event)=>{
        
        let name=event.target.name;
        let value=event.target.value;
        setDetails({...details,[name]:value})
        
    }
    const submitHandler=event=>{
        event.preventDefault();
        Login(details);
    }
    
    return (
        
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
                {(stateFirma)?//girilen kuladı şifreye göre firma no aktif in aktif durumu kontrolü
                  <div className="form-group">
                  <label htmlFor="companyNo">CompanyNo:</label>
                  <input type="number" name="companyNo" id="companyNo" onChange={handleChance}></input>
                 </div>:null
                }
                {(stateCompany)?
                <div className="form-group">
                    <label htmlFor="session">Session:</label>
                    <input type="number" name="session" id="session" onChange={handleChance}></input>
                </div>:null
                }
                
                <input type="submit" value="Submit"></input>
            </div>
        </form>
    )
}

export default LoginForm