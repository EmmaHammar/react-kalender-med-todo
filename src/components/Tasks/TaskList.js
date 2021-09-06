import moment from 'moment';
import { useEffect, useState } from 'react';
import TaskCard from "./TaskCard";
import GetData from './GetData';

// const taskArr = require('../../data/taskData.json');
// console.log("taskArr", taskArr);


//hämta data fr fetch-komponent som har cb
//skapa state för taskArr (innehåller listan fr db) och uppdatera state


function TaskList() {
    const [isUser, setIsUser] = useState(false);

    const [list, setList] = useState('');

   
    //denna useEffect körs vid ladding av sidan
    useEffect( () => {
        console.log("useEffect TaskList - vill ha 1 ggn");
        GetData((data) => {
            console.log("data fr komponent: data eller data[0]", data);
            setList(data[0]);
        //     let listArr = data[0];
        //     setList(listArr);
        })
        setIsUser(true)

    }, []);

    const printList = Object.keys(list).map(key => {
        return (
            <TaskCard 
            
                    isFinish={ list[key].isFinish }
                    title={ list[key].title }
                    date={ moment(list[key].date).format("YYYY/MM/DD") }
                    key={ key }
            />
        )
    })
    


    
    return (
        <div>
            <h2>Master Task List</h2>
            {isUser ? printList : ""}

            {/* {isUser ? printList : ""} */}


        </div>
    )

};

export default TaskList;



                // list.map( (task) => {
                        
                //     return (
                        
                        // <TaskCard 
                        //     isFinish={ false }
                        //     title={ task.title }
                        //     date={ moment(task.date).format("YYYY/MM/DD") }
                        //     key={ task.id } //varför blir denna undefined i TaskCard?
                        // />
                //     )
                // })