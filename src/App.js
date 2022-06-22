import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

class App extends React.Component {
  render() {

    return (
      <div className='wrapper'>
        <Header headerNav = {this.props.headerNav} />
        <Routes>
          <Route path='/' element={<Main {...this.props} />} />
        </Routes>
        <Footer footerNav = {this.props.footerNav} />
      </div>
    )
  }
}

export default App;
