import "./App.css";
import { SampleDashboard } from "./pages/SampleDashboard";
import { ProductionKPIs } from "./pages/ProductionKPIs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ClaimKPIs } from "./pages/ClaimKPIs";

function App() {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route path="/productionKPIs">
            <ProductionKPIs />
          </Route>
          <Route path="/claimKPIs">
            <ClaimKPIs />
          </Route>
          <Route path="/" exact>
            <SampleDashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
