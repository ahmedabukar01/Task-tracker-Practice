import React from 'react'
import Singletask from './Singletask'

const Tasks = ({tasks,toggleReminder}) => {
    
    return (
        <div className="tasks">
            {tasks.map((task)=>(
                <Singletask key={task.id} task={task} 
                toggleReminder={toggleReminder}/>
            ))}
        </div>
    )
}

export default Tasks
