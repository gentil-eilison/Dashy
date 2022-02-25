import style from './NavItem.module.scss'
import { Link } from 'react-router-dom'

type NavItemData = {
    children: any
    src: any 
    path: string 
    alt: string 
    handleClick?: () => void
}

const NavItem = (props: NavItemData) => {
    return (
        <div className={style.navWrapper}>
            <Link to={props.path} className={style.navLink} onClick={props.handleClick}>
                <img src={props.src} alt={props.alt}/>
                {props.children}
            </Link>
        </div>
    )
}

export default NavItem