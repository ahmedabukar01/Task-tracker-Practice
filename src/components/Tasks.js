import React from 'react'
import Singletask from './Singletask'

const Tasks = ({tasks}) => {
    
    return (
        <div className="tasks">
            {tasks.map((task)=>(
                <Singletask key={task.id} task={task}/>
            ))}
        </div>
    )
}

export default Tasks
