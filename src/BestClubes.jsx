import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Stack, Container, Navbar } from 'react-bootstrap';
import Link from 'react-bootstrap/Nav';
import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


function GridExample() {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };
    const centrado = {
        display: "grid",
        Textalign: 'center',
        justifyContent: 'center',
        backgroundColor: "DodgerBlue"
    };

    return (

        <Container fluid>
            
            <Row style={centrado}>
                <Col >

                    <div>
                        <Image src="/src/assets/soccer.png" />
                    </div>
                    <div >Alexis Vega</div>
                    <div><b>Edad:</b> 23</div>
                    <div><b>Extremo</b> Izquiero</div>

                </Col>
            </Row>

            <Row style={centrado}>
                <Col>

                    <div>Estado: Disponible para jugar</div>
                    <div>Altura: 1.75m</div>
                    <div>Fecha de nacimiento: 04/05/1997</div>
                    <div>Calificación promedio: 8.5</div>

                </Col>

                <Col>
                    <div>Goles: 3</div>
                    <div>Asistencias: 2</div>
                    <div>Min. jugados: 270 min.</div>
                    <div>1vs1 ganados: 7</div>
                </Col>
            </Row>

            <Row>
                <Col>CLUB ANTERIOR</Col>
                <Col>VALOR  DE MERCADO</Col>
                <Col>CLUB ACTUAL</Col>
            </Row>
            <Row>
                <Col>
                    <Image src="/src/assets/soccer.png" />
                </Col>
                <Col>7.5 MDD</Col>
                <Col>
                    <Image src="/src/assets/soccer.png" />
                </Col>
            </Row>
        </Container>
    );
}

export default GridExample;

