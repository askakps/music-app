"use client"; // This is a client component 👈🏽
import { useEffect } from 'react'
import fetchData from '../hooks/fetchData'
export default function Page() {
    const { getPosts }  = fetchData()
    useEffect(() => {
      getPosts()
      console.log('in useEffect')
    }, [])
    
    return <h1>Hello, Dashboard Page!</h1>
}