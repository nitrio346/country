import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



import Content from './Content';
import CountryPage from './CountryPage';

function App() {

  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="https://michal5675.github.io/country/" element ={<Content/>} />
          <Route path= "https://michal5675.github.io/country/:id" element ={<CountryPage/>} />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
