import React from 'react';
import CountUp from 'react-countup';

import { Card, Row, Spinner, ListGroup } from 'react-bootstrap';

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
                                                                        <ListGroup variant="flush">
                                                                                <ListGroup.Item>
                                                                                        Contagios: 
                                                                                        <br />
                                                                                        <CountUp start={0} end={data.data.confirmed.value} duration={3} separators="."/>
                                                                                </ListGroup.Item>
                                                                                <ListGroup.Item>
                                                                                        Muertos: 
                                                                                        <br />
                                                                                        <CountUp start={0} end={data.data.deaths.value} duration={3} separators="."/>
                                                                                </ListGroup.Item>
                                                                                <ListGroup.Item>
                                                                                        Recuperados: 
                                                                                        <br />
                                                                                        <CountUp start={0} end={data.data.recovered.value} duration={3} separators="."/>
                                                                                </ListGroup.Item>
                                                                        </ListGroup>
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
