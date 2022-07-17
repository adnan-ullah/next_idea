import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
export default function Studenst() {
    const router = useRouter()
    const {id} = router.query
    

  return (
    <div className={styles.main}>

   
     <div className={styles.card}>
      <h2>This page is {id} number</h2>
      <hr/>
      <p>This is ENIGMA ENV team . We are providing the best clothing store which exports the best quality.</p>
     </div>
     </div>
  )
}
