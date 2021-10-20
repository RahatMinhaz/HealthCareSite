import React, { useEffect, useState } from 'react';
import { Card,Col, Container, Row} from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';

const Medics = () => {
    let{id} = useParams();
    const [medicsDetails,setMedicsDetails] = useState([])
    const [medics,setMedics] = useState({})

    useEffect(() => {
        fetch('/medicDetails.json')
        .then(res => res.json())
        .then(data =>setMedicsDetails(data.employee));
    },[])
    useEffect(() =>{
       const foundMedic = medicsDetails.find(employee => employee.intro.id === id)
       setMedics(foundMedic);
    },[medicsDetails])
    return (
        <div>
            <div>
            <h2>{medics?.doctor}</h2>
            <Container>
                <Row>
                    <Col lg ={4}>
                        <Card>
                         <Card.Img variant="top" src={medics?.picture?.img} /> 
                        </Card>
                    </Col>
                    <Col lg ={5}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title>{medics?.doctor}</Card.Title>
                          <Card.Text>
                            <b>Email: {medics?.intro?.email}</b>
                            <br />
                            <b>Title: {medics?.title}</b>
                            <br />
                            <b>Location: {medics?.location?.street}, {medics?.location?.city}</b>
                          </Card.Text>
                          <button className="btn btn-primary">Set Appointment</button>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        <Footer></Footer>
        </div>
    );
};

export default Medics;