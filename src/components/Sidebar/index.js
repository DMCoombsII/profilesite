import './index.scss'
import { Link, NavLink } from'react-router-dom'
import logo1 from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logo1} alt='logo' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#000000' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#000000' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#000000' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/david-coombs-58207a177/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#00000' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/DMCoombsII'>
                    <FontAwesomeIcon icon={faGithub} color='#00000' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://twitter.com/davidwillcode?s=11&t=yWZqaRrQ2kMafYIFmeqHDg'>
                    <FontAwesomeIcon icon={faTwitter} color='#00000' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar