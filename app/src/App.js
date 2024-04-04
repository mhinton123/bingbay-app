import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import './App.css';
import Searchbar from "./components/Searchbar"
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import SeriesPage from "./pages/SeriesPage"
import data from "./data.json"

import Logo from "./assets/logo.svg";
import NavHomeIcon from "./assets/icon-nav-home.svg";
import NavMoviesIcon from "./assets/icon-nav-movies.svg";
import NavSeriesIcon from "./assets/icon-nav-tv-series.svg";
import NavBookmarkedIcon from "./assets/icon-nav-bookmark.svg";
import AvatarIcon from "./assets/icon-avatar.svg";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <nav>
            <div className="navbar-wr">
              <img className="logo" src={Logo} alt="logo" />
              <div className="nav-icons-wr">
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
                <NavLink 
                  className={({isActive}) => isActive ? "active-link" : "" }
                  to="/bookmarked">
                  <img className="nav-icon" src={NavBookmarkedIcon} alt="Bookmarked Icon" />
                </NavLink>
              </div>
              <img className="avatar-icon" src={AvatarIcon} alt="Avatar Icon" />
            </div>
          </nav>
        </header>
        
        <Searchbar />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/series" element={<SeriesPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;