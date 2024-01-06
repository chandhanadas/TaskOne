import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='back'>
    <React.Fragment>
      <Header/>
      <Content/>
      {/* <Footer/> */}
    </React.Fragment>
    </div>
  );
}

export default App;
