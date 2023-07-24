import React from "react";
import Giveaway from "./Cekilis";
import "../style.css"

const Main = () => {

  return(

      <main>
        <div className="container">
          <div className="main">
            <h1>Online Çekiliş Yapmanın En Basit Hali!</h1>
            <h2>Tek tıkla rahatça kazananı belirle</h2>
            <Giveaway/>
          </div>
        </div>
      </main>

  )

}

export default Main
