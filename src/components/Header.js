import{Link} from 'react-router-dom'
import './header.css'
const Header=()=>{
    return(
        <div className='headercontainer'>
            <div className='hone'>
                <img src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png" alt="logo" className='logo'/>
                <h1>Wave</h1>
            </div>
            <div className='htwo'>
                <Link to="/" className='item'>Home</Link>
                <Link to="/about"  className='item'>About</Link>
                <Link to="/contact"  className='item'>Contact</Link>
            </div>
        </div>
    )
}
export default Header