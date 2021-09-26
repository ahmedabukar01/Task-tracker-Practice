import Buttons from './Buttons'

const Header = ()=>{
    return(
        <header className="header">
            <h1>Task Tracker App</h1>
            <Buttons text="Add" color="green"/>
        </header>
    )
}

export default Header