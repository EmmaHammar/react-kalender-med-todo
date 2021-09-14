import { useState, useEffect } from 'react';

function AddTask(props) {

    // const [newTask, setNewTask] = useState("");
  const [title, setTitle] = useState('');
//   const [newTask, setNewTask] = useState({});
//   const [masterArr, setMasterArr] = useState([]);

  //spara newTask i state newTask:
  const handleChange = (evt) => {
      let newTitle = evt.target.value;
      setTitle(newTitle);
  };

  const handleClick = (evt) => {
    props.addTask(title, props.selectedDate) //kallar på funktionen addTask() i app.js som ska spara i db 
  }
    
  return (
    <div>
      <h3>Lägg till ny uppgift med deadline: {props.selectedDate}</h3>
      <div>
        <input type="text" placeholder="Skriv ny uppgift" onChange={ handleChange }></input>

          <button onClick = { handleClick }id="saveBtn">Spara</button>

          {/* <input type="text" placeholder="Skriv ny uppgift" value={ title } onChange={ handleChange }></input> */}
          {/* <button onClick = { handleClick } type="submit" id="saveBtn">Spara</button> */}
      </div>
    </div>
  );
}
  
export default AddTask;