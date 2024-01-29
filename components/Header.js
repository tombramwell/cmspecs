import React from 'react'
import styles from './header.module.css';

const Header = () => {
  return (
    <div className= "h-40" id="header">
        <div className={styles.container}>

            <img className="h-40 p-4 w-150" src="https://res.cloudinary.com/monday-platform-eu/image/upload/v1696420425/board_views_images/logos/1696420424986_2b22ee35-6468-49bb-ebb7-83499bfe1c28.png" alt="Studio Logo" />

            <div className={`${styles.box} ${styles.lowered}`}>
            <p class={styles.text}>Content Marketing Specifications</p>
            </div>
        </div>
    </div>
  )
}

export default Header