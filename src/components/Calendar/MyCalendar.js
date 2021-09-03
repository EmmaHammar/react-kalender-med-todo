import { useState, useEffect } from 'react';
import './MyCalendar.css';
import dayStyles from './Styles';
import CalendarHeader from './CalendarHeader';

const moment = require('moment');

function MyCalendar() {

    //sätta värdena som default i state:
    //1) getter, 2) setter
    const [calendar, setCalendar] = useState([]);
    let [value, setValue] = useState(moment());

    //startOf("month").startOf("week") -> så starday för en månad i kalendervyn blir 08/29 o ej 1/9. Gör samma för endday av en månad 
    //.weekday(1) -> så veckovyn börjar på måndag
    const startDay = value.clone().startOf("month").startOf("week").weekday(1);
    const endDay = value.clone().endOf("month").endOf("week");

    //komma ur oändlig while-loop - använd useEffect + lägg till dependecy:
    useEffect( () => {

        //loopa ut:
        const day = startDay.clone().subtract(1, "day")
        //vill ej sätta state i varje loop -> temporär variabel:
        const calendarArr = [];

        //whileloopen utförs så länge endDay inte är uppfyllt, intervallet ska vara day:
        while(day.isBefore(endDay, "day")) {

            //skjuta in i tomma arrayen. 7-dagar på en vecka. fill(0) för att ha något att map() över:
            calendarArr.push(
                Array(7)
                .fill(0)
                .map( () => day.add(1, "day").clone())
            )
        };
        //update the state with the matrix when while-loop is finish:
        setCalendar(calendarArr)
    }, [value]);
    //vill att calendar-arrayen ska köras varje gång du ändrar den valda dagen/next month = value-variabeln: 
    // [] => useEffect sker bara 1 gång.


    //fånga klick på en dag
    //konsollogga datumen
    //öppna taskList

    //change index to id from object later
    return(
        <div className="calendar">

            <CalendarHeader value={value} setValue={setValue} />
            
            <div className="calendar-body">
                { 
                    calendar.map((week, index) => 
                        <div key={index}>
                            {
                                week.map((day, index) => 
                                    <div className="day" key={index} onClick={ () => setValue(day) }>
                                        <div className={ dayStyles(day, value) }>
                                            {day.format("D")}
                                        </div>
                                        
                                    </div>)
                            }
                        </div>)
                }
            </div>

        </div>
    )
}

export default MyCalendar;

//onClick på day-diven: så när du klickar på en dag så sätts värdet till dagen.
//arrowfunktion i onClick så det event endast körs när det klickas, o inte när komponenten renders.

//hitta vilken dag som är vald
