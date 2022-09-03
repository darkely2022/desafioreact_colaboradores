import { useState } from "react"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Colaboradores=(props)=>{

//const [listaColaboradores,setlistaColaboradores]=useState(BaseColaboradores)  
const [nombre,setNombre]=useState("")  
const [correo,setCorreo]=useState("")

const capturaNombre=(e)=>{
    setNombre(e.target.value)
}
const capturaCorreo=(e)=>{
    setCorreo(e.target.value)
}

const guardarColaborador=(e)=>{
    e.preventDefault();
    const Colaborador={
        
        nombre:nombre,
        correo:correo
    }
    props.guardar(Colaborador);
    console.log(Colaborador)
}

return(
    <div>
        <Form onSubmit={guardarColaborador}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre del Colaborador</Form.Label>
                <Form.Control 
                   value={nombre}
                   onChange={capturaNombre}
                   type="text" 
                   placeholder="Ingresa el nombre del colaborador" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Correo del Colaborador</Form.Label>
                <Form.Control
                    value={correo}
                    onChange={capturaCorreo}
                    type="text" 
                    placeholder="Ingresa el correo del colaborador" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar Colaborador
            </Button>
        </Form>
    </div>
    
)
}

export default Colaboradores