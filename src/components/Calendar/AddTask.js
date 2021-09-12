import { useState, useEffect } from 'react';

function AddTask(props) {

  const [title, setTitle] = useState('');
  const [masterArr, setMasterArr] = useState([]);

  const [doUpdate, setDoUpdate] =useState(false);
  const [isUpdate, setIsUpdate] =useState(props.isUpdate);
 
  let newTask = { 
    date: props.selectedDate, 
    title: title,
    isFinish: false,
    id: Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) 
  };

  //visa text i input:
  const handleChange = (evt) => {
    setTitle(evt.target.value)
  }

  //klick spara-btn:
  const handleClick = (evt) => {
    props.addTask(newTask) //kallar på funktionen addTask() i app.js som ska spara i db 
  }
    
  return (
    <div>
      <h3>Lägg till ny uppgift med deadline: {props.selectedDate}</h3>
      <div>
          <input type="text" placeholder="Skriv ny uppgift" value={ title } onChange={ handleChange }></input>
          <button onClick = { handleClick } type="submit" id="saveBtn">Spara</button>
      </div>
    </div>
  );
}
  
export default AddTask;