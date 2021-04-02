import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import {AppContext} from "../context/AppContext";


const LoginForm = ({Login,error}) => {
    const {state}=useContext(AppContext);

    const [details, setDetails] = useState({
        name: "",
        password: "",
        companyNo: "",
        session: "",
    });
    const [stateCompany, setStateCompany] = useState(false);
    const [stateFirma, setStateFirma] = useState(false);

    

    useEffect(() => {
        if(state.length){
        if (
            state[0].Name == details.name &&
            state[0].password == details.password
        )
            setStateFirma(true);
        else setStateFirma(false);
        if (
            state[0].Name == details.name &&
            state[0].password == details.password &&
            state[0].companyNo == details.companyNo
        )
            setStateCompany(true);
        else setStateCompany(false);
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
                    {stateFirma ? (
                        <div className="form-group">
                            <label htmlFor="companyNo">CompanyNo:</label>
                            <input
                                type="number"
                                name="companyNo"
                                id="companyNo"
                                onChange={handleChance}
                            ></input>
                        </div>
                    ) : (
                        ""
                    )}

                    {stateCompany ? (
                        <div className="form-group">
                            <label htmlFor="session">Session:</label>
                            <input
                                type="number"
                                name="session"
                                id="session"
                                onChange={handleChance}
                            ></input>
                        </div>
                    ) : (
                        ""
                    )}

                    <input type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
