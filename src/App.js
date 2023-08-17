import {React} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/Navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
const navigation=["Home","About","Contact"]
  return (
<>
<Navigationbar navigation={navigation}/>
</>
    
  );
}

export default App;
