import React from 'react'

const AddTask = () => {
    return (
        <form className="add-task">
            <div className="input-field">
                <label>Add Task</label>
                <input type="text" placeholder="Add Task" />
            </div>
            <div className="input-field">
                <label>Date & Time</label>
                <input type="text" placeholder="Date & Time" />
            </div>
            <div className="input-field checkbox">
                <label>Reminder</label>
                <input type="checkbox"/>
            </div>
            <input type="submit" value="Send" />
        </form>
    )
}

export default AddTask
