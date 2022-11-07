import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Login/> */}
      <Register/>
    </div>
  );
}

export default App;
