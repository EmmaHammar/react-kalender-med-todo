// import {useState, useEffect} from 'react';
import './TaskCard.css';

function TaskCard (props) {

    const handleClick = ( (evt) => {
        let deleteId = evt.target.id;
        
        props.deleteTask(deleteId) //kallar på funktionen deleteTask() i app.js 
    });
    
    return (
        <div className="task-card" key={ props.index }>
            <button id={props.id} onClick={handleClick} className="btn task-card-deadline">Klar</button>
            <h3 className='task-card-deadline'>{ props.date }</h3>
            <h4 className='task-card-title'>{ props.title }</h4>
        </div>
    );
};

export default TaskCard;