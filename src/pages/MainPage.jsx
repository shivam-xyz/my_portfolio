import React, { useEffect } from 'react'
import Header from '../components/Header'
import Personal_Info_Section from '../components/Personal_Info_Section'

const MainPage = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
},[])
  return (
    <>
        <Header/>
        <Personal_Info_Section/>
    </>
  )
}

export default MainPage