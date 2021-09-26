import React from 'react'

const SingleTask = ({task}) => {
    
    return (
        <div className="single-task">
            <div className="info">
                <h3>{task.text}</h3>
                <p>{task.day}</p>
            </div>
            <i className="fas fa-window-close"></i>
        </div>
    )
}

export default SingleTask
