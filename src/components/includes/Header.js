import React from 'react'

function Header() {
  return (
    <>
    <header>
        <h1>
            <a href="#" >
                <img src={require("../../assets/logo.svg").default} alt="logo" />
            </a>
        </h1>
    </header>
    </>
  )
}

export default Header