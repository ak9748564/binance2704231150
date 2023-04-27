import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Page_Not_Found from './components/Page_Not_Found';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'  exact element={<Home/>}></Route>
        <Route path='*' element={<Page_Not_Found/>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
