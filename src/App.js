import { useState, useEffect } from 'react';

import GetMasterData from './components/Tasks/GetMasterData';
import Header from './components/Header/Header';
import MyCalendar from './components/Calendar/MyCalendar';
import TaskList2 from './components/Tasks/TaskList2';
import Footer from './components/Footer';

function App() {

    const [masterArr, setMasterArr] = useState('');
    // const [dataUpdate, setDataUpdate] = useState(false);

    useEffect( () => {
      GetMasterData( (data) => {
        // console.log("MasterData:", data[0]);

        setMasterArr(data[0]);
      })
    }, []) 

    //uppdatera db o state samtidigt - kopiera nuvarande state och lägga i hop med nya state från child och sedan sätta state till ihopslagna statet i parent:
    const addTask = (task) => {
      //hämta state
      const masterArr = {...masterArr}

      //ändra
      const newMasterArr = {...masterArr, ...task}

      //spara
      setMasterArr(newMasterArr);

    } 
    // console.log("Här är masterArr-statet kopia av db:", masterArr);
    
    // // FUNKAR EJ
    const deleteTask = (task) => {

      // ERROR: Uncaught ReferenceError: Cannot access 'masterArr' before initialization 
      //hämta state
      // const masterArr = {...masterArr}
      console.log("task.id", task.id);
      
      //ändra - hitta index o splice? 
      // const newMasterArr = {...masterArr, ...task}
    
      const findIndex = masterArr.findIndex(obj => obj._id === task.id)
      console.log("findIndex", findIndex);

      const splicedArr = masterArr.splice(findIndex, 1);
      console.log("masterArr efter splice", masterArr);
      

      //spara
      setMasterArr(masterArr);


      //   // // ERROR: Warning: Each child in a list should have a unique "key" prop.)
      //   // // hämta state
      //   // const myArr = {...masterArr}

      //   // // ändra
      //   // const newMasterArr2 = {...myArr, ...task}

      //   // // spara
      //   // setMasterArr(newMasterArr2);

    } 

  return (
    <>
      <Header />
      <MyCalendar masterArr={masterArr} addTask={ addTask }/>
      {/* <TaskList2 masterArr= {masterArr} /> */}
      <TaskList2 masterArr= {masterArr} deleteTask={ deleteTask} />

      <Footer />
    </>
  );
}

export default App;

//vill uppdatera isAdded från AddTask > MyCalendar > App => TaskList omrenderas o ny task syns i listan