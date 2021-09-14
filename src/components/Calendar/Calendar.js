import { useState, useEffect } from 'react';
import './Calendar.css';
import dayStyles from './Styles';
import CalendarHeader from './CalendarHeader';
import AddTask from './AddTask';
import DayList from './DayList';
// import GetListLength from './GetListLength';
// import PrintDayList from './PrintDayList';

const moment = require('moment');

function Calendar(props) {

    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());
    const [onClickDay, setOnClickDay] = useState(false)
    const [selectedDate, setSelectedDate] = useState('');

    // const [dayList, setDayList] = useState([]);

    const [masterList, setMasterList] = useState([]);

    useEffect( () => {
        setMasterList(props.masterList);
    }, [props.masterList]); //varför denna?
    // }, []);

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
    };

    const getLength = (day, task) => {
        let lengthArr = [];

        for (let i in masterList) {
            if( masterList[i].date === (moment(day).format("YYYY-MM-DD")) && masterList[i].isFinish === false) {
                lengthArr.push(masterList[i].title)
            }
        }

        return (
            <div>
                {lengthArr.length} deadlines
            </div>
        )
    };

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
                                        { day.format("D") }
                                        
                                        { getLength(day) } 

                                    </div>
                        
                                </div>)
                            }
                        </div>)
                }
            </div> 

            {onClickDay ? <AddTask masterList={masterList} selectedDate={selectedDate} addTask={props.addTask}/> : ""}

            {onClickDay ? <DayList masterList={masterList} selectedDate={ selectedDate } deleteTask={props.deleteTask} /> : ""}



{/* 
            

            {onClickDay ? <PrintDayList masterArr={ masterArr} selectedDate={ selectedDate } deleteTask={props.deleteTask} /> : ""} */}
            
        </div>
    )
};

export default Calendar;