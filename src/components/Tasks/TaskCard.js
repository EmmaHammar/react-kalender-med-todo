import {useState} from 'react';
import './TaskCard.css';
import UpdateCheckbox from './UpdateCheckbox';

function TaskCard (props) {

    const [isFinish, setIsFinish] = useState(props.isFinish);
   

    const handleClick = ( (evt) => {
        // console.log("klick evt:", evt.target.id);

        //UPPDATERA DB 
        let updateTask = { 
            id: props.id,
            isFinish: evt.target.checked
        };

        console.log("updateTask", updateTask);
        UpdateCheckbox(updateTask);

        if (evt.target.checked === true) {
            console.log("isFinish=true för id:", props.id); 
        } else {
            console.log("isFinish=false för id:", props.id);
        }

    })

    return (

            <div className="task-card" key={ props.id } id={ props.id }>
                <input type="checkbox" onClick={handleClick}></input>
                <h3>{ props.title }</h3>
                <p>{ props.date }</p>
                <button className="btn">Radera</button>
            </div>
                        
    );
};

export default TaskCard;

//toggla mellan klasser isFinish true/false?

// {props.isFinish ? <input type="checkbox"/> : <input type="checkbox"/> }