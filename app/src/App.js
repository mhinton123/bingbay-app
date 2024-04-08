import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import './App.css';

import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import SeriesPage from "./pages/SeriesPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"

import Logo from "./assets/logo.svg";
import NavHomeIcon from "./assets/icon-nav-home.svg";
import NavMoviesIcon from "./assets/icon-nav-movies.svg";
import NavSeriesIcon from "./assets/icon-nav-tv-series.svg";
import AvatarIcon from "./assets/icon-avatar.svg";

import data from "./data.json"

const DataContext = React.createContext()

function App() {
  // tracks whether the user is searching or not
  const [searchValue, setSearchValue] = React.useState(false)
  // tracks the current page the browser is on
  const [page, setPage] = React.useState(null)


  // reset search value every time different page loads
  React.useEffect(()=> {
    setSearchValue("");
  }, [page])

  // Conditionally render the navbar based on the current page
  const renderNavbar = () => {
    if (page === "login") {
      return null; // Don't render the navbar on the login page
    }
    return (
      <header>
        <nav>
          <div className="navbar-wr">
            <div className="nav-icons-wr">
              <NavLink to="/">
                <img className="logo" src={Logo} alt="logo" />
              </NavLink>
              <NavLink 
                className={({isActive}) => isActive ? "active-link" : "" }
                to="/">
                <img className="nav-icon" src={NavHomeIcon} alt="Home Icon" />
              </NavLink>
              <NavLink 
                className={({isActive}) => isActive ? "active-link" : "" }
                to="/movies">
                <img className="nav-icon" src={NavMoviesIcon} alt="Movies Icon" />
              </NavLink>
              <NavLink 
                className={({isActive}) => isActive ? "active-link" : "" }
                to="/series">
                <img className="nav-icon" src={NavSeriesIcon} alt="Series Icon" />
              </NavLink>
            </div>
            <NavLink to="/login">
              <img className="avatar-icon" src={AvatarIcon} alt="Avatar Icon" />
            </NavLink>
          </div>
        </nav>
      </header>
    );
  };

  return (
    <div className="App">
      <Router> {/* Wrap your App component with Router */}
        {renderNavbar()} {/* Render the navbar */}
        <main>
          <DataContext.Provider value={{ data, searchValue, setSearchValue, page, setPage }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/series" element={<SeriesPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Routes>
          </DataContext.Provider>  
        </main>
      </Router>
    </div>
  );
}

export default App;
export { DataContext }
