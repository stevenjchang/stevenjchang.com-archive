import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useSticky from "hooks/useSticky.js";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import { Footer } from "components/Footer";

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
      <Footer />
    </Router>
  );
}

// for sticky nav to work
function PageWrapper({ element, children }) {
  return (
    <div className="pageWrapper" ref={element}>
      {children}
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
