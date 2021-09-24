
import React from 'react';
import ReactGA from 'react-ga';
import Routes from './Route'
import NavBar from './component/Navbar'
ReactGA.initialize('UA-208541593-1', {
  debug: true,
  titleCase: false,
  gaOptions: {
    userId: 123
  }
});
ReactGA.pageview(window.location.pathname + window.location.search);
function App() {
  return (
    <>
    <NavBar/>
    <Routes/>
    </>
  );
}

export default App;
