import { useState, useEffect } from 'react';

import GetMasterData from './components/Tasks/GetMasterData';
import Header from './components/Header/Header';
import MyCalendar from './components/Calendar/MyCalendar';
import Footer from './components/Footer';
import SaveData from './components/Calendar/SaveData';


import TaskList2 from './components/Tasks/TaskList2';


function App() {

  //STATES
  const [masterArr, setMasterArr] = useState([]); //db-data
  const [doUpdate, setDoUpdate] = useState(false); //togglas fullösning omrendering setDoUpdate(!doUpdate);
  const [isFinish, setFinish] = useState(false); //? om checkbox är checked?
  const [isUpdate, setisUpdate] = useState(false); // vad gör denna?

  useEffect( () => {
    GetMasterData( (data) => {
      console.log("GetMasterData() till App:", data); //denna görs 1 gång=Rätt
        setMasterArr(data);
    })
  }, []) 
  // }, [masterArr]) 

  //Children kallar på dessa?
  //SaveData()
  //AddTask()
  //DeleteTask()

  // SaveData ( (data) => {
  //   //kallar på komponenten SaveTask
  // })

  // const saveTask = (task) => {
  //   console.log("spara data");
  // }


  //kopiera nuvarande state -> lägga till nytt state fr child -> uppdatera till nya statet:
  const addTask = (newTask) => {

    console.log("addTask() körs i app");
    SaveData(newTask);
  

    // //hämta state
    // const masterArr = {...masterArr}

    // //ändra
    // const newMasterArr = {...masterArr, ...task}

    // //spara - vilken ska det vara?
    // setMasterArr(newMasterArr);
    // // setAdded(true);
  } 
      
  //Leta efter indexnr för task som är checkad -> ta bort det indexnr från arrayen -> uppdatera till nya statet:
  const deleteTask = (task) => {

    //hämta state
    console.log("task fr deleteTask app.js:", task);

    console.log("task.id", task.id);
    
    //ändra - hitta index o splice
    const findIndex = masterArr.findIndex(obj => obj._id === task.id)
    // console.log("findIndex", findIndex);

    const splicedArr = masterArr.splice(findIndex, 1);
    console.log("masterArr efter splice i deleteTask app.js", masterArr);
    
    //spara - vilken ska det vara?
    // setMasterArr(masterArr);
    setFinish(true); //när sätts den till false förutom vid omrendering? 
  } 

  return (
    <>
      <Header />

      <MyCalendar masterArr={masterArr} addTask={ addTask } deleteTask={deleteTask} doUpdate={doUpdate} isUpdate={isFinish} />

      {setFinish ? <TaskList2 masterArr= {masterArr} deleteTask={ deleteTask} doUpdate={doUpdate} /> : ""  }
      {/* {<TaskList2 masterArr= {masterArr} deleteTask={ deleteTask}/>} */}



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
