import {useState} from 'react';
import './TaskCard.css';


function TaskCard (props) {

    const [isFinishState, setIsFinishState] = useState(false);

    function updateIsFinish() {
        setIsFinishState(true);

    }

    return (
        <div className="task-list">
            
            <div className="task-card">
                {props.isFinish ? <input type="checkbox" defaultChecked></input> : <input type="checkbox"></input>}
                <h3>{ props.title }</h3>
                <p>{ props.deadline }</p>
                <button className="btn">Radera</button>
            </div>
                        
        </div>
    );
};

export default TaskCard;

//toggla mellan klasser isFinish true/false istället för defaultChecked?

// {props.isFinish ? <input type="checkbox"/> : <input type="checkbox"/> }