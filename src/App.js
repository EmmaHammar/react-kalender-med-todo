import { useState, useEffect } from 'react';

import GetMasterData from './components/Tasks/GetMasterData';
import Header from './components/Header/Header';
import MyCalendar from './components/Calendar/MyCalendar';
import TaskList2 from './components/Tasks/TaskList2';
import Footer from './components/Footer';

function App() {

    const [masterArr, setMasterArr] = useState('');
    // const [dataUpdate, setDataUpdate] = useState(false);

    //Testa göra separata states för varje object i db?
    const [id, setId] = useState('');
    // const [title, setTitle] = useState('');
    // const [isFinish, setFinish] = useState('');
    // const [data, setDate] = useState('');

    // getMasterArr.map( (task, index) => (moment(day).format("YYYY-MM-DD") === task.date) ? <div key={index}>1 deadline</div> : "")

    useEffect( () => {
      GetMasterData( (data) => {
        // console.log("MasterData:", data[0]);

        setMasterArr(data[0]);
      })
    }, []) 

    //testa uppdatera db o state samtiidgt
    const addTask = (task) => {
      //hämta state
      const masterArr = {...masterArr}

      //ändra
      const newMasterArr = {...masterArr, ...task}

      //spara
      setMasterArr(newMasterArr);

    } 
    // console.log("Här är masterArr-statet kopia av db:", masterArr);
    

  return (
    <>
      <Header />
      <MyCalendar masterArr={masterArr} addTask={ addTask }/>
      <TaskList2 masterArr= {masterArr} id={ id }  />
      <Footer />
    </>
  );
}

export default App;

//vill uppdatera isAdded från AddTask > MyCalendar > App => TaskList omrenderas o ny task syns i listan