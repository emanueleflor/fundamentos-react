import { Avatar } from "./Avatar"
import styles from "./Sidebar.module.css"
import { PencilLine } from "phosphor-react"

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        
            <div className={styles.profile}>

                <Avatar src="https://github.com/emanueleflor.png"/>
                <strong>Leli Flor</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil</a>
            </footer>
        </aside>
    )
}