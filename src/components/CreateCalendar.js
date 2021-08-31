import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import { useState, setState } from 'react';
import PrintDayCard from './PrintDayCard';

const moment = require('moment');

function CreateCalendar() {

  let m = moment();
  console.log("m", m.toString());

  const [value, onChange] = useState(new Date());
  

  const [day, setDay] = useState('');

  function handleChange(e) {
    setDay(e);
    console.log("e klickad dag:", e);

    //printa DayCard - HUR?
    // <PrintDayCard />
  
    
    
    let addTask = prompt( "lägg till ny uppgift för "+ e)
    console.log("addTask:", addTask);
    if (addTask !== "") {
      alert ("Din uppgift är sparad");

      
    } else {
      alert("Du måste fylla i en uppgift för att kunna spara.");
    }
    
    
    
  }


  const tileContent = ({ date, view }) => view === 'month' && date.toDateString() === "Thu Aug 12 2021" ? <p>FÅNGAT ETT DATUM!</p> : null;
  
    return (
      <div>
       
        <Calendar 
          onChange={ onChange } 
          onChange={ handleChange }
          // showWeekNumbers
          tileContent={ tileContent } 
          // tileContent={ (date, view ) => (
            
          //   <div>
          //     <div> 1 deadline </div>
          //     <div> Task List </div>
          //   </div>
              
          //   )} 

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

