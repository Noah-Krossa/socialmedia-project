import React from 'react'
import Menu from './components/menu/menu'
import Navbar from './components/navbar/navbar'

const App = (): React.ReactElement => {
  return <div>
    <Menu />
    <Navbar />
  </div>
}

export default App