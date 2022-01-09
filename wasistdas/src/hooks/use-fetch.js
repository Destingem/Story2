import React from "react"
import {useState, useEffect} from "react"

function useFetch(props){
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tasks, setTasks] = useState([]);
  

    useEffect(() => {
      enterTaskHandler();
    }, []);
  
    const taskAddHandler = (task) => {
      setTasks((prevTasks) => [task, ...prevTasks]);
    };



    console.log("Use fetch running ");
    console.log(props);
    const enterTaskHandler = async (taskText) => {
      setIsLoading(true);
      setError(null);
      try {
          if (props.method === "POST") {
              console.log("POST");
            var response = await fetch(
                'https://react-api-test-8bcb9-default-rtdb.europe-west1.firebasedatabase.app/movies.json',
                {
                  method: props.method,
                  body: JSON.stringify({ text: taskText }),
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              )
              }
              else if(props.method === "GET"){
                var response = await fetch(
                  'https://react-api-test-8bcb9-default-rtdb.europe-west1.firebasedatabase.app/movies.json')
              }
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        var data = await response.json();
  
        if (props.method === "POST") {
            console.log("POST");
            var generatedId = data.name; // firebase-specific => "name" contains generated id
        var createdTask = { id: generatedId, text: taskText };
  
        props.onAddTask(createdTask);
        } else if (props.method === "GET"){
            console.log("GET");
            var loadedTasks = [];
            
            for (var taskKey in data) {
              loadedTasks.push({ id: taskKey, text: data[taskKey].text });
            }
            console.log("Loaded Tasks " + loadedTasks);
            console.log(loadedTasks);
            loadedTasks = loadedTasks.reverse()
            setTasks(loadedTasks);
        }
      
        response = undefined
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    }
    return {taskAddHandler, tasks, isLoading, error, enterTaskHandler}
}
export default useFetch