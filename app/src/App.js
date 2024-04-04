import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Searchbar from "./components/Searchbar"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import SeriesPage from "./pages/SeriesPage"
import data from "./data.json"



function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      
      <Searchbar />

      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/series" element={<SeriesPage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
