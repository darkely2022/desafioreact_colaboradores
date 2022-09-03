import Colaboradores from './components/Colaboradores'
import NavarColaboradores from './components/NavarColaboradores'
import { useState } from "react"
import { BaseColaboradores } from "./components/BaseColaboradores"
import Modal from 'react-bootstrap/Modal';

function App() {

  const [listaColaboradores,setlistaColaboradores]=useState(BaseColaboradores)  

  const idIncremental = (listaColaboradores) => {
    let idMasAlto = listaColaboradores[0].id;
    for (const Colaborador of listaColaboradores) {
      if (Number(idMasAlto) < Number(Colaborador.id)) {
        idMasAlto = Number(Colaborador.id)
      }
    }
    return idMasAlto + 1;
  } 

const guardar=(Colaborador)=>{

    const nuevoColaborador = {
      id: idIncremental(listaColaboradores),
      ...Colaborador
    }
    setlistaColaboradores([...listaColaboradores,nuevoColaborador])
    console.log(listaColaboradores)
}

const filtrar=(nombre)=>{
  const listaFiltrada=listaColaboradores.filter(el=> el.nombre===nombre)
  console.log(listaFiltrada)
  if (listaFiltrada.length > 0) alert("La persona ya existe") 
  else alert("No existe colaborador")
}


  return (
  <>
    <NavarColaboradores filtrar={filtrar}/>
    <Colaboradores guardar={guardar}/>
    <h1>Listado Colaboradores</h1>
        <ul>
           {listaColaboradores.map(colaborador=><li key={colaborador.id}>{colaborador.nombre} {colaborador.correo}</li>)}
        </ul>
  
  </>    
  );
}

export default App;
