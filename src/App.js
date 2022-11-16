import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import React, { useState } from "react"
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';





function App() {

  const [currentFoods, setFoods] = useState(foods)

  const foodDataHandler = (x) => {//x IS A PAFRAMETER THAT WE LATER INPUT WITH THE PROP
    console.log(x)
    setFoods((previousState) =>{
      return [...previousState, x]
    })
  }

  const filterHandler = (searchString) =>{
    //console.log(searchString)

    let newArr = foods.filter(food =>{
      return food.name.includes(searchString)
    })
    setFoods(newArr)
  }

  const deleteHandler = (deleteButton) =>{

    const newArr = currentFoods.filter(food =>{
      return food.name != deleteButton
    })

    setFoods(newArr)

  }

  return (
    <div className="App">
      <h1>FOOD LIST</h1>

      {currentFoods.map((foods)=>{
        return (
        <div>
        <p>{foods.name}</p>
        <img src={foods.image} width={100} />
        </div>
        )
      })}

    <h1>CREATE FOOD BOX</h1>

    <FoodBox food={ {
      name: "Orange",
      calories: 85,
      image: "https://i.imgur.com/abKGOcv.jpg",
      servings: 1
    }} />

      <h1>ADD FOOD FORM</h1>
      <AddFoodForm onNewFood={foodDataHandler}/>
      {/* HERE WE ARE PASSING THE PARAMETER FROM THE FORM AS THE INFO ON FOODDATAHANDKLER FUNCTION */}
      <br></br>
      <h1>IMPLEMENT SEARCH BAR</h1>
      <Search onSearch={filterHandler}></Search>


    <h1>RENDER LIST OF FOODBOX COMPPONENTS</h1>

    {currentFoods.map((food)=>{
        return (
        <FoodBox food={food} onDelete={deleteHandler}/>
        )
      })}
    </div>
  );
}

export default App;
