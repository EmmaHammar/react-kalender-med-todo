import moment from 'moment';
import { useEffect, useState } from 'react';
import TaskCard from "./TaskCard";
import GetData from './GetData';

function TaskList() {
    const [isUser, setIsUser] = useState(false);
    const [list, setList] = useState('');

    //denna useEffect körs vid ladding av sidan
    useEffect( () => {
        // console.log("useEffect TaskList - vill ha 1 ggn");
        GetData((data) => {
            // console.log("data fr komponent: data eller data[0]", data);
            setList(data[0]);
        })
        setIsUser(true)

    }, []);

    const printList = Object.keys(list).map(key => {
        return (
            // <div className="task-list">
                <TaskCard 
                        isFinish={ list[key].isFinish }
                        title={ list[key].title }
                        date={ moment(list[key].date).format("YYYY/MM/DD") }
                        key={ list[key]._id }
                        // key= {key}
                        id={ list[key]._id }
                />
            // </div>
            
        )
    })
    
    return (
        <div id="task-list">
            <h2>Master Task List</h2>
            {isUser ? printList : ""}
        </div>
    )
};

export default TaskList;

//Warning: Each child in a list should have a unique "key" prop.