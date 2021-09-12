import {useState, useEffect} from 'react';
import './TaskCard.css';

function TaskCard (props, index) {
    
    const [masterArr, setMasterArr] = useState([]);

    useEffect( () => {
        setMasterArr(props.masterArr)
    }, [])

    //remove() db when checked task in masterTasklist -> trickle up and down to printDaylist:  
    const handleClick = ( (evt) => {

        //UPPDATERA DB 
        let updateTask = { 
            date: props.date,
            title: props.title,
            isFinish: true,
            id: evt.target.id
        };
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