import React from "react";
import SIgnUpForm from "./SignUpForm";
import { signUpApi } from "../api-helper/frontend/util";
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useAuth } from '../../../container/src/AuthContext';
const SignUpUser = () =>{
    const [message, setMessage] = useState(null);
    const [showMessage, setShowMessage] = useState(null);
    const[open, setOpen] = useState(false);
        const getFormdata = (data) =>{
            signUpApi(data).then((value) =>{
                console.log(value)
                if(!value.error){
                    setShowMessage(value.error)
                    setOpen(true)
                    setMessage(value.message)
                    
                }else{
                    setShowMessage(value.message)
                    setOpen(true)
                    setMessage(value.message)
                }
            })
            .then(() => console.log("succeas"))
            .catch((err) =>console.log(err));

        };
        return <div>
                 {
                !showMessage && (
                    <Snackbar open={open} anchorOrigin={{vertical:"top", horizontal:"center"}}
                    autoHideDuration={1000} 
                    onClose={()=> {
                        setOpen(false);
                    }}>
                        <Alert severity="success">{ message }</Alert>
                    </Snackbar>
                )}
                {
                showMessage && (
                    <Snackbar open={open} anchorOrigin={{vertical:"top", horizontal:"center"}}
                    autoHideDuration={1000} 
                    onClose={()=> {
                        setOpen(false);
                    }}>
                        <Alert severity="error">{ message }</Alert>
                    </Snackbar>
                )}
                <SIgnUpForm onSubmit={getFormdata}/>
            </div>
}

export default SignUpUser;