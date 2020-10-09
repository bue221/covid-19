import React from 'react';
import CountUp from 'react-countup';

import { Card, Row, Spinner } from 'react-bootstrap';

const Info = ({ data })=>{
        return(
                <>
                {!data.data ? (<Spinner animation="grow" variant="info" />)
                        :
                        (
                                <div>
                                        <Row>
                                                <Card>
                                                        <Card.Body>
                                                                <Card.Text>
                                                                        Contagios: 
                                                                        <CountUp 
                                                                        start={0}
                                                                        end={data.data.confirmed.value}
                                                                        duration={3}
                                                                        separators="."/>
                                                                        <br />
                                                                        Muertos: 
                                                                        <CountUp 
                                                                        start={0}
                                                                        end={data.data.deaths.value}
                                                                        duration={3}
                                                                        separators="."/>
                                                                        <br />
                                                                        Recuperados:
                                                                        <CountUp 
                                                                        start={0}
                                                                        end={data.data.recovered.value}
                                                                        duration={3}
                                                                        separators="."/>
                                                                </Card.Text>
                                                        </Card.Body>
                                                </Card>
                                        </Row>
                                </div>
                                )
                }
                </>
        );
}

export default Info;
