import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {
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
      reminder: false,
      day: '12 oct 2021'
    }
  ])

  return (
    <div className="container">
     <Header />
     <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
