import './MasterList.css';
import { useEffect, useState } from 'react';
import TaskCard from "./TaskCard";

import moment from 'moment';

function MasterList(props) {

    const [masterList, setMasterList] = useState([]);

//     const [masterArr, setMasterArr] = useState(props.masterArr);
//     const [checked, setChecked] = useState(false);
  
    useEffect( () => {
        setMasterList(props.masterList);
    }, [props.masterList])
    // }, []); varför funkar det inte alltid att skriva så?
    // console.log("MasterList.js masterList:", masterList);

//     const isChecked = () => {
//         setChecked(true); //försöka rendera om TaskCard
        
//     } 

    const sortMasterList = Object.values(masterList).sort( (a,b) => a.date > b.date ? 1: -1);
    const printMasterList = Object.values(sortMasterList).map( (task, index ) => {

        return (
                <TaskCard 
                    masterList={ masterList }
                    id={ task.id }
                    isFinish={ task.isFinish }
                    title={ task.title }
                    date={ moment(task.date).format("YYYY/MM/DD") }
                    //varför skriver man sådär key o index?
                    key={ index }
                    index={index}
                    deleteTask={ props.deleteTask }
//                     masterArr={ props.masterArr } 
//                     doUpdate={props.doUpdate} 
//                     isUpdate={props.isUpdate}
//                     checked={checked}
//                     isChecked={isChecked}
                />
        )
    })
    
    return (
        <div id="masterlist">
            <h2>Masterlista</h2>
            { printMasterList }
        </div>
    )
};

export default MasterList;