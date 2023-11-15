import React from "react";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SigninUser from "./SignInUser";
import SignUpUser from "./SignUpUser";
const UserContainer = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/signin" element={<SigninUser />} />
                <Route path="/signup" element={<SignUpUser />} />
            </Routes>
        </Router>
    )
}
  
export default UserContainer;