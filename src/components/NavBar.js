import styles from '../styles/navbar.module.css'
import Link from "next/link";

const NavBar = ()=>{
    return(
        <ul className={styles.navbar}>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/products'>Produtos</Link></li>
            <li><Link href='/todos'>Todos</Link></li>
            <li><Link href='/about'>Sobre Nós</Link></li>
        </ul>
    )
}

export default NavBar;