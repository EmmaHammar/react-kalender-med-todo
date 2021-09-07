import { useState, useEffect } from 'react';

import GetMasterData from './components/Tasks/GetMasterData';
import Header from './components/Header/Header';
import MyCalendar from './components/Calendar/MyCalendar';
import TaskList2 from './components/Tasks/TaskList2';
import Footer from './components/Footer';

function App() {

    const [masterArr, setMasterArr] = useState('');

    useEffect( () => {
      GetMasterData( (data) => {
        // console.log("MasterData:", data[0]);
        setMasterArr(data[0]);
      })
    }, []) 

    // console.log("Här är masterArr-statet kopia av db:", masterArr);

  return (
    <>
      <Header />
      <MyCalendar />
      <TaskList2 masterArr= {masterArr} />
      <Footer />
    </>
  );
}

export default App;

//vill uppdatera isAdded från AddTask > MyCalendar > App => TaskList omrenderas o ny task syns i listan