import React,{ useState, useEffect } from 'react';
import axios from 'axios'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap'
//components
import Nav from './components/Nav'
import Paises from './components/Paises'
import Info from './components/Card'
import Graph from './components/Graficos'

const App = ()=>{

        const [pais, setPais] = useState('');
        const [data, setData] = useState({})

        useEffect(()=>{
                const cargar = async()=>{
                        const apidata = await datos(pais);
                        setData(apidata);
                }
                cargar();
        },[pais])

        console.log(data);

        const paisForm = async (pais) => {
                setPais(pais);
        }

        //console.log(pais);

        const datos = async(pais)=>{
                let url = '';
                if(pais === '' || pais === 'Seleccione un pais'){
                        url = "https://covid19.mathdro.id/api";
                }else{
                        url = `https://covid19.mathdro.id/api/countries/${pais}`;
                }

                try{
                        const data = await axios.get(url);
                        return data;
                }catch(err){
                        console.log(err);
                }
        }


        return(
                <div>
                        <Nav />
                        <Container fluid>
                                <Row>
                                        <Col xl={2}>
                                                <Paises onChange={paisForm} />
                                        </Col>
                                        <Col xl={8}>
                                                <Graph pais={pais} data={data}/>
                                        </Col>
                                        <Col xl={2}>
                                                <Info data={data}/>
                                        </Col>
                                </Row>
                        </Container>
                </div>
                );
}

export default App;
