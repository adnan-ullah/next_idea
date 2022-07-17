import React from "react";
import Footers from "./Footers";
import Headers from "./Headers";
import styles from '../styles/Home.module.css'
import SideBar from "./SideBar";

export default function Layout({ children }) {
  return (
    <div className={styles.rootHead}>
      <Headers />
      <div className={styles.container}>
      <div className='container-fluid vh-100'>
        <div className="row ">
          <div className="col-6 col-md-2 p-0 " id = {styles.sideLayout}>
          <SideBar/>
          </div>
          <div className="col-md-8 bg-body bg-opacity-60 vh-100 ">{children}</div>
          <div className="col-6 col-md-2 bg-dark">
            
          </div>
        </div>
      </div>
        </div> 
      
      <Footers />
    </div>
  );
}
