import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from 'react';
import PrintDayCard from './PrintDayCard';

const moment = require('moment');

function CreateCalendar() {

  let m = moment();
  console.log("m", m.toString());

  const [value, onChange] = useState(new Date());

  function handleChange(e) {
    // console.log("e klickad dag:", e);
    printDayCard(e); //vill lägga över funktionen till en komponent, varför funkar det ej att skriva <PrintDayCard />?
  };

  const tileContent = ({ date, view }) => view === 'month' && date.toDateString() === "Thu Aug 12 2021" ? <p>FÅNGAT ETT DATUM!</p> : null;
  
  const printDayCard = (e) => {
    let dayCardBody = document.getElementById("dayCardBody");

    //byta ut input till form med onSubmit:
    dayCardBody.innerHTML = `
      <div id="DayCardMain">
        <div id="AddTaskCardContainer">
          <h3>Lägg till ny uppgift för: ${e}</h3>
          <input placeholder="Skriv din uppgift"></input>
          <h4>Sätt deadline</h4>
          <p>finns detta i react-calendar?</p>
          <button>Spara</button>
        </div>

        <div id="DayListContainer">
          <h3>Dagens lista</h3>
          <ul>
            <li>
              <input type="checkbox">06:00 Vakna</input>
            </li>
            <li>
              <input type="checkbox">07:30 Lämna barn</input>
            </li>
            <li>
              <input type="checkbox">09:15 Möte</input>
            </li>
          </ul>
        </div>
      </div>
    `;
        
  };
  
    return (
      <div>
       
        <Calendar 
          onChange={ onChange } 
          onChange={ handleChange }
          // showWeekNumbers
          tileContent={ tileContent } 
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


  //koden kommer köras varje gång komponent mountas o varje gång komponent uppdaterar sig:
  // useEffect( (e) => {
  //   console.log("useEffect");
       
  //   // return() => {};
  
  // }, []);
  //laddas varje gång sidan laddas + klick (för att day omrenderas = då körs useEffect? Vill sen ändra så att useEffect endast körs vid klick)
  //dependency-array, lämnas tom = bara köras onMount.  