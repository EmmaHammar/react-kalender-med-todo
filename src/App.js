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
  const [doUpdate, setDoUpdate] = useState(false); //togglas fullösning omrendering setDoUpdate(!doUpdate);
  const [isFinish, setFinish] = useState(false); //? om checkbox är checked?
  const [isUpdate, setisUpdate] = useState(false); // vad gör denna?

  const [newArray, setNewArr] = useState(false); 

  useEffect( () => {
    GetMasterData( (data) => {
      console.log("GetMasterData() till App:", data); //denna görs 1 gång=Rätt
      setMasterArr(data);
    })
  }, []) 
  // }, [masterArr]) 

  //spara ny task i db (children kallar på den):
  const addTask = (newTask) => {
    SaveData(newTask); //spara i db
  } 
  
  //ta bort checkad task i db (children kallar på den):
  const deleteTask = (task) => {
    UpdateCheckbox(task); //tar bort från db
            //ändra - hitta index o splice
            const findIndex = masterArr.findIndex(obj => obj._id === task.id)
            // console.log("findIndex", findIndex);
    
            const taskToRemove = masterArr.splice(findIndex, 1);
            // console.log("taskToRemove", taskToRemove);
            // console.log("masterArr efter splice:", masterArr);
    
            setMasterArr(masterArr);
            setDoUpdate(!doUpdate)
    
  } 


  return (
    <>
      <Header />

      <MyCalendar masterArr={masterArr} addTask={ addTask } deleteTask={deleteTask} doUpdate={doUpdate} isUpdate={isFinish} />

      <TaskList masterArr={masterArr} addTask={ addTask } deleteTask={deleteTask} doUpdate={doUpdate} isUpdate={isFinish}/> 

      <Footer />
    </>
  );
}

export default App;

//vill uppdatera isAdded från AddTask > MyCalendar > App => TaskList omrenderas o ny task syns i listan

//======
//PROPS
//======

// STATES:
// masterArr = [] innehåller db-data
// isUpdate = false, ???
// isFinish = false, ???
// doUpdate = false, fullösning

//FUNKTIONER som child ska köra:
//addTask = lägga till ny task till db
//deleteTask = ta bort task från db när checkbox klickats
