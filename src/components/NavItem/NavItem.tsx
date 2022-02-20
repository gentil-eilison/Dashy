import style from './NavItem.module.scss'

type NavItemData = {
    children: any
    src: any 
    path: string 
    alt: string 
}

const NavItem = (props: NavItemData) => {
    return (
        <div className={style.navWrapper}>
            <a href={props.path} className={style.navLink}>
                <img src={props.src} alt={props.alt}/>
                {props.children}
            </a>
        </div>
    )
}

export default NavItem