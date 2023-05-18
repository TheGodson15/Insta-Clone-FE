import { useEffect, useState } from 'react';
import './App.css';
import Login from "./Pages/Login/Login";
import Landing from "./Pages/Landing/Landing";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Feed from "./Pages/Feed/Feed";
import Explore from "./Pages/Explore/Explore";
import Story from "./Pages/Story/Story";

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('token') != null) 
  {
    setLoggedIn(true);
  }
  
  }, [])
  return (
    <div className="App">
      {isLoggedIn && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}>
              <Route path="/" element={<Feed />}></Route>
              <Route path="explore" element={<Explore />}></Route>
            </Route>
            <Route path="story" element={<Story />}></Route>
          </Routes>
        </BrowserRouter>
      )}
      {!isLoggedIn && <Login />}
      
    </div>
  );
}

export default App;
