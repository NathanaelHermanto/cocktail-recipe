import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from './Components/NavigationBar';
import Routes from './Components/Routes';

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes />
    </Router>
    
  );
}

export default App;
