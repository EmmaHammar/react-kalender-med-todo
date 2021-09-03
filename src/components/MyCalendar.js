import './MyCalendar.css';
const moment = require('moment');


function MyCalendar() {
    //mitt m är value i videon
    // let m = moment();
    // console.log("m", m.toString());
    let value = moment();

    //startOf("month").startOf("week") -> så starday för en månad i kalendervyn blir 08/29 o ej 1/9. Gör samma för endday av en månad 
    //.weekday(1) -> så veckovyn börjar på måndag
    const startDay = value.clone().startOf("month").startOf("week").weekday(1);
    const endDay = value.clone().endOf("month").endOf("week");

    //loopa ut:
    const day = startDay.clone().subtract(1, "day")
    const calendar = [];
    
    //whileloopen utförs så länge endDay inte är uppfyllt, intervallet ska vara day:
    while(day.isBefore(endDay, "day")) {

        //skjuta in i tomma arrayen. 7-dagar på en vecka. fill(0) för att ha något att map() över:
        calendar.push(
            Array(7)
            .fill(0)
            .map( () => day.add(1, "day").clone())
        )
    };

    //change index to id from object later
    return(
        <div className="calendar">
            <h3>Hej fr MyCalendar</h3>
            
            { 
                calendar.map((week, index) => <div key={index}>
                    {
                        week.map((day, index) => <div className="day" key={index}>
                            {day.format("D")}
                        </div>)
                    }
                </div>)
            }


        </div>
    )
}

export default MyCalendar;


