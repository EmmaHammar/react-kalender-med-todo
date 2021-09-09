import {useState, useEffect} from 'react';
import './TaskCard.css';
import UpdateCheckbox from './UpdateCheckbox';

function TaskCard (props, index) {
    

    const [masterArr, setMasterArr] = useState([]);

    const [checked, setChecked] = useState(false);

    const [doUpdate, setDoUpdate] = useState(false);
    const [isFinish, setIsFinish] = useState(props.isFinish);

  
    useEffect( () => {
        // console.log("TaskList - props.masterArr", props.masterArr);
        setMasterArr(props.masterArr)
        // console.log("TaskList - state masterArr", masterArr);
    }, [])

    useEffect( () => {
        setMasterArr(props.masterArr);
      }, [checked, masterArr])

    //remove() db when checked task in masterTasklist -> trickle up and down to printDaylist:  
    const handleClick = ( (evt) => {
        // console.log("klick checkbox TaskCard:", evt.target.id);

        //UPPDATERA DB 
        let updateTask = { 
            id: evt.target.id,
            isFinish: true
        };

        // console.log("updateTask i TaskCard", updateTask);
        props.deleteTask(updateTask) //kallar på funktionen deleteTask() i app.js 
        
        //ändra - hitta index o splice
        const findIndex = masterArr.findIndex(obj => obj._id === evt.target.id)
        console.log("findIndex", findIndex);

        const taskToRemove = masterArr.splice(findIndex, 1);
        console.log("taskToRemove", taskToRemove);
        console.log("masterArr efter splice:", masterArr);

        setMasterArr(masterArr);
        setChecked(!checked); 

        // props.isChecked();

    })
    
    return (
            <div className="task-card" key={ props.index }>
                
                <input id={ props.id } type="checkbox" onClick={handleClick}></input>
                <h3>{ props.title }</h3>
                <p>{ props.date }</p>
            </div>
    );
};

export default TaskCard;