import { useState, useEffect } from 'react';

import GetList from './components/Data/GetList';
import DeleteTask from './components/Data/DeleteTask';
import SaveTask from './components/Data/SaveTask';
import GetHolidays from './components/Data/GetHolidays';

import Header from './components/Header/Header';
import Calendar from './components/Calendar/Calendar';
import MasterList from './components/MasterList/MasterList';
import Footer from './components/Footer/Footer';


function App() {

  const [masterList, setMasterList] = useState([]); //db-data
  const [holidayList, setHolidayList] = useState([]);
  
  useEffect( () => {
    //hämta
    GetList( (data) => {
      //spara
      setMasterList(data);
    })
  }, []) 

  // useEffect( () => {
  //   //hämta
  //   GetHolidays( (data) => {
  //     //spara
  //       setHolidayList(data)
  //   })
  // }, []); 

  // console.log("masterList App.js", masterList);

  //spara ny task i db (children kallar på addTask-funktion):
  const addTask = (title, selectedDate) => {
    let newTaskInfo = { 
      date: selectedDate, 
      title: title,
      isFinish: false,
      id: Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) 
    };
    // console.log("newTaskInfo", newTaskInfo);

    //hämta+ändra statet 
    const newMasterList = {...Object.values(masterList), newTaskInfo}
    // console.log("newMasterList", newMasterList); //newTaskInfo har ej array-/indexnr - gör det ngt?
    
    // spara state masterList
    setMasterList(newMasterList);

    //spara i db
    SaveTask(newTaskInfo); //spara i db
  };
  
  // //ta bort checkad task i db (children kallar på den):
  const deleteTask = (taskId) => {
    // console.log("deleteTask i App.js", taskId);

    //kopiera (hämta)
    const masterListCopy = {...Object.values(masterList)}

    //ändra - hitta id:ets indexnr:
    const findIndex = Object.values(masterListCopy).findIndex(obj => obj.id === taskId);
    // console.log("findIndex", findIndex);

    delete masterListCopy[findIndex]; //ta bort tasken
    // console.log("deleted masterListCopy", masterListCopy);

    //spara
    setMasterList(masterListCopy)

    let deleteTaskInfo = { 
      id: taskId
    };

    //ta bort i db
    DeleteTask(deleteTaskInfo);
  }; 

  return (
  <>
    <Header />
    <Calendar masterList={masterList} addTask={addTask} deleteTask={deleteTask} holidayList={holidayList}/>
    <MasterList masterList={masterList} deleteTask={deleteTask}/>
    <Footer />
 </>
  );
}

export default App;