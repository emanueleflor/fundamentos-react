import { Header } from "./components/Header.jsx"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import "./global.css"

const posts =[
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/emanuelerosa.png',
      name: 'Emanuele Flor',
      role: 'Software Engineer'
    },
    content: [
      {type: 'paragraph', text: 'Fala Galera!'},
      {type: 'paragraph', text: 'Acabei de postar uma nova viodeo aula no meu canal!'},
      {type: 'paragraph', text: 'Vem conferir!'},
      {type: 'link', url: 'jane.desing/doctorcare'}
    ],
    publishedAt: new Date('2021-03-11 16:12:00').toISOString()
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/emanuelerosa.png',
      name: 'Emanuele Flor',
      role: 'Educator'
    },
    content: [
      {type: 'paragraph', text: 'Fala Galera!'},
      {type: 'paragraph', text: 'Acabei de postar uma nova viodeo aula no meu canal!'},
      {type: 'paragraph', text: 'Vem conferir!'},
      {type: 'link', url: 'jane.desing/doctorcare'}
    ],
    publishedAt: new Date('2024-04-11 08:12:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
       <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })} 
        </main>
      </div>
    </div>
  );
}
