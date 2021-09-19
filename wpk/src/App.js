import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Information from './components/Information'
import Dashboard from './components/Dashboard'
import Rechner from './components/Rechner'
import Simulation from './components/Simulation'

function App() {
  return (
    <div className='main'>
      <Router>
        <Navigation />
        <Header />
        <Route path='/' exact component={Information} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/rechner' component={Rechner} />
        <Route path='/simulation' component={Simulation} />
      </Router>
    </div>
  );
}

export default App;
