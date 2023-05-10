import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Photos from './components/Photos';
import Desc from './components/Desc';
import Menu from './components/Menu';

function App() {
  return (
   <>
   <Photos/>
   <Desc/>
   <Menu/>
   {/* Ceci est un commentaire */ }
   </> 
  );
}

export default App;
