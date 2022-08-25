import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils"/>
      <TextForm heading="Enter the text here to analyze"/>
      {/*<About/>*/}
    </>
  );
}

export default App;
