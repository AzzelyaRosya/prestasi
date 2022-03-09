import React from 'react';
import ListPrestasi from './pages/ListPrestasi';
import TambahPrestasi from './pages/TambahPrestasi';
import ExpandPrestasi from './pages/ExpandPrestasi';
import UploadCertificateButton from './components/UploadSertif';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ListPrestasi} />
          <Route path="/tambah-prestasi" component={TambahPrestasi} />
          <Route path="/expand-prestasi" component={ExpandPrestasi} />
        </Switch>
        {/* <UploadCertificateButton /> */}
      </div>
    </Router>
  );
}

export default App;
