import Homepage from './Components/Homepage'
import Attendencepage from './Components/Attendencepage'
import Classespage from './Components/Classespage';
import Coursespage from './Components/Coursespage.jsx';
import Submissionspage from './Components/Submissionspage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './Components/jsx/css/App.css'
function App() {
  return (
   
    <div className="App">
       <Router>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/Coursespage' element={<Coursespage/>}/>
          <Route exact path='/Classespage' element={<Classespage/>}/>
          <Route exact path='/Attendencepage' element={<Attendencepage/>}/>
          <Route exact path='/Submissionspage' element={<Submissionspage/>}/>
        </Routes>
      </Router>
    </div>
    
  );
}
export default App;
