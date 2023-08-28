import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to='signin'>Sign In</Link>
          <Link to='signup'>Sign Up</Link>
        </nav>

        <Routes>
          <Route path='signin' element={<SignIn/>} />
          <Route path='signup' element={<SignUp/>} />
          <Route />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;