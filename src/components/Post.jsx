import { format, formatDistanceToNow } from "date-fns"
import { ptBR } from 'date-fns/locale';
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"
import { useState } from "react";


export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState([
        1,
        2,
        3,
    ])

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm", {
        locale: ptBR,
    })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault()

        set.comments([...comments, comments.length + 1])
        console.log(comments)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    switch (line.type) {
                        case 'paragraph':
                            return <p>{line.text}</p>
                            break;

                        case 'link':
                            return <p><a href="#">{line.url}</a></p>
                        default:
                            break;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => (
                     <Comment />
                ))}
            </div>


        </article>
    )
}