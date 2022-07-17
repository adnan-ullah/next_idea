import React from 'react'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'
export default function Footers() {
  return (
    <div className='fixed-bottom'>
    <footer className={styles.footer}>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' Adnan Ullah    '}
      <span className={styles.logo}>
        <Image src="/adidas.png" alt="adidas Logo" width={40} height={16}  />
      </span>
    </a>
  </footer>
  </div>
  )
}
