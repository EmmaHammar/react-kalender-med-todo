import moment from 'moment';
import { useEffect, useState } from 'react';
import TaskCard from "./TaskCard";
import GetData from './GetData';

// const taskArr = require('../../data/taskData.json');
// console.log("taskArr", taskArr);


//hämta data fr fetch-komponent som har cb
//skapa state för taskArr (innehåller listan fr db) och uppdatera state




function TaskList() {

    const [list, setList] = useState('');

    useEffect( () => {
        console.log("useeffect fr TaskList()");
        GetData((data) => {
            // console.log("data", data[0]);
            let listArr = data[0];
            // console.log("listArr", listArr);
            setList(listArr);
            // console.log("list", list);
        })
    }, []) 

    const printList = Object.keys(list).map(key => {
        return (
            // console.log("id", list[key]._id)
            // console.log("date", list[key].date)
            // console.log("title", list[key].title)
            // console.log("status isFinish", list[key].isFinish)
            <TaskCard 
            
                    isFinish={ list[key].isFinish }
                    title={ list[key].title }
                    date={ moment(list[key].date).format("YYYY/MM/DD") }
            />



        )
    })

    
    return (
        <div>
            <h2>Master Task List</h2>
            {printList}

            <div className="task-list">


                {/* <div className="task-card" key={ props.id }>
                    {props.isFinish ? <input type="checkbox" defaultChecked></input> : <input type="checkbox"></input>}
                    <h3>{ props.title }</h3>
                    <p>{ props.date }</p>
                    <button className="btn">Radera</button>
                </div> */}
                            
            </div>
            {

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
            }



            <ul className="task-list-ul">
            {/* {
                taskArr.map( (task) => {
                    
                    return (
                        <TaskCard 
                            isFinish={ false }
                            title={ task.title }
                            date={ moment(task.date).format("YYYY/MM/DD") }
                            key={ task.id } //varför blir denna undefined i TaskCard?
                        />
                    )
                })

            } */}
            </ul>

        </div>
    )

};

export default TaskList;

//behöver jag sätta key på li?