import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" about="About" />
    <div className="container my-5">
      <TextForm heading="Enter the text to Analyze"/>
    </div>
    </>
  );
}

export default App;
