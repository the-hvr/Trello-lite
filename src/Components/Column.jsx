import './Style/Column.css';
import TaskCard from './TaskCard';
import AddTaskForm from './AddTaskForm';

export default function Column({title, tasks, columnId, setBoard}){

    function emptyColumn(columnId){
        setBoard(prevBoard => ({
            ...prevBoard,
            [columnId] : []
        })
        )
    }

    return (
        <>
            <div className="column">
                <div className='title'>
                    <h2>{title}</h2>
                    <button onClick={() => emptyColumn(columnId)}>Empty column</button>
                </div>

                {tasks.map(task => (
                    <TaskCard 
                        key={task.id}
                        id= {task.id}
                        task={task}
                        columnId={columnId}
                        setBoard={setBoard}
                    />
                ))}

                {columnId !== 'done' && (
                    <AddTaskForm 
                        columnId={columnId} 
                        setBoard={setBoard}/>
                )}
            </div>

        </>
    )
}   