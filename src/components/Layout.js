import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import MenuHeader from './header/MenuHeader'

const Layout = (props) => {
  return (
    <>
        {/* <Header/> */}
        {/* <MenuHeader/> */}
        {/* {props.children} */}

        <div className="app-container">
          <div className="main-container">
            <main>
              <Outlet />
            </main>
          </div>
        </div>
    </>
  )
}

export default Layout