import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing"
import Header from "./Components/NavBar/Header"

function App() {
  return (
    <Router>
    <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;