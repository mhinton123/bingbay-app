import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Searchbar from "./components/Searchbar"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"


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
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
