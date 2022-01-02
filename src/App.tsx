import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Information from './components/Information'
import Dashboard from './components/Dashboard'
import Rechner from './components/Rechner'
import Simulation from './components/Simulation'
import { useState } from 'react'
import { Snapshot } from 'wpk'

function App() {
  const [snapshot, setSnapshot] = useState<Snapshot>(
    new Snapshot(new Date(), 0, 0, 0, 0)
  );

  const saveSnapshot = (e: any) => {
    e.preventDefault();
    const savedSnapshotsString = localStorage.getItem('snapshots') || '[]'
    const savedSnapshots = JSON.parse(savedSnapshotsString)
    const newSnapshots = [...savedSnapshots, snapshot]
    localStorage.setItem('snapshots', JSON.stringify(newSnapshots));
  };

  const updateSnapshot = (field: string, value: string) => {
    let newSnapshot = Snapshot.fromJson(JSON.stringify(snapshot))
    switch (field) {
      case 'date':
        newSnapshot.date = new Date(value)
        setSnapshot(newSnapshot)
        break
      case 'volume':
        newSnapshot.volume = +value
        setSnapshot(newSnapshot)
        break
      case 'creditLine':
        newSnapshot.creditLine = +value
        setSnapshot(newSnapshot)
        break
      case 'balance':
        newSnapshot.balance = +value
        setSnapshot(newSnapshot)
        break
      case 'interestRate':
        newSnapshot.interestRate = +value
        setSnapshot(newSnapshot)
        break
    }
  }
  
  return (
    <Router>
      <Navigation />
      <div className='main'>
        <Header />
        <div className="mainpage">
          <Route path='/' exact component={Information} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/rechner' render={() => <Rechner saveSnapshot={saveSnapshot} updateSnapshot={updateSnapshot} setSnapshot={setSnapshot} snapshot={snapshot} />} />
          <Route path='/simulation' render={() => <Simulation snapshot={snapshot} />} />
        </div>
      </div>
    </Router>
  );
}

export default App;
