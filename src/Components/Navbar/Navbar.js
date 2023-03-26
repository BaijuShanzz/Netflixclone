import { React } from 'react'
// importing navbar css
import './Navbar.css'
const Navbar = () =>{
    return(
        // navbar container
        <div className="navbar-container">
            {/* netflic logo*/}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="this is logo" className="logo" />
            {/* avatarlogo */}
            <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="this is avatar" className="avatar" />
        </div>
    );
}

export default Navbar;