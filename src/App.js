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

  useEffect( () => {
    //hämta
    GetHolidays( (data) => {

      for (let i in data) {
          if(data[i]['röd dag'] === "Ja") {
              holidayList.push(data[i].datum)
          }
      }
      
      //spara
      setHolidayList(holidayList)
    })
  }, []); 

  //spara ny task i db (children kallar på addTask-funktion):
  const addTask = (title, selectedDate) => {
    let newTaskInfo = { 
      date: selectedDate, 
      title: title,
      isFinish: false,
      id: Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) 
    };

    //hämta+ändra statet 
    const newMasterList = {...Object.values(masterList), newTaskInfo}
    
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

    delete masterListCopy[findIndex]; //ta bort tasken

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