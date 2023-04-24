import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Aboutus from "./Components/Aboutus";
import Contact from "./Components/Contact";
import English from "./Components/English";
import Home from './Components/Home';
import Immipage from "./Components/Immipage";
import { Studies } from "./Components/Studies";
import Stupage from "./Components/Stupage";

function App() {
  return (
  <>
  
  <Routes>

  <Route exact path="/" element={<Home />} />

  <Route exact path="/stupage" element={  <Stupage/>} />
  <Route exact path="/immipage" element={  <Immipage/>} />
  <Route exact path="/cont" element={  <Contact/>} />
  <Route exact path="/about" element={  <Aboutus/>} />



  <Route exact path="/english" element={  <English/>} >

                <Route path=":page/*" element={< English/>} />

</Route>

  </Routes>


  </>
  );
}

export default App;
