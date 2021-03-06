import React from 'react'

const SingleTask = ({task, toggleReminder,deleteTask}) => {
    
    return (
        <div className={`single-task ${task.reminder?'reminder':''}`}
        onDoubleClick={()=>toggleReminder(task.id)}>
            <div className="info">
                <h3>{task.text}</h3>
                <p>{task.day}</p>
            </div>
            <i className="fas fa-window-close" onClick={()=>deleteTask(task.id)}></i>
        </div>
    )
}

export default SingleTask
