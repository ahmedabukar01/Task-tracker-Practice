import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import AddTask from './components/AddTask'

function App() {
  const [showTask,setShowTask] = useState(false);
  const [tasks,setTasks] = useState([
    {
      id:1,
      text:'cooking food',
      reminder: false,
      day: '2 feb 2021'
    },
    {
      id:2,
      text:'watching movie',
      reminder: false,
      day: '29 jan 2020'
    },
    {
      id:3,
      text:'play with code',
      reminder: true,
      day: '12 oct 2021'
    }
  ])

  // reminder
  const toggleReminder = (id)=>{
    setTasks(tasks.map((task,index)=>task.id===id? {...task, reminder:!task.reminder}:task))
  }

  // delete
  const deleteTask = (id) =>{
      setTasks(tasks.filter(task=> task.id !==id))
  }
  return (
    <div className="container">
     <Header setShowTask={setShowTask} showTask={showTask}/>
     {showTask && <AddTask />}
     {tasks.length>0 ? <Tasks tasks={tasks} toggleReminder={toggleReminder}
     deleteTask={deleteTask}/>: (<p className="no-tasks">Sorry no Tasks to show</p>)}
    </div>
  );
}

export default App;
