// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import React, { useState } from "react"

   
  






// Iteration 4
function AddFoodForm(props) {

    const [name, setName] = useState("") //WE USE USESTATE TO BE ABLE TO CHANGE THE STATE OF THE INPUT AS THE USER TYPES
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

    const nameChangeHandler = (event) => {
        setName(event.target.value) // THIS FUNCTION USES A REACT METHO THAT LISTENS TO THE ONCHANGE EVENT LISTENER CALLED ON THE FORM
    }
    const imageChangeHandler = (event) => {
        setImage(event.target.value)
    }
    const caloriesChangeHandler = (event) => {
        setCalories(event.target.value)
    }
    const servingsChangeHandler = (event) => {
        setServings(event.target.value)
    }

    //SUBMIT BUTTOM

    const submitHandler = (event) => {//NO NEED TO SPECIFY EVENT ON SUBMIT BUTTON BECAUSE IT ALREADY CONTAINS THIS ON THE FORM HTML 
        event.preventDefault()
    
        const newFood = {
          name: name,
          image: image,
          calories:calories,
          servings:servings,
        }
    
        console.log(newFood)
        props.onNewFood(newFood)//THIS IS THE WAY WE PASS THE NEW OBJECT UP ON THE TREE
    
        setName("")
        setImage("")
        setCalories("")
        setServings("")
      }

  return (
    <form onSubmit={submitHandler}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={nameChangeHandler} />

      <label>Image</label>
      <Input value={image} type="text" onChange={imageChangeHandler} />

      <label>Calories</label>
      <Input value={calories} type="text" onChange={caloriesChangeHandler} />

      <label>Servings</label>
      <Input value={servings} type="text" onChange={servingsChangeHandler} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
