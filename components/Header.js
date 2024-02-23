import React from 'react'
import styles from './header.module.css';

const Header = () => {
  return (
    <div className= "h-40" id="header">
        <div className={styles.container}>

            <img className="h-40 p-4 w-150 pl-11" src="https://res.cloudinary.com/monday-platform-eu/image/upload/v1707221730/board_views_images/logos/1707221730243_d19d73be-047c-8f87-79ad-ab5818799acb.png" alt="Studio Logo" />

            <div className={`${styles.box} ${styles.lowered}`}>
            <p className={styles.text}>Content Marketing</p>
            </div>
        </div>
    </div>
  )
}

export default Header