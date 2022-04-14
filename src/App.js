import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home';
import Drinks from './Components/Drinks';
import About from './Components/About';
import Ingredients from './Components/Ingredients';

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route exact path="/cocktail-recipe" element={<Home/>} />
        <Route path="/drinks" element={<Drinks/>} />
        <Route path="/ingredients" element={<Ingredients/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
