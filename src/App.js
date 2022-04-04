
import './App.scss';
import {Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<navbar/>}/>
    </Routes>
    </>
  );
}

export default App;
