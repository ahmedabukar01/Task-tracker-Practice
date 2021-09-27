import React from 'react'
import {useState} from 'react'
const AddTask = ({setTasks,tasks}) => {
   const [text,setText] = useState('')
   const [day,setDay] = useState('')
   const [reminder,setReminder] = useState(false)

   const getData = (e) => {
       e.preventDefault();
       const id = tasks.length+1;
       const task = {text,day,reminder,id}
       setTasks([...tasks,task])

       setText('')
       setDay('')
       setReminder(false)
   }

    return (
        <form className="add-task" onSubmit={getData} >
            <div className="input-field">
                <label>Add Task</label>
                <input type="text" name="task" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)} />
            </div>
            <div className="input-field">
                <label>Date & Time</label>
                <input type="text" name="date" placeholder="Date & Time" value={day} onChange={(e)=>setDay(e.target.value)}/>
            </div>
            <div className="input-field checkbox">
                <label>Reminder</label>
                <input type="checkbox" checked={reminder} onChange={(e)=>setReminder(e.target.value)}/>
            </div>
            <input type="submit" value="Send"/>
        </form>
    )
}

export default AddTask
