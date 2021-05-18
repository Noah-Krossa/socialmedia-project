import React, { ReactElement, useState } from 'react'
import styles from './navbar.m.scss'

const Navbar = (): ReactElement => {

  const [buttonState, setButtonState] = useState(true)
  const handleOnChange = (e) => {
    const {target}  = e
    if(target.value) setButtonState(false)
    else setButtonState(true)
  }

  return <div className={styles.navbar}>
    <div className={styles.search}>
      <button data-visible={buttonState}>
        <i className="fas fa-search"></i>
        Search...
      </button>
      <input onChange={handleOnChange} type="text" />
    </div>
    <div>
      <div>Notifications</div>
      <div>
        <div>Avatar</div>
      </div>
    </div>
  </div>
}

export default Navbar