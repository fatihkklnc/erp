import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";


const LoginForm = ({ Login, error }) => {
    const { state } = useContext(AppContext);

    const [details, setDetails] = useState({
        name: "",
        password: "",
        companyNo: "",
        session: "",
    });
    const [stateCompany, setStateCompany] = useState(false);
    const [stateSession,setStateSession] = useState(false);



    useEffect(() => {
        if (state.length) {
            state.map((user) => {
                if (
                    user.Name == details.name  &&
                    user.password == details.password
                )
                    setStateCompany(true);
                
                    
                    
                 if (
                    user.Name == details.name  &&
                    user.password == details.password &&
                    user.companyNo  == details.companyNo
                )
                 setStateSession(true); 
                
                    
                
                

            }

            )


        }

    }, [details]);



    const handleChance = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setDetails({ ...details, [name]: value });
    };
    const submitHandler = (event) => {
        event.preventDefault();
        Login(details);
    };

    return (
        <div>
            <form onSubmit={submitHandler} className="form">
                <div className="form-inner">
                    <h2>Login</h2>
                    {error != "" ? <div>{error}</div> : ""}
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleChance}
                        ></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={handleChance}
                        ></input>
                    </div>
                    {stateCompany? (
                        <div className="form-group">
                            <label htmlFor="companyNo">CompanyNo:</label>
                            <input
                                type="number"
                                name="companyNo"
                                id="companyNo"
                                onChange={handleChance}
                            ></input>
                        </div>
                    ) :""
                        
                    }

                    {stateSession? (
                        <div className="form-group">
                            <label htmlFor="session">Session:</label>
                            <input
                                type="number"
                                name="session"
                                id="session"
                                onChange={handleChance}
                            ></input>
                        </div>
                    )  :""
                        
                    }

                    <input type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
