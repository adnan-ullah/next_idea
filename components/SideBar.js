import Link from "next/link";
import React from "react";
import styles from "../styles/SideBar.module.css";
function SideBar() {
  return (
    <div className="sidebar" >
      <nav className={styles.sideContainer}>
        <ul className="navbar-nav">
          <li className="nav-item active ">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/form/">
              <a className="nav-link">Add Cloth</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/store">
              <a className="nav-link">Store</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/student/4">
              <a className="nav-link">Locate</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/student/4">
              <a className="nav-link">Expo</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/student/4">
              <a className="nav-link">Blogs</a>
            </Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
