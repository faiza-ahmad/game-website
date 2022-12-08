import './App.css';
import home from './home.png';
function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to Gaming World</h1> */}
      <div className='heading'>
        <img src={home} alt="home"/>
      </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}  
    </div>
  );
}

export default App;
