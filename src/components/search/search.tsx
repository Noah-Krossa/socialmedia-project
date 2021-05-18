import React, { ReactElement, useState } from 'react'
import styles from './search.m.scss'

const Search = ():ReactElement => {
  const [buttonState, setButtonState] = useState(true)
  
  const handleOnChange = (e) => {
    const {target}  = e
    if(target.value) setButtonState(false)
    else setButtonState(true)
  }

  return <div className={styles.search}>
    <button data-visible={buttonState}>
      <i className="fas fa-search"></i>
      Search...
    </button>
    <input onChange={handleOnChange} type="text" />
  </div>
}

export default Search