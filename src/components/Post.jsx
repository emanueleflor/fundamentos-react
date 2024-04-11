import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https:github.com/emanueleflor.png" />
                    <div className={styles.authorInfo}>
                        <strong>Leli Flor</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de abriL as 11:42 "dateTime="2024-11-04 11:42:05">Publicado ha 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Aula no portifolio</p>
                <p> <a href="">jane.desing/doctor.care</a></p>
                <p> <a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />
                
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}