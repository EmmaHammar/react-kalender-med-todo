import { useState, useEffect } from 'react';
import SaveData from './SaveData';

function AddTask(props) {
  // {onClickDay ? <AddTask masterArr={masterArr} addTask={ props.addTask } deleteTask={props.deleteTask} doUpdate={props.doUpdate} isUpdate={props.isUpdate} selectedDate={ selectedDate } count={counter} /> : ""}

  const [title, setTitle] = useState('');
  const [masterArr, setMasterArr] = useState([]);

  const [doUpdate, setDoUpdate] =useState(false);
  const [isUpdate, setIsUpdate] =useState(props.isUpdate);

  //blir error av denna:
  // const [count, setCount] = useState(props.count);

  //state endast i denna funktion som printar text om sparat task:
  const [saved, setSaved] = useState(false);
 
  let newTask = { 
    date: props.selectedDate, //not object
    title: title,
    isFinish: false
  };

  //visa text i input:
  const handleChange = (evt) => {
    setTitle(evt.target.value)
  }

  //klick spara-btn:
  const onSubmit = (evt) => {
    props.addTask(newTask) //kallar på funktionen addTask() i app.js som ska spara i db 
    
    //uppdatera masterArr med nya statet:
    const masterArr = {...masterArr}

    //hämta+ändra statet 
    const newMasterArr = {...masterArr, ...newTask}
    
    // spara state
    setMasterArr(masterArr)
    console.log("masterArr i AddTask", masterArr);

    // setSaved(!saved);

    evt.preventDefault();
  }

  // useEffect( () => {
  //   console.log("isAdded har ändrats till true");
  // }, [saved]);
    
  return (
    <div>
      <h3>Lägg till ny uppgift med deadline: {props.selectedDate}</h3>
      <form onSubmit={ onSubmit }>
          <input type="text" placeholder="Skriv ny uppgift" value={ title } onChange={ handleChange }></input>
          <button type="submit" id="saveBtn">Spara</button>
      </form>
      {/* {saved ? "Du har lagt till en ny uppgift!" : "Du har inte lagt till"} */}
    </div>
  );
}
  
export default AddTask;