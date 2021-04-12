import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TestPage from "./pages/testPage";
import TodoPageClass from "./pages/todoPageClass";
import TodoPageHooks from "./pages/todoPageHooks";


function App() {
  const [counts, setCounts] = useState(1000)
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
            <li>
              <Link to="/todo-class">Todo Class</Link>
            </li>
            <li>
              <Link to="/todo-hooks">Todo Hooks</Link>
            </li>
          </ul>
        </nav>

        <div>
          Counts: {counts}: <input type="number" value={counts}  onChange={e=>setCounts(+e.target.value || 0)}/> 
        </div>
      </div>

      <Switch>
        <Route path="/test">
          <TestPage />
        </Route>
        <Route path="/todo-class">
          <TodoPageClass counts={counts}/>
        </Route>
        <Route path="/todo-hooks">
          <TodoPageHooks counts={counts}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
