import { useState, useEffect } from 'react';
import './MyCalendar.css';
import dayStyles from './Styles';
import CalendarHeader from './CalendarHeader';
import AddTask from './AddTask';

const moment = require('moment');

function MyCalendar() {

    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());
    const [onClickDay, setOnClickDay] = useState(false)
    const [selectedDate, setSelectedDate] = useState('');
    // const [isAdded, setIsAdded] = useState(false);


    // let mockDataArr = [
    //     {
    //         date: "2021-12-24",
    //         title: "julafton", 
    //         isFinish: false
    //     }, {
    //         date: "2021-12-27",
    //         title: "åka pulka", 
    //         isFinish: false
    //     }
    // ]
    // const [mockData, setMockData] = useState(mockDataArr);

    const startDay = value.clone().startOf("month").startOf("week").weekday(1);
    const endDay = value.clone().endOf("month").endOf("week");


    useEffect( () => {

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

    function formatDate(day) {
        const clickedDate = day._d;
        const clickedDateRightFormat = moment(clickedDate).format("YYYY-MM-DD");
        setSelectedDate(clickedDateRightFormat);
        printDeadlines(clickedDateRightFormat);
        //PRINTA UT ALLA DEADLINES PER DAG: här??
    };

    const printDeadlines = ( (date) => {
        console.log("visa deadlines för klickad dag:", date);

    })

    useEffect( () => {    
        console.log("useeffect onclickday:", onClickDay);
        //PRINTA DAYTASKLIST: Hämta db-listan med alla objekt som har date === klickad dag-date???
    
    }, [onClickDay]);

    return(
        <div className="calendar">

            <CalendarHeader value={value} setValue={setValue} />
            
            <div className="calendar-body">
                { 
                    calendar.map((week, index) => 
                        <div key={index}>
                            {
                                week.map((day, index) => 
                                    <div className="day" 
                                        key={index} 
                                        onClick=
                                            { 
                                                function clickedDay() { 
                                                    setValue(day); 
                                                    formatDate(day);
                                                    setOnClickDay(true);
                                                }
                                            } >
                                    <div className={ dayStyles(day, value) }>
                                        {day.format("D")}
                                        Antal deadlines: X
                                        {/*PRINTA DEADLINES hämta db, kolla om selectedDate===data.date => göra en arr för alla object för valda datumet => .length på den arrayen för att få fram antal deadlines */}
                                    </div>
                                    
                                </div>)
                            }
                        </div>)
                }
            </div>
            
            {onClickDay ? <AddTask selectedDate={ selectedDate } /> : ""}
        </div>
    )
}

export default MyCalendar;

//onClick på day-diven: så när du klickar på en dag så sätts värdet till dagen.
//arrowfunktion i onClick så det event endast körs när det klickas, o inte när komponenten renders.                            