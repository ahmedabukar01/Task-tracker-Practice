import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2020 All right reserved</p>
            <Link to="/About">About</Link>
        </footer>
    )
}

export default Footer
