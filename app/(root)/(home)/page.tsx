import React from 'react'
import { UserButton } from '@clerk/nextjs'

const Home = () => {
  return (
    <div className='flex-center'>
      Home
      <UserButton/>
    </div>
  )
}

export default Home
