import Link from "next/link";
import React from "react";
import styles from '../styles/Headers.module.css'
function Headers() {
  return (
    <div className="card bg-red-900 fixed-top  ">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand text-white">
          Enigma ENV
        </a>
       
        <div className="collapse navbar-collapse" id={styles.navbarNav}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/student/2">
                <a className="nav-link">Documentation</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href='/student/3'>
              <a className="nav-link">Examples</a>
              </Link>
            </li>
            <li className="nav-item">
            <Link href='/student/4'>
            <a className="nav-link">Themes</a>
            </Link>
            </li>
            <li className="nav-item">
            <Link href='/student/4'>
            <a className="nav-link">Expo</a>
            </Link>
            </li>
            <li className="nav-item">
            <Link href='/student/4'>
            <a className="nav-link">Blogs</a>
            </Link>
            </li>
          </ul>
        </div>


        <div className="navbar-end " id={styles.navbarNavRigth}>
          <ul className="navbar-nav ml-auto mr-auto">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link"><i className="bi bi-instagram"></i></a>
              </Link>
            </li>
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link"><i className="bi bi-facebook"></i></a>
              </Link>
            </li>
            <li className="nav-item active">
              <Link href="https://github.com/adnan-ullah">
                <a className="nav-link"><i className="bi bi-github"></i></a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/student/2">
                <a className="nav-link">Desks</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href='/student/3'>
              <a className="nav-link">Vision</a>
              </Link>
            </li>
            <li className="nav-item">
            <Link href='/student/4'>
            <button type="button" className="btn btn-outline-dark">Download</button>
            </Link>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  );
}

export default Headers;
