import React from 'react';
import ListPrestasi from './pages/ListPrestasi';
import TambahPrestasi from './pages/TambahPrestasi';
import ExpandPrestasi from './pages/ExpandPrestasi';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ListPrestasi} />
          <Route path="/tambah-prestasi" component={TambahPrestasi} />
        </Switch>
        {/* <ExpandPrestasi /> */}
      </div>
    </Router>
  );
}

export default App;
