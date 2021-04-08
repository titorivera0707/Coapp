import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing"
import Header from "./Components/NavBar/Header"
import Explore from "./pages/Explore/Explore"
import Profile from "./pages/Profile/Profile"

function App() {
  return (
    <Router>
    <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;