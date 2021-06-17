import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './resetCSS.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Artist from './components/Artist/Artist';
import Show from './components/Show/Show';
import Press from './components/Press/Press';
import Contact from './components/ContactUs/Contact';
import Footer from './components/Footer/Footer';
import Artworks from './components/Artworks/Artworks';
import Picture from './components/Picture/Picture';
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Artist" component={Artist} />
        <Route path="/Show" component={Show} />
        <Route path="/Press" component={Press} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Artworks" component={Artworks} />
        <Route path="/Picture" component={Picture} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
