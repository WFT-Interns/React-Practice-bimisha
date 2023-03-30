import { useQuery } from 'react-query';
import { useState } from "react";
import React from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const FoodRecipe = () => {
  const navigate = useNavigate();
  const [food, setFood] = useState('');

  const { isLoading, data } = useQuery(['foodNames', food], () => {
    if (food == food) {
      return axios.get(`https://api.spoonacular.com/food/products/search?query=${food}&apiKey=ff097edd4f6042b082177599d283d9d6`)
    }
  })

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <div className='nav-container'>
        <button type="submit" onClick={() => navigate("/")}>Back</button>
        <div className="search">
          <input type="text" value={food} onChange={(e) => setFood(e.target.value)} placeholder='Enter Food Items' />
        </div>
        {data?.data.products.map(food => {
          return <div key={food.title}>{food.title}</div>
        })}
      </div>
    </>
  )
}
