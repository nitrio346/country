import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



import Content from './Content';
import CountryPage from './CountryPage';

function App() {

  
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element ={<Content/>} />
          <Route path= "/:id" element ={<CountryPage/>} />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
