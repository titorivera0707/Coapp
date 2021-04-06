import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing"
import Header from "./components/NavBar/Header"
import Explore from "./pages/Explore/Explore"

function App() {
  return (
    <Router>
    <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/explore" component={Explore} />
      </Switch>
    </Router>
  );
}

export default App;