import React from "react";
import Giveaway from "./Giveaway";
import "../style.css"

const Main = () => {
  return(
      <section className="mainContent">
        <div className="container">
          <div className="main">
            <h1>Online Çekiliş Yapmanın En Basit Hali!</h1>
            <h2>Tek tıkla rahatça kazananı belirle</h2>
            <Giveaway/>
          </div>
        </div>
      </section>
  )
}
export default Main
