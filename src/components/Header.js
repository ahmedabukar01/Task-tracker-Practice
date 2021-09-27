import Buttons from './Buttons'

const Header = ({setShowTask,showTask})=>{
    const testing = ()=>{
        setShowTask(!showTask)
    }
    return(
        <header className="header">
            <h1>Task Tracker App</h1>
            <Buttons onClick={testing} text={showTask? 'Close':'Add'} color={showTask? 'red': 'green'}/>
        </header>
    )
}

export default Header