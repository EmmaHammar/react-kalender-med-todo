import { useState, useEffect } from 'react';
import './MyCalendar.css';
import dayStyles from './Styles';
import CalendarHeader from './CalendarHeader';
import AddTask from './AddTask';
import PrintDayList from './PrintDayList';

const moment = require('moment');

function MyCalendar(props) {

    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());
    const [onClickDay, setOnClickDay] = useState(false)
    const [selectedDate, setSelectedDate] = useState('');
    const [getMasterArr, setMasterArr] = useState(''); 
    const [count, setCount] = useState(0);

    const [isUpdate, setUpdate] = useState(props.isUpdate);

    // const [isAdded, setIsAdded] = useState(props.addTask); //fått props.addTask från App.js

    // const [childStatus, setChildStatus] = useState(false);
    // const [isUpdate, setUpdate] = useState(false);
    // const [id, setId] = useState('');

    useEffect( () => {
        console.log("masterArr i MyCalendar:", props.masterArr); //DETTA LOGGAS 2 GGR
        setMasterArr(Array.from(props.masterArr)); //annars får error att getMasterArr.map() is not a function längre ner
    }, [props.masterArr]);
    // }, []); //MASTERARR LOGGAS 1 GGN MEN ÄR TOM

    // // useEffect( () => {
    //     AddTask( (data) => {
    //         //data ska vara true
    //         setUpdate(data)
    //         console.log("data fr child AddTask:", data);
    //     })
    // // });

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
    }, [value]); //React Hook useEffect has missing dependencies: 'endDay' and 'startDay'. Either include them or remove the dependency array  react-hooks/exhaustive-deps

    function formatDate(day) {
        const clickedDate = day._d;
        const clickedDateRightFormat = moment(clickedDate).format("YYYY-MM-DD");
        setSelectedDate(clickedDateRightFormat);
    };

    useEffect( () => {    
        // console.log("useeffect onclickday:", onClickDay);
        // console.log("printa tasks för:", selectedDate);

    }, [onClickDay, selectedDate]);
    

    //köra en count
    //om props.deleteTask fr App.js ändras -> count blir 1 mindre

    

    const counter = () => {
        setCount(count + 1)
        console.log("count:", count);
    }

    return(
        <div className="calendar">

            <CalendarHeader value={value} setValue={setValue} />
            
            {/* denna div ska renderas om om checkbox har ändrats? */}
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

                                        {/*FIXA så att den adderas:*/}
                                        {/* FIXA så att getMasterArr renderas om */}
                                        { //från getMasterArr - ta bort checkedTask? 
                                    

                                        getMasterArr.map( (task, index) => (moment(day).format("YYYY-MM-DD") === task.date) ? <div key={index} >x deadline</div> : "")
                                          

                                            // getMasterArr.map( (task, index) => (moment(day).format("YYYY-MM-DD") === task.date) ? <div key={index} onChange={countChange}>{count} deadline</div> : "")
                                                
                                        }

                                    </div>
                                    
                                </div>)
                            }
                        </div>)
                }
            </div> 
            
            {onClickDay ? <AddTask addTask={ props.addTask } selectedDate={ selectedDate } count={counter} /> : ""}
            {onClickDay ? <PrintDayList selectedDate={ selectedDate } masterArr={ getMasterArr} /> : ""}

            
        </div>
    )
}

export default MyCalendar;

//arrowfunktion i onClick så det event endast körs när det klickas, o inte när komponenten renders??                          