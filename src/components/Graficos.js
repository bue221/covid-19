import React,{useState, useEffect} from 'react';
import axios from 'axios';

import { Line, Doughnut } from 'react-chartjs-2';
import { Card, Row, Spinner } from 'react-bootstrap';

const Graph = ({pais, data})=>{

        const [dato, setDato] = useState({});

        useEffect(()=>{
                const cargar = async()=>{
                        const data = await cargarDato();
                        setDato(data)
                        console.log(dato)
                }
                cargar();
        },[])

        const cargarDato = async ()=>{
                var date = Date.now();
                //date = toLocaleDateString(date);
                try{
                        const data = await axios.get(`https://covid19.mathdro.id/api/daily/10-2-2020`);
                        console.log(data);
                        return data;
                }catch(err){
                        console.log(err);
                }
        }

        let chart;

        if(dato.data && (pais === 'Seleccione un pais' || pais === '' )){
                chart = (
                        <Line data={{
                        labels: dato.data.map(i=> i.countryRegion),
                        datasets: [
                        {
                        data: dato.data.map(i=> i.confirmed),
                        label: 'Infectados',
                        borderColor: 'red',
                        fill: true
                        },{
                        data: dato.data.map(i=> i.deaths),
                        label: 'Muertos',
                        borderColor: 'black',
                        fill: true
                        },
                        ]
                        }}
                        options={{
                        legend: {
                        labels: {
                        fontColor: 'black',
                        fontSize: 18
                        }
                        },
                        title: {
                        display: true,
                        text: 'Coronavirus en el mundo',
                        fontColor: 'black'
                        }
                        }}/>
                )
        }else if(dato.data){
                chart = (
                        <Doughnut 
                        data={{
                        labels: ['infectados','recuperados','muertos'],
                        datasets:[{
                        label: 'Gente',
                        backgroundColor:[
                        'cornflowerblue',
                        'grey',
                        'red'
                        ],
                        data: [data.data.confirmed.value, data.data.recovered.value, data.data.deaths.value]
                        }],
                        }}
                        options={{
                        legend: {
                        display: true,
                        fontColor: 'white'
                        },
                        title: {
                        display: true,
                        text: `Coronavirus en ${pais}`,
                        fontColor: 'black'
                        }
                        }}
                />
                                )
        }

        return(
                <>
                { !data.data ? (<Spinner animation="grow" variant="info" />):
                        (<div>
                                {chart}
                        </div>)
                }
                </>
        )
}


export default Graph;
