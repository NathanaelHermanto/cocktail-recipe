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
      <NavigationBar style={{margin: "10%"}}/>
      <Routes>
        <Route exact path="/" component={<Home/>} />
        <Route path="/about" component={<About/>} />
        <Route path="/drinks" component={<Drinks/>} />
        <Route path="/ingredients" component={<Ingredients/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
