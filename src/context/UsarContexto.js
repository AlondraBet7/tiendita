import Contexto from "./Contexto"
 import axios from "axios";
 import { useReducer } from "react";
 import Reducer  from "./Reducer";
    
export default function UsarContexto(props) {
const {children} = props;


    const estadoInicial ={
        productos: [],
        carrito: [],
    }

    const [state, dispatch] = useReducer(Reducer, estadoInicial )
// Acciones 
    const listameProductos = async () =>{

        const res = await axios.get ("https://devrockstore-default-rtdb.firebaseio.com/productos.json")
        
       dispatch ({type: "LISTAME_PRODUCTOS", payload:res.data})
     console.log (res.data, "desde contexto");
    };
     

const agregarCarrito = (item) =>{
    dispatch({ type: "AGREGAR_CARRITO", payload: item})
    console.log ("Agregamos a carrito", item)

};
const eliminarCarrito = (item) =>{
    console.log ("Eliminar Carrito", item);
    dispatch({ type: "ELIMINAR_CARRITO", payload: item });
};
  return (
   <Contexto.Provider
   value={{
    productos:state.productos,
    carrito: state.carrito, 
    listameProductos,
    agregarCarrito,
    eliminarCarrito,
   }}>
    {children}
   </Contexto.Provider>
  )
}

