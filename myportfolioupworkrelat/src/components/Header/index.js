import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
    <div className="header-container">
        <div >
    <nav className='arrangeItem'>
        <p className='venkateswarawsd'>venkateswara</p>
        <h1 className='headerCoala'>🦥</h1>
<p >
    
        <Link to='/' className='homeHedi'>Home</Link>
        </p>
        <p >
        <Link to='/about' className='homeHedi'>About</Link>
        </p>
        <p ><Link to="projects" className='homeHedi'>Projects</Link></p>
        <p >
        <Link to='/contact' className='homeHedi'>Contact</Link>
        </p>
        
    </nav>
    
    </div>
    </div>
)
export default Header 