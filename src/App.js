import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './psges/HomePage';
// import LoginPage from './psges/LoginPage';
// import LogOut from './psges/LogOut'; 
// import Private from './components/Private';
// import UserPage from './psges/UserPage';
import { lazy ,Suspense} from 'react';
import HeaderComponents from './components/DrawerAppBar';
import Footer from './components/Footer';
// import Loader from './components/Loader';
const HomePage=lazy(()=>import("./psges/HomePage")) 
const LoginPage=lazy(()=>import("./psges/LoginPage")) 
const LogOut=lazy(()=>import("./psges/LogOut")) 
const Private=lazy(()=>import("./components/Private")) 
const UserPage=lazy(()=>import("./psges/UserPage"))
const Loader=lazy(()=>import("./components/Loader")) 
const DrawerAppBar=lazy(()=>import('./components/DrawerAppBar'))


function App() {
  return (
    <Router>
     <Suspense fallback={<Loader/>}>
     <>
     <DrawerAppBar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/logout" element={<LogOut/>} />
          <Route path="/Privat" element={<Private/>}>
            <Route path="userHome" element={<UserPage/>} />
          </Route>
        </Routes>
        <Footer/>
      </>
     </Suspense>
    </Router>
  );
}

export default App;
