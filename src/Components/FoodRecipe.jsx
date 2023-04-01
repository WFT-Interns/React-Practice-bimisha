import { useQuery } from 'react-query';
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import instance from '../config/axios.config';
import { Container, Button, TextField} from "@mui/material";

export const FoodRecipe = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState(null);

  const { isLoading, error, data } = useQuery(['foodNames', searchTerm], async () => {
    if (searchTerm != '') {
      const response = await instance.get(`/api/recipes/v2?q=${searchTerm}`);
      console.log(10, 'api call');
      setSearchTerm('');
      setResponseData(response.data.hits);
    
    }
  });
  const handleButtonClick = () => {
    console.log(2, inputValue)
    setSearchTerm(inputValue)
    setInputValue('');
  }
 

  return (
    <>
      <Container display="flex" className="nav-container" sx={{ width: 600, height: 100, mt: 5, border: "1px dashed grey",bgcolor:"white" }} >
        <Button variant= "outlined"  type="submit"onClick={() => navigate("/Home")}>Back</Button>
        <TextField label="Enter food item" variant="outlined" type="text" value={inputValue} onChange={event =>  setInputValue(event.target.value)} required/>
        <Button variant= "outlined"  type="submit" onClick={handleButtonClick}>Search</Button>
        {isLoading &&  <h2>Loading...</h2>}
        {error && <h2>Error: {error.message}</h2>}
        {responseData && console.log(4, responseData)}
        {responseData && responseData.map((item) => (
        //console.log(3, item)
        <div  key={item.recipe.label}>
            <h2>{item.recipe.label}</h2>
            <h2>{item.recipe.calories}</h2>
        </div>
        ))}
       
      </Container>
    </>
  )
}
