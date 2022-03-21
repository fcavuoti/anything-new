import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./util/GlobalStyles";
import NavBar from './components/NavBar.js';
import Main from './containers/Main.js';

const menuItems = [
  {
    "name": "work 💛",
    "link": "/",
    "external": false,
    "disabled": false
  },
  {
    "name": "about 🔆",
    "link": "/",
    "external": false,
    "disabled": false
  },
  {
    "name": "resume 📒",
    "link": "/",
    "external": false,
    "disabled": false
  }
]

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <main>
        <GlobalStyles />
        <NavBar menuItems={menuItems} fixed />
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/explore/:dorm" component={Dorm} />
          <Route exact path="/shaftlive" component={ShaftLive} />
          <Route exact path="/housing101" component={Housing101} />
          <Route exact path="/reviews" component={Reviews} /> */}
        </Routes>
      </main>
    </ThemeProvider>
  </Router>
)

export default App;
