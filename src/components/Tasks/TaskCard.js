import {useState} from 'react';
import './TaskCard.css';
import UpdateCheckbox from './UpdateCheckbox';

function TaskCard (props) {

    const [doUpdate, setDoUpdate] = useState(false);


    const [isFinish, setIsFinish] = useState(props.isFinish);
    
    const handleClick = ( (evt) => {
        console.log("klick evt:", evt.target.id)

        //UPPDATERA DB 
        let updateTask = { 
            id: evt.target.id,
            isFinish: true
        };

        // console.log("updateTask", updateTask);
        props.deleteTask(updateTask) //kallar på funktionen deleteTask() i app.js 
        UpdateCheckbox(updateTask);

    })

    // const handleChange = (evt) => {
    //     console.log("detta obj ska raderas med id:", evt.target.id);
    //     console.log("checkbox har ändrats:", evt.target.value);

    //     let checkedTask = {
    //         id: evt.target.id,
    //         isFinish: true
    //     }

    //     //ta reda på för vilket id som har ändrats
    //     props.deleteTask(checkedTask) //kallar på funktionen deleteTask() i app.js 
    //     UpdateCheckbox(checkedTask);
    //     // props.deleteDeadline(checkedTask) //ta bort deadline i kalendern


    //   }

    return (
            <div className="task-card" key={ props.id } id={ props.id }>
                <input type="checkbox" id={ props.id } onClick={handleClick}></input>
                <h3>{ props.title }</h3>
                <p>{ props.date }</p>
            </div>
    );
};

export default TaskCard;