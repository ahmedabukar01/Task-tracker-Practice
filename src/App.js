import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import {BrowserRouter as Router,Route} from 'react-router-dom';

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
    <Router>
    <div className="container">
     <Header setShowTask={setShowTask} showTask={showTask}/>
     <Route path="/" exact render={(props)=>(
       <>
        {showTask && <AddTask tasks={tasks} setTasks={setTasks}/>}
        {tasks.length>0 ? <Tasks tasks={tasks} toggleReminder={toggleReminder}
        deleteTask={deleteTask}/>: (<p className="no-tasks">Sorry no Tasks to show</p>)}
       </>
     )}/>
     <Route path="/About" component={About}/>
     <Footer />
    </div>
    </Router>
  );
}

export default App;
