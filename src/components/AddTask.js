import React from 'react'
import {useState} from 'react'
const AddTask = ({setTasks,tasks}) => {
   const [text,setText] = useState('')
   const [day,setDay] = useState('')
   const [reminder,setReminder] = useState(false)

   const getData = (e) => {
       e.preventDefault();
       if(text.length > 0){
        const task = {text,day,reminder}
        setTasks([...tasks,task])
        postData(task);
        
        setText('')
        setDay('')
        setReminder(false)
       } else{
        alert('please in the blank')
       }
   }
   // add task to json-server
   const postData = async (task) =>{
       await fetch('http://localhost:8000/tasks',{
           method: 'POST',
           headers: {'content-type': 'application/json'},
           body: JSON.stringify(task)
       })
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
