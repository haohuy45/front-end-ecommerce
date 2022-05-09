import React from 'react'
import HeaderMain from './HeaderMain';

import MenuHeader from './MenuHeader';
import TopBar from './TopBar';


const Header = () => {
  return (
    <header className='header'>
      <TopBar/>
      <HeaderMain/>
      <MenuHeader />
    </header>
  )
}

export default Header