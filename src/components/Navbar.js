import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div>
            <Link to='/' >Home</Link>
            <Link to='/contact' >Contact</Link>
            <Link to='/login'>Login</Link>
            <Link to='/profile'>Profile</Link>
        </div>
    )
}