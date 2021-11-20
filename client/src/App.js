import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { DataProvider } from './globalState';
import Header from './components/headers/Header';
import Mainpages from './components/mainPages/pages';
function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Mainpages />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
