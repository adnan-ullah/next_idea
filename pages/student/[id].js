import React from 'react'
import { useRouter } from 'next/router'
export default function Studenst() {
    const router = useRouter()
    const {id} = router.query
    

  return (
    <div>{id}</div>
  )
}
