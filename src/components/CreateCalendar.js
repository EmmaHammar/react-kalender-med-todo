import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import { useState, setState } from 'react';
const moment = require('moment');

function CreateCalendar() {

  let m = moment();
  console.log("m", m.toString());

  const [value, onChange] = useState(new Date());

  const [day, setDay] = useState('');

  function handleChange(e) {
    setDay(e);
    console.log("e klickad dag:", e);
  }

  // function printDeadlines(date, view) { 
    
  //   <div> 1 deadline </div>
      
  //   } 

  



    return (
      <div>
       
        <Calendar 
          onChange={ onChange } 
          onChange={ handleChange }
          // showWeekNumbers
          // tileContent={ printDeadlines } 
          tileContent={ (date, view ) => (
            <div>
              <div> 1 deadline </div>
              <div> Task List </div>
            </div>
              
            )} 

          value={ value } 
        />
        
      </div>
    );
  }
  
  export default CreateCalendar;


  //kom ihåg:
    // const [time, setTime] = useState(new Date());
  // const [stateName, setStateName] = useState(ursprungliga värdet eller lämna tomt);

  // (value, event) => alert('Clicked day: ', value)
 // <Calendar onChange={onChange} value={value} />
//<p>Skapa kalendern, nu är klockan: {time.toLocaleTimeString()}</p>

// https://upmostly.com/tutorials/react-onchange-events-with-examples

