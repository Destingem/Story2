import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect } from 'react';
import React from 'react';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];
async function getData(){
  const response = await fetch("https://react-api-test-8bcb9-default-rtdb.europe-west1.firebasedatabase.app/meals/-MsyszHlUYA9zCLURKEG.json")
  console.log(response);
  const data = await response.json()
  console.log(data);
}
async function postData(){
  fetch("https://react-api-test-8bcb9-default-rtdb.europe-west1.firebasedatabase.app/meals.json", {
    method: "POST",
    body: JSON.stringify(DUMMY_MEALS)
  })
}
 
const AvailableMeals = () => {
 const [data, setData] = React.useState([])
  useEffect( ()=>{
    async function getData(){ 
      const response = await fetch("https://react-api-test-8bcb9-default-rtdb.europe-west1.firebasedatabase.app/meals/-MsyszHlUYA9zCLURKEG.json")
      console.log(response);
      const datas = await response.json()
      console.log(datas);
      setData(datas)
    }
    getData()
    
  }, [])
  const mealsList = data.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
