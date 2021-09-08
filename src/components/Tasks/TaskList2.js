import moment from 'moment';
import { useEffect, useState } from 'react';
import TaskCard from "./TaskCard";

function TaskList2(props) {

    // FIXA: denna hinner sättas innan props.masterArr är hämtad fr db -> masterArr ibland blir tom. async await? Ibland körs denna 2 ggr, varför? Samma i MyCalendar: Skrev i state dependcy - skillnad?
    // const masterArr = props.masterArr;
    // console.log("masterArr i TaskList", masterArr);

    const [masterArr, setMasterArr] = useState('');
    // //denna useEffect körs vid ladding av sidan - FIXA!!
    useEffect( () => {
        console.log("tom eller ej masterArr", masterArr); 
        // console.log("har jag nått detta fr app?", props.id); // får bara met ett värde då, varför? loggar jag i app så är det många
        setMasterArr(props.masterArr);
    }, [masterArr, props.masterArr]); // masterArr är inte tom men den körs 3 ggr
    // }, []); //den laddas innan masterArr har hunnit uppdateras

    
    const printMasterList = Object.keys(masterArr).map(key => {
        return (
                <TaskCard 
                        isFinish={ masterArr[key].isFinish }
                        title={ masterArr[key].title }
                        date={ moment(masterArr[key].date).format("YYYY/MM/DD") }
                        key={ masterArr[key]._id }
                        id={ masterArr[key]._id }
                />
        )
    })
    
    return (
        <div id="task-list">
            <h2>Master Task List</h2>
            { printMasterList }
            {/* {isUser ? printList : ""} */}
        </div>
    )
};

export default TaskList2;