import React, { useState } from 'react'
import { Filter, Blogcard } from '../components'
import { blogStyle } from '../styles'
import { useGlobalContext } from '../context/GlobalContextProvider'

const Blog = () => {
  const {posts} = useGlobalContext()
  return (
    <main>
        <div className={ blogStyle.blogContainer }>
          <Filter/>
          <div className={ blogStyle.posts }>
              {
                  posts.map((post) =>(
                      <Blogcard {...post} key={post.id} />
                  ))
              }
          </div>
        </div>
    </main>
    
  )
}

export default Blog