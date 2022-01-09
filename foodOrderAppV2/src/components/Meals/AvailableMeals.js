import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect } from 'react';
import React from 'react';

async function getData(){
  const response = await fetch("https://react-api-test-8bcb9-default-rtdb.europe-west1.firebasedatabase.app/meals/-MsyszHlUYA9zCLURKEG.json")
  console.log(response);
  const data = await response.json()
  console.log(data);
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
