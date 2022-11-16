import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {

    let foodBox = props.food
    //let foodList = props.food

    const deleteHandler = (event) => {
        props.onDelete(foodBox.name)
    }

  return (
    <Col>
      <Card
        title={foodBox.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={foodBox.image} height={60} alt="food" />
        <p>Calories: {foodBox.calories}</p>
        <p>Servings: {foodBox.servings}</p>
        <p>
          <b>Total Calories: {foodBox.calories * foodBox.servings}</b> kcal
        </p>
        <Button onClick={deleteHandler} type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;

  