import logo from './logo.svg';
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
        {/* Main Content goes here */}
        <HomePage />
      </main>
    </div>
  );
}

export default App;
