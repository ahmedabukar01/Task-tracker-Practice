import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import {useEffect} from 'react'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  const [showTask,setShowTask] = useState(false);
  const [tasks,setTasks] = useState([''])

  // reminder
  const toggleReminder = async (id)=>{
    // setTasks(tasks.map((task,index)=>task.id===id? {...task, reminder:!task.reminder}:task))
    let task = tasks.find((task)=>task.id === id);
    task = {...task,reminder:!task.reminder}

    const updTask = await fetch(`http://localhost:8000/tasks/${id}`,{
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body:JSON.stringify(task)
    })
    const newTask = await updTask.json();
    setTasks(tasks.map((task)=>task.id ===id? newTask:task));
  }

  // delete
  const deleteTask = async (id) =>{
      setTasks(tasks.filter(task=> task.id !==id))
      await fetch(`http://localhost:8000/tasks/${id}`,{
        method: 'DELETE',
      })
  }
  // fetch
  const fetchData = async ()=>{
    const res = await fetch('http://localhost:8000/tasks');
    const data = await res.json();
    return data
  }
  const getSomething = async()=>{
    const getTasks = await fetchData();
    setTasks(getTasks);
  }
  
  useEffect(()=>{
    getSomething();
  },[])
  return (
    <Router>
    <div className="container">
     <Header setShowTask={setShowTask} showTask={showTask}/>
     <Route path="/" exact render={(props)=>(
       <>
        {showTask && <AddTask getSomething={getSomething} tasks={tasks} setTasks={setTasks}/>}
        {tasks.length >0 ? <Tasks tasks={tasks} toggleReminder={toggleReminder}
        deleteTask={deleteTask}/>: (<p className="no-tasks">Sorry no Tasks to show</p>)}
        <Footer />
       </>
     )}/>
     <Route path="/About" component={About}/>
    </div>
    </Router>
  );
}

export default App;
