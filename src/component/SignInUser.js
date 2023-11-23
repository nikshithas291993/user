import React, { useState ,useContext } from "react";
import SignInForm from "./SignInForm";
import { Alert, Snackbar } from "@mui/material";
import { signInApi } from "../../../container/src/api-helper/frontend/util";
import { useNavigate } from "react-router-dom";
//import SharedContext from "../../../container/src/context/Shared";
const SignInUser = () =>{
        //const sharedContext = useContext(SharedContext);
        const navigate = useNavigate();
        const [message, setMessage] = useState(null);
        const [showMessage, setShowMessage] = useState(null);
        const[open, setOpen] = useState(false);
        const getFormdata = (data) =>{
            signInApi(data).then((value) =>{
                const userData = {
                    username: 'Nikshitha',
                  };
                if(!value.error){
                    localStorage.setItem('userData', JSON.stringify(userData));
                    navigate("/");
                    setShowMessage(value.error)
                    setOpen(true)
                    setMessage(value.message)
                }else{
                    setShowMessage(value.error)
                    setOpen(true)
                    setMessage(value.message)
                }
                window.dispatchEvent(new CustomEvent('userLoggedIn', { detail: userData }));
            })
            .then(() => console.log("success"))
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