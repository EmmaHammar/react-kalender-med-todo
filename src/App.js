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

  const [isTaskUpdate, setisTaskUpdate] = useState(false);

  const [newArray, setNewArr] = useState(false); 

  const [newTask, setNewTask] = useState("");

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
    // console.log("state masterArr utan new Task - rätt", masterArr);

    setNewTask(newTask);
    // console.log("state newTask utan masterArr - rätt", newTask);

    //hämta+ändra statet 
    const newMasterArr = {...Object.values(masterArr), newTask}
    // console.log("HÄR newMasterArr", newMasterArr); // newTask är tillagd men istället för indexnr så heter den newTask 
    
    // spara state
    setMasterArr(newMasterArr)
    // console.log("masterArr efter newTask tillagd???", masterArr); 

  } 
  
  //ta bort checkad task i db (children kallar på den):
  const deleteTask = (task) => {
    console.log("task in till post - ID ÄR TOMT", task); 
    UpdateCheckbox(task); //tar bort från db
            //ändra - hitta index o splice

            // console.log("state masterArr innan findIndex", masterArr);
            // console.log("task.id - funkar:", task.id);
            const masterArrCopy = {...Object.values(masterArr)}

            
            console.log("findIndexArr", masterArrCopy);

            const findIndex = Object.values(masterArrCopy).findIndex(obj => obj.id === task.id)


            console.log("ta bort denna - rätt:", masterArrCopy[findIndex].id);


            delete masterArrCopy[findIndex]; //remove task with id
            console.log("masterArrCopy efter delete task - rätt", masterArrCopy);

            setMasterArr(masterArrCopy);

            //splice a copy
            // console.log("findIndex - funkar", findIndex);

            // const masterArr = prevState.masterArr.splice(findIndex, 1)

            // const masterArrRemoved = masterArrCopy.splice(findIndex, 1)

            // console.log("HÄRHÄR masterArrRemoved:", masterArrRemoved);
            


            


    
            // 
            // console.log("masterArr efter  remove:", masterArr);
            // setDoUpdate(!doUpdate)
    
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
