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
            setList(data);
        //     let listArr = data[0];
        //     setList(listArr);
        })


        //fetch funkar o ger endast 1 get
        // fetch(`http://localhost:3011/list`)
        // .then(response => response.json())
        // .then(data => {
        //     console.log("data from fetch: data[0] eller data?", data[0]);
        //     // cb(data); 
        // });
        setIsUser(true)
    }, []);

    // useEffect( () => {
    //     console.log("useeffect fr TaskList()");
    //     GetData((data) => {
    //         // console.log("data", data[0]);
    //         let listArr = data[0];
    //         // console.log("listArr", listArr);
    //         setList(listArr);
    //         console.log("list", list);
    //     })
    // }, []) 


    // const printList = Object.keys(list).map(key => {
    //     return (
    //         // console.log("id", list[key]._id)
    //         // console.log("date", list[key].date)
    //         // console.log("title", list[key].title)
    //         // console.log("status isFinish", list[key].isFinish)
    //         <TaskCard 
            
    //                 isFinish={ list[key].isFinish }
    //                 title={ list[key].title }
    //                 date={ moment(list[key].date).format("YYYY/MM/DD") }
    //         />
    //     )
    // })

    
    return (
        <div>
            <h2>Master Task List</h2>
            {isUser ? "visa lista" : ""}

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