import React, {useState} from "react";
import Button from '@mui/material/Button';
import { Container, Stack, TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";
// import "./css/login.css";

const Login =() => {
    const navigate=useNavigate();
    const [userName, setuserName] = useState('');
    const [password, setPass] = useState('');

    const [message, setMessage] = useState('')
        
    //creating a function handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault();//prevent from reloading the page
        setMessage(`username: ${userName}, password: ${password}`);
    }

    const resetForm = (event) => {
        event.preventDefault();//prevent from reloading the page
        setuserName('');
        setPass('');  
      }

    return(
        <>
            <Container component="form" sx={{ width: 300, height:300, mt: 20, p:5, border: '1px dashed grey'}} onSubmit={handleSubmit} className="form-container">
                <TextField sx={{m:1}} label="Username" variant="outlined" type="text" value={userName} onChange={event => setuserName(event.target.value)} name="userName" required/>
                <TextField sx={{m:1}} label="Password" component="form" variant="outlined"  type="Password" value={password} onChange={event => setPass(event.target.value)} name="password" required/>
                <Stack class="form-button" direction="row" justifyContent="space between" alignItems="center" >
                    <Button variant= "outlined" size="small" type="submit"onClick={() => navigate("/Home")}>Log In</Button>
                    <Button variant= "outlined" size="small" type="clear" onClick={resetForm}>Clear</Button>
                </Stack>
            </Container>
        </>
    )
}
export default Login;