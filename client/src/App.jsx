import React from 'react'
import injectContext from './js/store/appContext.jsx'
import ScrollToTop from './js/components/scrollToTop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './js/pages/landingPage.jsx'
import Login from './js/pages/login.jsx'
import './styles/App.css'

const App = () => {

  return (
    <>
      <div className="app-container">
        <BrowserRouter>
          <ScrollToTop>
            {/*} <Navbar> {*/}
            <Routes>
              <Route element ={<LandingPage />} path="/" />
              <Route element ={<Login />} path="/login" />
              <Route element ={<Dashboard />} path="/Dashboard" />
              <Route element ={<PageNotFound />} path="/Dashboard" />
            </Routes>
            {/*} </Navbar> {*/}
          </ScrollToTop>
        </BrowserRouter>
      </div>
    
    
    </>
  );
};


const AppWithContext= injectContext(App);
AppWithContext.displayName = "AppWithContext";


export default AppWithContext;
