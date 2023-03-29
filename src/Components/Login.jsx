import React, {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
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
        setMessage('');
        setuserName('');
        setPass('');  
      }

    return(
        <>
            <Box component="form" sx={{"& > :not(style)": {m:1, width:"20ch"}}}onSubmit={handleSubmit} className="form-container">
                <TextField label="Username" variant="outlined" type="text" value={userName} onChange={event => setuserName(event.target.value)} name="userName" required/>
                <TextField label="Password" variant="outlined"  type="Password" value={password} onChange={event => setPass(event.target.value)} name="password" required/>
                <Box class="form-button">
                    <Button variant= "outlined" size="small" type="submit"onClick={() => navigate("/Home")}>Log In</Button>
                    <Button variant= "outlined" size="small" type="clear" onClick={resetForm}>Clear</Button>
                </Box>
            </Box>
        {/* <div className="display-container">
            <h2>User Details:</h2>
            <p>{message}</p>
        </div> */}
        </>
    )
}
export default Login;