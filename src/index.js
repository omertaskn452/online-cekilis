import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./style.css"

const App = () => {
  return(
    <div className="wrap">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
ReactDOM.render(<App/>, document.getElementById("root"))