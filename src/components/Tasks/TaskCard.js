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

    //remove() db when checked task in masterTasklist -> trickle up and down to printDaylist:  
    const handleClick = ( (evt) => {
        console.log("props.id - id är undefined", props.id);
        // console.log("evt.target", evt.target);
        console.log("klick checkbox TaskCard: - klicket är tomt", evt.target.id);

        //UPPDATERA DB 
        let updateTask = { 
            date: props.date,
            title: props.title,
            isFinish: true,
            id: evt.target.id
        };
        // console.log("evt.target.id", evt.target);
  
        console.log("HÄR är updateTask in till checkbox post rätt?", updateTask);
        // console.log("props.taskId", props.taskId);// rätt

        // console.log("updateTask i TaskCard", updateTask);
        props.deleteTask(updateTask) //kallar på funktionen deleteTask() i app.js 

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