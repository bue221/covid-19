import React,{ useState, useEffect  } from 'react';
import axios from 'axios'

import Form from 'react-bootstrap/Form';

const Paises = ({ onChange  })=>{

        const [lista, setLista] = useState([]);

        useEffect(()=>{
                const cargar = async()=>{
                        setLista(await cargarLista());
                }

                cargar();
        },[])

        const cargarLista = async ()=> {
                try{
                        const datos = await axios.get('https://covid19.mathdro.id/api/countries');
                        const res = datos.data.countries.map((pais)=> pais.name );
                        return res;

                }catch(err) {
                        console.log(err);
                }
        }

        //console.log(lista);

        return(
                <Form.Group>
                        <Form.Label>Elija un País</Form.Label>
                        <Form.Control as='select' onChange={(e)=> onChange(e.target.value)}>
                                <option value='Seleccione un pais'>Seleccione un pais</option>
                                {lista.map((i,index)=>(
                                <option value={i} key={index}>{i}</option>
                                ))}
                        </Form.Control>
                </Form.Group>
        )

}

export default Paises;
