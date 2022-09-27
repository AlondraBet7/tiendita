import {BrowserRouter, Routes, Route} from "react-router-dom"
import Carrito from "../containers/Carrito"
import Home from "../containers/Home"
import Productos from "../containers/Productos"
import Layout from "../components/Layout"
import UsarContexto from "../context/UsarContexto"

function App() {
  return (
   <>
    <BrowserRouter>
    <UsarContexto>
    <Layout>
    <Routes>
      <Route exact path="/" element= {<Home/>}></Route>
      <Route exact path="/Carrito" element= {<Carrito/>}> </Route>
      <Route exact path="/Productos" element={<Productos/>}></Route>
    </Routes>
    </Layout>
    </UsarContexto>                                                                                                     
    </BrowserRouter>
    
     </>
  );
}

export default App;
