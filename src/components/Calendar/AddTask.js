import { useState, useEffect } from 'react';
import SaveData from './SaveData';

function AddTask(selectedDate) {

  const [title, setTitle] = useState('');
  let [isAdded, setIsAdded] = useState(false);

  let newTask = { 
    date: selectedDate.selectedDate, //not object
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
    evt.preventDefault();
  }

  useEffect( () => {
    console.log("isAdded har ändrats till true");
  }, [isAdded]);
    
  return (
    <div>
      <h3>Lägg till ny uppgift med deadline: {selectedDate.selectedDate}</h3>
      <form onSubmit={ onSubmit }>
          <input type="text" placeholder="Skriv ny uppgift" value={ title } onChange={ handleChange }></input>
          <button type="submit" id="saveBtn">Spara</button>
      </form>
      {isAdded ? "Du har lagt till en ny uppgift!" : ""}
    </div>
  );
}
  
export default AddTask;