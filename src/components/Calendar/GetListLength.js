import { useEffect, useState } from "react";
const moment = require('moment');

function GetListLength(props) {

    let [masterList, setMasterList] = useState([]);
    let [dayList, setDayList] = useState([]);

    //hämta
    useEffect(() => {
        // console.log("GetLIstLength.js masterList:", props.masterList);
        setMasterList(props.masterList);
        setDayList(props.dayList);
    })

    let dayTasks = [];

    for (let task in masterList) {
        if( masterList[task].date === (moment(props.day).format("YYYY-MM-DD")) && masterList[task].isFinish === false) {

            console.log("masterList[task].title", masterList[task].title);

            //ändra (lägger in alla tasks/dag i enskilda arrays):
            dayTasks.push(masterList[task].title); 
            console.log("dayTasks", dayTasks.length);

            let dayTasksLength = dayTasks.length;

            props.printLength(dayTasksLength);
            
            // console.log("dayList.length", dayList.length);

        }
    };
    


    // //blir annars infinite loop
    // useEffect(() => {

    //     // let dayList = [];
    //     for (let task in masterList) {
    //         if( masterList[task].date === (moment(props.day).format("YYYY-MM-DD")) && masterList[task].isFinish === false) {

    //             //ändra (lägger in alla tasks/dag i enskilda arrays):
    //             dayList.push(masterList[task].title); 

    //             //spara
    //             setDayList(dayList);
    //             console.log("dayList", dayList);
    //         }
    //     }

    // }, [])

    return (
        <div>
            {/* {dayList.length} deadlines */}
            Jahadu
        </div>
    )
};

export default GetListLength;