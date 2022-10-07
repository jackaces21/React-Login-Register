import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        {/* <Route path="/dashboard">
          <Navbar />
          <Dashboard />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;