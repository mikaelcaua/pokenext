const { default: Footer } = require("./Footer")
const { default: NavBar } = require("./NavBar")
import styles from '../styles/maincontainer.module.css'

const MainContainer = ({children})=>{
    return(
        <div className={styles.maincontainer}>
            <NavBar></NavBar>
            <div className={styles.children}>{children}</div>
            <Footer></Footer>
        </div>
    )
}

export default MainContainer;