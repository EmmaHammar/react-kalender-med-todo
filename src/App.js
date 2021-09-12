import { useState, useEffect } from 'react';

import GetMasterData from './components/Tasks/GetMasterData';
import Header from './components/Header/Header';
import MyCalendar from './components/Calendar/MyCalendar';
import Footer from './components/Footer/Footer';
import SaveData from './components/Calendar/SaveData';
import UpdateCheckbox from './components/Tasks/UpdateCheckbox';

import TaskList from './components/Tasks/TaskList';

function App() {

  //STATES
  const [masterArr, setMasterArr] = useState([]); //db-data

  useEffect( () => {
    GetMasterData( (data) => {
      setMasterArr(data);
    })
  }, []) 

  //spara ny task i db (children kallar på den):
  const addTask = (newTask) => {
    SaveData(newTask); //spara i db

    //hämta+ändra statet 
    const newMasterArr = {...Object.values(masterArr), newTask}
    
    // spara state
    setMasterArr(newMasterArr)
  } 
  
  //ta bort checkad task i db (children kallar på den):
  const deleteTask = (task) => {
    UpdateCheckbox(task); //tar bort från db

      //Kopiera
      const masterArrCopy = {...Object.values(masterArr)}

      //hitta indexnr
      const findIndex = Object.values(masterArrCopy).findIndex(obj => obj.id === task.id)

      //remove task with index
      delete masterArrCopy[findIndex]; 

      setMasterArr(masterArrCopy);
  } 

  return (
    <>
      <Header />

      <MyCalendar masterArr={masterArr} addTask={ addTask } deleteTask={deleteTask} />

      <TaskList masterArr={masterArr} addTask={ addTask } deleteTask={deleteTask} /> 

      <Footer />
    </>
  );
}

export default App;