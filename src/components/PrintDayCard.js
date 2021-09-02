// const data = require('../data/taskInfo.json');
import { useState, useEffect } from 'react';


function PrintDayCard() {

  let [addedNewTask, setAddedNewTask] = useState(false);

  // const [newTask, onChange] = useState('');
  const [title, setTitle] = useState('');

  useEffect( () => {
    // console.log("useeffect");
  }, [addedNewTask]);
    
  const handleChange = (evt) => {
  // console.log("evt", evt.target.value);
  setTitle(evt.target.value)
  }

  const onSubmit = (evt) => {
  //  console.log("hej från onsubmit", evt);
  console.log("uppdaterat statet för title fr onSubmit", title);
  // console.log("evt", evt);

  let newTask = { 
    date: "2021-11-17T09:00:00.000+00:00",
    title: title,
    isFinish: false
  };

  fetch(`http://localhost:3010/task/add`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(newTask)
  })
  .then(data => data.json())
  .then(res => {
      console.log("res from post fetch:", res);
      setAddedNewTask(true);
  });

    evt.preventDefault();
  }

  return (
    <div>
      <h3>Lägg till ny uppgift</h3>
      <form onSubmit={ onSubmit }>
          <input type="text" placeholder="Skriv ny uppgift" value={ title } onChange={ handleChange }></input>
          <button type="submit" id="saveBtn">Spara</button>
      </form>
      {addedNewTask ? "Du har lagt till en ny uppgift!" : ""}
    </div>
  );
}
  
export default PrintDayCard;



    // console.log(data);
    //jämföra klickade datumet med data[i].date i json:
    //använda moment för att få ut year + month? 
    // console.log(data[0].date);
