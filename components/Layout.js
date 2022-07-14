import React from 'react'
import Footers from './Footers'
import Headers from './Headers'

export default function Layout({children}) {
  return (
    <>
    <Headers/>
    {children}
    <Footers/>
    </>
  )
}
