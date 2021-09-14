import { useState, useEffect } from 'react';

import GetList from './components/Data/GetList';
import DeleteTask from './components/Data/DeleteTask';
import SaveTask from './components/Data/SaveTask';
// import SaveTask from './components/Data/SaveTask'; 
// import UpdateCheckbox from './components/Tasks/UpdateCheckbox'; //DeleteTask
// //GetHolidays


import Header from './components/Header/Header';
import Calendar from './components/Calendar/Calendar';
import MasterList from './components/MasterList/MasterList';
// import MyCalendar from './components/Calendar/MyCalendar'; //Calendar
import Footer from './components/Footer/Footer';


function App() {

  const [masterList, setMasterList] = useState([]); //db-data
  // const [newTask, setNewTask] = useState({}); //bör jag spara newTaskInfo i state eller ej?
  
  useEffect( () => {
    //hämta
    GetList( (data) => {
      //spara
      setMasterList(data);
    })
  }, []) 

  console.log("masterList App.js", masterList);

  // //spara ny task i db (children kallar på den):
  const addTask = (title, selectedDate) => {
    // console.log("hej addTask() app", title);
    //tar emot new title -> skapa ett nytt obje:

    let newTaskInfo = { 
      date: selectedDate, 
      title: title,
      isFinish: false,
      id: Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) 
    };
    console.log("newTaskInfo", newTaskInfo);

    // spara state newTask
    // setNewTask(newTaskInfo)

    //hämta+ändra statet 
    const newMasterList = {...Object.values(masterList), newTaskInfo}
    console.log("newMasterList", newMasterList); //newTaskInfo har ej array-/indexnr - gör det ngt?
    
    // spara state masterList
    setMasterList(newMasterList);

    //spara i db
    SaveTask(newTaskInfo); //spara i db


    
    // 
  } 
  
  // //ta bort checkad task i db (children kallar på den):
  const deleteTask = (taskId) => {
    console.log("deleteTask i App.js", taskId);

    //kopiera (hämta)
    const masterListCopy = {...Object.values(masterList)}

    //ändra - hitta id:ets indexnr:
    const findIndex = Object.values(masterListCopy).findIndex(obj => obj.id === taskId);
    // console.log("findIndex", findIndex);

    delete masterListCopy[findIndex]; //ta bort tasken
    // console.log("deleted masterListCopy", masterListCopy);

    //spara
    setMasterList(masterListCopy)

      //ta bort i db
      DeleteTask(taskId);

  } 

  return (
  <>
    <Header />
    <Calendar masterList={masterList} addTask={addTask}/>
    <MasterList masterList={masterList} deleteTask={deleteTask}/>

  {/* <MyCalendar masterArr={masterArr} addTask={ addTask } deleteTask={deleteTask} /> */}

  {/* <TaskList masterArr={masterArr} addTask={ addTask } deleteTask={deleteTask} />  */}

    <Footer />
 </>
  );
}

export default App;