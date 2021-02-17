import { useParams } from 'react-router-dom'
import React from 'react'

const Page = () => {
  let { id } = useParams()
  return <main>Example page ID: {id}</main>
}

export default Page
