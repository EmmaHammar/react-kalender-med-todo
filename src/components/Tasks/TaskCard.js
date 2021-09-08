import {useState} from 'react';
import './TaskCard.css';
import UpdateCheckbox from './UpdateCheckbox';

function TaskCard (props) {

    const [isFinish, setIsFinish] = useState(props.isFinish);
    
    const handleClick = ( (evt) => {
        console.log("klick evt:", evt.target.id)

        //UPPDATERA DB 
        // let updateTask = { 
        //     id: props.id,
        //     isFinish: evt.target.checked
        // };

        let updateTask = { 
            id: props.id,
            date: props.date.toString(),
            title: props.title,
            isFinish: evt.target.checked
        };

        props.deleteTask(updateTask) //kallar på funktionen deleteTask() i app.js 

        console.log("updateTask", updateTask);
        UpdateCheckbox(updateTask);

    })

    return (
            <div className="task-card" key={ props.id } id={ props.id }>
                <input type="checkbox" onClick={handleClick}></input>
                <h3>{ props.title }</h3>
                <p>{ props.date }</p>
            </div>
    );
};

export default TaskCard;