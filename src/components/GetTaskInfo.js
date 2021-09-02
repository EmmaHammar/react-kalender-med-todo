// const data = require('../data/taskInfo.json');
import { useState, useEffect } from 'react';


function GetTaskInfo() {

  // const [newTask, onChange] = useState('');
  const [title, setTitle] = useState('');
    
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
  });


  //insertOne
  // fetch('https://localhost3000/newTask')
  // .then(res => res.json())
  // .then(data => {
  //   console.log("data fr fetch:", data);
  // })

    evt.preventDefault();
  }

  return (
    <form onSubmit={ onSubmit }>
        <input type="text" placeholder="Skriv ny uppgift" value={ title } onChange={ handleChange }></input>
        <button type="submit" id="saveBtn">Spara</button>
    </form>
  );
}
  
export default GetTaskInfo;



    // console.log(data);
    //jämföra klickade datumet med data[i].date i json:
    //använda moment för att få ut year + month? 
    // console.log(data[0].date);
