import Head from 'next/head'
import Image from 'next/image'
import Headers from '../components/Headers'
import Meta from '../Meta'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <Meta title='ADNAN JICO' keywords = 'abc, xyz, 123' desc = 'this is desc opntn'/> 
    </div>
  )
}
