import Buttons from './Buttons'
import {useLocation} from 'react-router-dom'

const Header = ({setShowTask,showTask})=>{
    const location = useLocation();

    const testing = ()=>{
        setShowTask(!showTask)
    }
    return(
        <header className="header">
            <h1>Task Tracker App</h1>
            {location.pathname === '/' && <Buttons onClick={testing} text={showTask? 'Close':'Add'} color={showTask? 'red': 'green'}/>}
        </header>
    )
}

export default Header