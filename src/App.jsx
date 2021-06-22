import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom'
import Home from './components/Home/Home'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App