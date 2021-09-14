import { useEffect, useState } from "react";
const moment = require('moment');

function GetListLength(props) {

    let [masterList, setMasterList] = useState([]);
    let [dayList, setDayList] = useState([]);

    //hämta
    // useEffect(() => {
    //     // console.log("GetLIstLength.js masterList:", props.masterList);
    // })

    //blir annars infinite loop
    useEffect(() => {
        setMasterList(props.masterList);


        for (let task in masterList) {
            if( masterList[task].date === (moment(props.day).format("YYYY-MM-DD")) && masterList[task].isFinish === false) {

                //ändra (lägger in alla tasks/dag i enskilda arrays):
                dayList.push(masterList[task].title); 

                //spara
                setDayList(dayList);
            }
        }

    })

    return (
        <div>
            {dayList.length} deadlines
        </div>
    )
};

export default GetListLength;