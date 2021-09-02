import { useState, useEffect } from 'react';

import PrintCalendar from "./PrintCalendar";
import PrintMasterListCard from './PrintMasterListCard';

function Main() {

  // const [tasks, setTasks] = useState('');


  // const saveAllTasks = (getTasks) => {
  //   //spara statet getTasks
  //   setTasks(getTasks);    
  // }

    return (
      <main>
        <div id="calendarMasterListContainer">
            <PrintCalendar />
            <PrintMasterListCard />
            {/* <PrintMasterListCard getAllTasks={ saveAllTasks }/> */}
        </div>
        <div id="dayCardBody"></div>
      </main>
    );
  }
  
  export default Main;