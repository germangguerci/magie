import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import SignInFormik from '../components/Login/SignInFormik'


export const LogOut = () => ( <Route path="/logout" render={() => 
    {
        var checklogin = window.localStorage.getItem("loggedin");
        if (checklogin === "true"){
            window.localStorage.setItem("tokenkey", "");
            window.localStorage.setItem("loggedin", "false")
            console.log("Loggedout: ", checklogin)
        }
        else{
            console.log("cant logout if you prev dont login")
        }
    }     
} />)

export const LogIn = () => ( <Route path="/login" render={() => 
    {
        var checklogin = window.localStorage.getItem("loggedin");
        if (checklogin === "true"){
            return <Redirect to="/" />
        }
        else{
            return <SignInFormik />
        }
    }     
} />)
    
