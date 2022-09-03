import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"


const NavarColaboradores=(props)=>{

const [nombrebuscar,setNombrebuscar]=useState("")  

const capturaNombrebuscar=(e)=>{
    setNombrebuscar(e.target.value)
    console.log(e.target.value)
    //props.filtrar(e.target.value);
}

const buscarColaborador=(e)=>{
    e.preventDefault();
    props.filtrar(nombrebuscar);
   
}

    return(
        <div>
        
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Buscador de Colaboradores</a>
            <form onSubmit={buscarColaborador} className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" 
                 value={nombrebuscar}
                 onChange={capturaNombrebuscar}
                type="search" 
                placeholder="Search" aria-label="Search">
            </input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </form>
        </nav>
        </div>
    )
}

export default NavarColaboradores