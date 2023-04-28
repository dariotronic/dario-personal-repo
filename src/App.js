//styles
import './App.css'

//components
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Slider from './components/Slider'

function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Menu/>
        <Slider/>
      </div>
    </div>
  );
}

export default App;
