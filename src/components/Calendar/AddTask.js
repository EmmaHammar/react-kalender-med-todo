import { useState, useEffect } from 'react';
import SaveData from './SaveData';

function AddTask(props) {
  // {onClickDay ? <AddTask masterArr={masterArr} addTask={ props.addTask } deleteTask={props.deleteTask} doUpdate={props.doUpdate} isUpdate={props.isUpdate} selectedDate={ selectedDate } count={counter} /> : ""}

  const [title, setTitle] = useState('');
  let [isAdded, setIsAdded] = useState(false);
 
  let newTask = { 
    date: props.selectedDate.selectedDate, //not object
    title: title,
    isFinish: false
  };

  const handleChange = (evt) => {
    // console.log("känner av skriver i inputfält:", evt.target.value);
    setTitle(evt.target.value)
  }

  const onSubmit = (evt) => {
    // console.log("saveBtn klick med task:", title);
    setIsAdded(true);
    SaveData(newTask);
    // console.log("newTask", newTask);
    props.addTask(newTask) //kallar på funktionen addTask() i app.js
    props.counter() //FEL denna funkar ej, händer inget. Ska köra counter() i MyCalendar
    evt.preventDefault();
  }

  useEffect( () => {
    console.log("isAdded har ändrats till true");
    //FIXA skicka isAdded true till parent MyCalendar - HUR?
  }, [isAdded]);
    
  return (
    <div>
      <h3>Lägg till ny uppgift med deadline: {props.selectedDate.selectedDate}</h3>
      <form onSubmit={ onSubmit }>
          <input type="text" placeholder="Skriv ny uppgift" value={ title } onChange={ handleChange }></input>
          <button type="submit" id="saveBtn">Spara</button>
      </form>
      {isAdded ? "Du har lagt till en ny uppgift!" : ""}
      {/* {cb(isAdded)} */}
    </div>
  );
}
  
export default AddTask;

    //skicka signal till parent(MyCalendar -> App o ner till Tasklist) för att kunna rendera om MasterTasklist