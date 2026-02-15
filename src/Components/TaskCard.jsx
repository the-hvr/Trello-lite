import './Style/TaskCard.css';
import './Style/ActionBtns.css';
import { format } from "date-fns";


export default function TaskCard({task, columnId, setBoard}){
    function deleteOne(id){
        setBoard(prevTask => (
            {...prevTask, 
                [columnId]: prevTask[columnId].filter(task => (
                    task.id !== id
            ))}
        ))
    }


    //MOVE TASK
        function moveTask(taskId, fromColumn, toColumn) {
          setBoard((prevBoard) => {

            let taskToMove = prevBoard[fromColumn].find(
              (task) => task.id === taskId,
            );
            
            if (!taskToMove) return prevBoard;

            return {
                ...prevBoard,

                [fromColumn]: prevBoard[fromColumn].filter(
                    (task) => task.id !== taskId,
                ),

                [toColumn]: [...prevBoard[toColumn], taskToMove],
            };
          });          
        }



     // ACTIONS BUTTONS   
    function renderActionButtons() {
        if (columnId === "todo") {
          return (
            <div>
              <button onClick={() => moveTask(task.id, "todo", "doing")} className="btns startTask">Start Task</button>
              <button onClick={() => moveTask(task.id, "todo", "done")} className="btns markDone">Mark as Done</button>
            </div>
          );
        }

        if (columnId === "doing") {
          return (
            <div>
              <button onClick={() => moveTask(task.id, "doing", "done")} className="btns markDone">Mark as Done</button>
              <button onClick={() => moveTask(task.id, "doing", "todo")} className="btns moveBack">Move Back</button>
            </div>
          );
        }

        if (columnId === 'done') {
            return <button onClick={() => moveTask(task.id, "done", "todo")} className='btns reopenTask'>Reopen Task</button>;
        }
    }



    return (
        <>
            <div className="task">
                <div className='time'>
                    <i className="fa-regular fa-clock"></i>&nbsp;&nbsp;
                    {format(new Date(task.createdAt), "MMM dd, yyyy • h:mm a")} 
                    <br /><hr />
                </div>

                <p className='taskTitle'>{task.title}</p>

                <div className='dot' 
                    style={{backgroundColor: 
                        task.priority === "high" ? 
                        "red" :
                        task.priority === "medium" ?
                        "orange" : 
                        "green"
                    }}
                ></div>

                <div className='taskFooter'>
                    {renderActionButtons()}
                    
                    <div className='trash'>
                        {columnId === 'done' ? 
                            <div><i className="fa-solid fa-thumbs-up fa-flip-horizontal"></i></div> : 
                            ''   
                        }
                        <button onClick={() => deleteOne(task.id)}>
                            <i className="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </div>
                
            </div>
        </>
    )
}


