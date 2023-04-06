import { Route, Routes } from "react-router-dom";
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import  {useContextGlobal}  from './Components/utils/global.context';
import Layout from "./Components/Layout";

function App() {
  const {stylesSwitch} = useContextGlobal();
  return (
      <div className="App" style={stylesSwitch}>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="/dentist/:id" element={<Detail/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/favs" element={<Favs/>}/>
            </Route>
          </Routes>
      </div>
  );
}

export default App;
