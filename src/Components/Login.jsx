import React, {useState} from "react";
import Button from '@mui/material/Button';
import { Container, Stack, TextField, ThemeProvider} from "@mui/material";
import { useNavigate } from "react-router-dom";
import theme from "../Theme/loginTheme";

const Login =() => {
    const navigate=useNavigate();
    const [userName, setUsername] = useState('');
    const [password, setPass] = useState('');

    const [message, setMessage] = useState('')
        
    //creating a function handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault();//prevent from reloading the page
        setMessage(`username: ${userName}, password: ${password}`);
    }

    const resetForm = (event) => {
        event.preventDefault();//prevent from reloading the page
        setUsername('');
        setPass('');  
      }

    return(
        <>
        <ThemeProvider theme = {theme}>
            <Container component="form" sx={{ width: 300, height:300, mt: 20, p:5, border: '1px dashed grey'}} onSubmit={handleSubmit} className="form-container">
                <TextField margin="1" label="Username" variant="outlined" type="text" value={userName} onChange={event => setUsername(event.target.value)} name="userName" required/>
                <TextField margin="1" label="Password" variant="outlined"  type="Password" value={password} onChange={event => setPass(event.target.value)} name="password" required/>
                <Stack class="form-button" direction="row" justifyContent="space between" alignItems="center" >
                    <Button variant= "outlined"  type="submit"onClick={() => navigate("/Home")}>Log In</Button>
                    <Button variant= "outlined"  type="clear" onClick={resetForm}>Clear</Button>
                </Stack>
            </Container>
        </ThemeProvider>
        </>
    )
}
export default Login;