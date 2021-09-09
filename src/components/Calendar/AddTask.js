import { useState, useEffect } from 'react';
import SaveData from './SaveData';

function AddTask(props) {
  // {onClickDay ? <AddTask masterArr={masterArr} addTask={ props.addTask } deleteTask={props.deleteTask} doUpdate={props.doUpdate} isUpdate={props.isUpdate} selectedDate={ selectedDate } count={counter} /> : ""}

  const [title, setTitle] = useState('');
  const [doUpdate, setDoUpdate] =useState(props.doUpdate);
  const [isUpdate, setIsUpdate] =useState(props.isUpdate);
  const [count, setCount] = useState(props.count);


  let [isAdded, setIsAdded] = useState(false);
 
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
    setIsUpdate(true);
    props.addTask(newTask) //kallar på funktionen addTask() i app.js som ska spara i db

    //spara i db

    // console.log("saveBtn klick med task:", title);
    // setIsAdded(true);
    // SaveData(newTask);
    // console.log("newTask", newTask);
    
    props.counter() //FEL denna funkar ej, händer inget. Ska köra counter() i MyCalendar

    evt.preventDefault();
  }

  useEffect( () => {
    console.log("isAdded har ändrats till true");
    //FIXA skicka isAdded true till parent MyCalendar - HUR?
  }, [isAdded]);
    
  return (
    <div>
      <h3>Lägg till ny uppgift med deadline: {props.selectedDate}</h3>
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