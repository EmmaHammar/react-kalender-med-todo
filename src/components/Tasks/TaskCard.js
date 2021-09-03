import {useState} from 'react';
import './TaskCard.css';


function TaskCard (props) {

    const [isFinishState, setIsFinishState] = useState(false);

    function updateIsFinish() {
        setIsFinishState(true);

    }

    return (
        <div className="task-list">

            <div className="task-card" key={ props.title + props.date}>
                {props.isFinish ? <input type="checkbox" defaultChecked></input> : <input type="checkbox"></input>}
                <h3>{ props.title }</h3>
                <p>{ props.date }</p>
                <button className="btn">Radera</button>
            </div>
                        
        </div>
    );
};

export default TaskCard;

//toggla mellan klasser isFinish true/false istället för defaultChecked?

// {props.isFinish ? <input type="checkbox"/> : <input type="checkbox"/> }

//Warning: TaskCard: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)