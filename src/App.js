import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useSticky from "hooks/useSticky.js";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";

import "./App.scss";

function App() {
  const { isSticky, element } = useSticky();

  return (
    <Router>
      <Navbar sticky={isSticky} />
      <PageWrapper element={element}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </PageWrapper>
    </Router>
  );
}

// for sticky nav to work
function PageWrapper({ element, children }) {
  return <div ref={element}>{children}</div>;
}

function About() {
  return <h2>About</h2>;
}

export default App;
