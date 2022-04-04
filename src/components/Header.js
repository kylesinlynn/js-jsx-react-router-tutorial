import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <h1>React Routing Tutorial</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
            </ul>
        </div>
    )
}

export default Header