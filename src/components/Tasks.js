import React from 'react'
import Singletask from './Singletask'

const Tasks = ({tasks,toggleReminder,deleteTask}) => {
    
    return (
        <div className="tasks">
            {tasks.map((task)=>(
                <Singletask key={task.id} task={task} 
                toggleReminder={toggleReminder}
                deleteTask={deleteTask}/>
            ))}
        </div>
    )
}

export default Tasks
