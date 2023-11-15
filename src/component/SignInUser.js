import React, { useState } from "react";
import SignInForm from "./SignInForm";
import { Alert, Snackbar } from "@mui/material";
import { signInApi } from "../api-helper/frontend/util";
const SignInUser = () =>{
        const [message, setMessage] = useState(null);
        const [showMessage, setShowMessage] = useState(null);
        const[open, setOpen] = useState(false);
        const getFormdata = (data) =>{
            signInApi(data).then((value) =>{
                console.log(value)
                if(!value.error){
                    setShowMessage(value.error)
                    setOpen(true)
                    setMessage(value.message)
                }else{
                    setShowMessage(value.error)
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
                    autoHideDuration={2000} 
                    onClose={()=> {
                        setOpen(false);
                    }}>
                        <Alert severity="success">{ message }</Alert>
                    </Snackbar>
                )}
                {
                showMessage && (
                    <Snackbar open={open} anchorOrigin={{vertical:"top", horizontal:"center"}}
                    autoHideDuration={2000} 
                    onClose={()=> {
                        setOpen(false);
                    }}>
                        <Alert severity="error">{ message }</Alert>
                    </Snackbar>
                )}
                <SignInForm onSubmit={getFormdata}/>
            </div>
}

export default SignInUser;