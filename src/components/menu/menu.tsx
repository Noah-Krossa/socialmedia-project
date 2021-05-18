import React, { ReactElement } from "react";
import styles from './menu.m.scss'

const Menu = (): ReactElement => {
  return <div className={styles.menu_container}>
    <div className={styles.menu}>
      <a href="#" className={styles.selected}>
        <i  className="fas fa-home"></i> Home page
      </a>
      <a href="#">
        <i className="fas fa-compass"></i> Explore
      </a>
      <a href="#">
        <i className="fas fa-user-friends"></i> Friends
      </a>
      <a href="#">
        <i className="fas fa-comment-alt"></i> Chats
      </a>
      <a href="#">
        <i className="fas fa-cog"></i> Settings
      </a>
    </div>
    <button className={styles.button_logout}>
      <i className="fas fa-sign-out-alt"></i> Logout
    </button>
  </div>
}

export default Menu