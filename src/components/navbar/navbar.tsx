import React, { ReactElement } from 'react'
import Search from '../search/search'
import styles from './navbar.m.scss'

const Navbar = (): ReactElement => {
  return <div className={styles.navbar}>
    <Search />
    <div>
      <div>Notifications</div>
      <div>
        <div>Avatar</div>
      </div>
    </div>
  </div>
}

export default Navbar