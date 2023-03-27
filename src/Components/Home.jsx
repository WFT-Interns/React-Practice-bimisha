import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home =() => {
  const navigate=useNavigate();
  const Data = require("../Data/users.json");

  return (
    <>
        <div className='nav-container'>
            <button type="submit" onClick={() => navigate("/")}>Back</button>
            <button type="submit" onClick={() => navigate("/")}>Next</button>
        </div>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
            {
            Data.users.map((list)=>(
                <tr>
                  <td>{list.name}</td>
                  <td>{list.age}</td>
                  <td>{list.email}</td>
                </tr>
              ))
            }
        </table>
    </>
  )
}

export default Home
