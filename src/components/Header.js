import React from "react";
import "../style.css"

const Header = () => {

  return(

    <header>
      <div className="container">
        <div className="header">
          <div className="header-logo-area">
            <img className="header-logo" src="/images/yonca-logo.png"/>
            <h2 className="header-title">ONLINE ÇEKİLİŞ</h2>
          </div>
          <h3 className="header-contact">İletişim</h3>
        </div>
      </div>
    </header>

  )

}

export default Header
