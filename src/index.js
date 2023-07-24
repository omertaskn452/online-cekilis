import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import Main from "./components/Main";
import "./style.css"

const App = () => {

  return(

    <div>
      <Header/>
      <Main/>
    </div>

  )

}

ReactDOM.render(<App/>, document.getElementById("root"))