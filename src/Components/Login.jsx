import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import "./login.css";

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
        <div className="form-container">
            <form action="" onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" value={userName} onChange={event => setuserName(event.target.value)} name="userName"/>
                <label>Password:</label>
                <input type="Password" value={password} onChange={event => setPass(event.target.value)} name="password"/>
                <div class="form-button">
                    <button type="submit"onClick={() => navigate("/Home")}>Log In</button>
                    <button type="clear" onClick={resetForm}>Clear</button>
                </div>
            </form>
        </div>
        <div className="display-container">
            <h2>User Details:</h2>
            <p>{message}</p>
        </div>
        </>
    )
}
export default Login;