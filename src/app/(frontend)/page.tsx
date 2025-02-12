import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const todos = await payload.find({
    collection: 'Todos',
  })

  return (
    <div className="home">
      <h1>Todos coming from Payload CMS: {todos.totalDocs}</h1>
      <ul>
        {todos?.docs.map((todo) => {
          return (
            <li key={todo.id}>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
              <p>Created at: {new Date(todo.createdAt).toDateString()}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
