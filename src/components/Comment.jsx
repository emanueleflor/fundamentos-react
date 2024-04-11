import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"
import { Trash, ThumbsUp} from "phosphor-react"
export function Comment(){
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https:github.com/emanuelerosa.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Emanuele Rosa</strong>
                            <time title="11 de abriL as 11:42 "dateTime="2024-11-04 11:42:05">Cerca de 1 hora atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    
                    <p>
                        Muito bom Devon, parabéns!
                    </p>
                </div>

               <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button> 
               </footer>
            </div>
        </div>
    )
}