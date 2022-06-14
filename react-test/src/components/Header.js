import React from 'react'

function Header() {
  return (
<header style={headerStyles}>
    <div className="container" >
        <h2>My React Blog</h2>
    </div>
    </header>
  )
}

const headerStyles = {
    backgroundColor : "rgba(0,0,0,0.4)",
    color : "#ff6a95"
}

export default Header 
