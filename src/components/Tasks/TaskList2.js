import moment from 'moment';
import { useEffect, useState } from 'react';
import TaskCard from "./TaskCard";
import GetData from './GetData';

function TaskList2(props) {

    const [masterArr, setMasterArr] = useState('');
    const [isDbUpdate, setIsDbUpdate] = useState(false)


    const [isUser, setIsUser] = useState(false);



    //denna useEffect körs vid ladding av sidan
    useEffect( () => {
        console.log("useEffect TaskList - vill ha 1 ggn", props.masterArr);
        setMasterArr(props.masterArr);
    }, []);
    

    const printMasterList = Object.keys(masterArr).map(key => {
        return (
    
            <div className="task-list">
                <TaskCard 
                        isFinish={ masterArr[key].isFinish }
                        title={ masterArr[key].title }
                        date={ moment(masterArr[key].date).format("YYYY/MM/DD") }
                        key={ masterArr[key]._id }
                        id={ masterArr[key]._id }
                />
            </div>
            
        )
    })


    // console.log("masterArr har skickats ner fr App:", props.masterArr);
    // setMasterArr(props.masterArr);
    // console.log("masterArr 1 ggn", masterArr);
    //denna useEffect körs vid ladding av sidan
    // useEffect( (evt) => {
    //     console.log("useEffect props.masterArr");
        
    // })

    // console.log("masterArr?", masterArr); //varför loggas denna 2 ggr?
    //varje gång db uppdateras ska detta köras
    

  

    // //denna useEffect körs vid ladding av sidan
    // useEffect( () => {
    //     // console.log("useEffect TaskList - vill ha 1 ggn");
    //     GetData((data) => {
    //         // console.log("data fr komponent: data eller data[0]", data);
    //         setList(data[0]);
    //     })
    //     setIsUser(true)

    // }, []);

    // const printList = Object.keys(list).map(key => {
    //     return (
    //         // <div className="task-list">
    //             <TaskCard 
    //                     isFinish={ list[key].isFinish }
    //                     title={ list[key].title }
    //                     date={ moment(list[key].date).format("YYYY/MM/DD") }
    //                     key={ list[key]._id }
    //                     // key= {key}
    //                     id={ list[key]._id }
    //             />
    //         // </div>
            
    //     )
    // })
    
    return (
        <div id="task-list">
            <h2>Master Task List</h2>
            { printMasterList }
            {/* {isUser ? printList : ""} */}
        </div>
    )
};

export default TaskList2;

//Warning: Each child in a list should have a unique "key" prop.