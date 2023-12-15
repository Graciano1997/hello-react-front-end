import { Route, Routes } from 'react-router-dom';
import './App.css';
import Greeting from './components/Greeting';
import _404 from './components/404';

function App() {
  return (
<Routes>
  <Route path="/" element={<Greeting/>}/>
  <Route path="*" element={<_404/>}/>
</Routes>
  );
}

export default App;
