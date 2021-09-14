// import {useState, useEffect} from 'react';
import './TaskCard.css';

function TaskCard (props) {

    const handleClick = ( (evt) => {
        // console.log("klick klar evt", evt.target.id);
        let deleteId = evt.target.id;
        props.deleteTask(deleteId) //kallar på funktionen deleteTask() i app.js 
    });
    
    return (
        <div className="task-card" key={ props.index }>
            <h3>{ props.title }</h3>
            <p>{ props.date }</p>
            <button id={props.id} onClick={handleClick}>Klar</button>
        </div>
    );
};

export default TaskCard;