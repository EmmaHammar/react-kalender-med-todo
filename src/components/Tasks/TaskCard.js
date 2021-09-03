function TaskCard (props) {

    return (
        <div className="task-list">
            <p>{ props.title }</p>
            <div> 
                { props.deadline } 
                {props.isFinish ? <input type="checkbox" defaultChecked/> : <input type="checkbox"/> }
                <button>Ta bort</button>
            </div>
            
            Hej från tasklist
        </div>
    );
};

export default TaskCard;