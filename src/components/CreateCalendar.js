import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from 'react';
import PrintDayCard from './PrintDayCard';
// import GetTaskInfo from './PrintDayCard';


// const moment = require('moment');

function CreateCalendar() {

    // let m = moment();
    // console.log("m", m.toString());
    
    const [value, onChange] = useState(new Date());
    const [clickedDay, setClickedDay] = useState(false);

    useEffect( () => {
      console.log("useeffect!");
    }, [clickedDay]);

    //catch a date in calendar and print text:
    const tileContent = ({ date, view }) => view === 'month' && date.getDate() === 8 ? <p>Fångat datum!</p> : null;

    //försöker fånga dag med ISO-string - funkar ej:
    // const tileContent2 = ({ date, view }) => view === 'month' && date.toISOString() === "2021-09-05T12:04:40.333Z" ? <p>Fångat datum2!</p> : null;

    //catch click on a date square:
    function handleChange(e) {
      console.log("e klickad dag:", e.toISOString());
      setClickedDay(true);
      // <PrintDayCard />
    };

    const printDayCard = () => {
        console.log("hej från printDayCard");

        //printa ut - HUR?
        
        <div>Hej från printDayCard-funktionen</div>
        
    };

    const onClickDay = () => {
        printDayCard()
    };
    
    return (
      <div>
        <Calendar 
          onChange={ onChange } 
          value={ value } 
          tileContent={ tileContent }
          // tileContent={ tileContent2 }
          onChange={ handleChange }
          onClickDay={ onClickDay }
        />
        {/* < GetTaskInfo /> */}
        {clickedDay ? <PrintDayCard /> : ""}
        {/* <PrintDayCard /> */}
      </div>
    
    );
};

export default CreateCalendar;

    
  
  //COPY AV CALENDAR FROM NPM
//   import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { useState, useEffect } from 'react';
// import PrintDayCard from './PrintDayCard';

// // const moment = require('moment');

// function CreateCalendar() {

//     // let m = moment();
//     // console.log("m", m.toString());
    
//     const [value, onChange] = useState(new Date());
//     const [clickedDay, setClickedDay] = useState(false);

//     useEffect( () => {
//       console.log("useeffect!");
//     }, [clickedDay]);

//     //catch a date in calendar and print text:
//     const tileContent = ({ date, view }) => view === 'month' && date.getDate() === 8 ? <p>Fångat datum!</p> : null;

//     //försöker fånga dag med ISO-string - funkar ej:
//     // const tileContent2 = ({ date, view }) => view === 'month' && date.toISOString() === "2021-09-05T12:04:40.333Z" ? <p>Fångat datum2!</p> : null;

//     //catch click on a date square:
//     function handleChange(e) {
//       console.log("e klickad dag:", e.toISOString());
//       setClickedDay(true);
//     };

//     const printDayCard = () => {
//         console.log("hej från printDayCard");

//         //printa ut - HUR?
//         <div>Hej från printDayCard-funktionen</div>
        
//     };

//     const onClickDay = () => {
//         printDayCard()
//     };
    
//     return (
//       <div>
//         <Calendar 
//           onChange={ onChange } 
//           value={ value } 
//           tileContent={ tileContent }
//           onChange={ handleChange }
//           onClickDay={ onClickDay }
//         />
//         {clickedDay ? <PrintDayCard /> : ""}
//       </div>
    
//     );
// };

// export default CreateCalendar;



  //SLUT PÅ COPY AV CALENDAR FROM NPM

  

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



  // dayCardBody.innerHTML = `
  //     <div id="DayCardMain">
  //       <div id="AddTaskCardContainer">
  //         <h3>Lägg till ny uppgift för: ${e}</h3>
  //         <form onSubmit=${onSubmit}>
  //           <input type="text" value=${title} onChange=${e => setTitle(e.target.value)} placeholder="Skriv din uppgift"></input>
  //           <button type="submit">Spara</button>
  //         </form>
          
  //         <h4>Sätt deadline</h4>
  //         <p>finns detta i react-calendar?</p>
          
  //       </div>

  //       <div id="DayListContainer">
  //         <h3>Dagens lista</h3>
  //         <ul>
  //           <li>
  //             <input type="checkbox">06:00 Vakna</input>
  //           </li>
  //           <li>
  //             <input type="checkbox">07:30 Lämna barn</input>
  //           </li>
  //           <li>
  //             <input type="checkbox">09:15 Möte</input>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   `;