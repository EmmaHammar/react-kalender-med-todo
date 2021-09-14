import { useState, useEffect } from 'react';

function AddTask(props) {

  const [title, setTitle] = useState('');
  
  //spara newTask i state newTask:
  const handleChange = (evt) => {
      let newTitle = evt.target.value;
      setTitle(newTitle);
  };

  const handleClick = (evt) => {
    props.addTask(title, props.selectedDate) //kallar på funktionen addTask() i app.js som ska spara i db 
    document.getElementById('input-add-task').value = '';
  };
    
  return (
    <div>
      <h3>Lägg till ny uppgift med deadline: {props.selectedDate}</h3>
      <div>
        <input id='input-add-task' type="text" placeholder="Skriv ny uppgift" onChange={handleChange}></input>
          <button onClick = { handleClick }id="saveBtn">Spara</button>
      </div>
    </div>
  );
};
  
export default AddTask;