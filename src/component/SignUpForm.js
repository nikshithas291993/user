import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const SIgnUpForm = ({ data, onSubmit})=>{
    const [inputs,setInputs] = useState(
        {
            email: "",
            user_id:"",
            name:"",
            password:"",
            age:"",
            address:"",
            phone:"",
            confirm_password:""
        }
    );
    const handleChange=(e) =>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }));
    };
    const defaultTheme = createTheme();
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputs);
        onSubmit(inputs)
    }
    return(
        <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField onChange={handleChange}
                    autoComplete="given-name"
                    name="user_id"
                    required
                    fullWidth
                    id="user_id"
                    label="User Id"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField onChange={handleChange}
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField onChange={handleChange}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField onChange={handleChange}
                    required
                    fullWidth
                    id="age"
                    label="age"
                    name="age"
                    type="number"
                    autoComplete="age"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField onChange={handleChange}
                    required
                    fullWidth
                    name="address"
                    label="Address"
                    id="address"
                    autoComplete="address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField onChange={handleChange}
                    required
                    fullWidth
                    id="phone"
                    label="Phone"
                    name="phone"
                    type="number"
                    autoComplete="phone"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField onChange={handleChange}
                    required
                    fullWidth
                    name="password"
                    label="New Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField onChange={handleChange}
                    required
                    fullWidth
                    name="confirm_password"
                    label="Confirm Password"
                    type="password"
                    id="confirm_password"
                    autoComplete="confirm-password"
                  />
                </Grid>
                
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href={'/signin'}  variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
}

export default SIgnUpForm;