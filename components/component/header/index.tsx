import { Navbar } from "../navbar"
import styles from './header.module.scss'

export const Header = () => {
    return (
        <header className={styles.header} >
            <Navbar />
        </header>
    )
}