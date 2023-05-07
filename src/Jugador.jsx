import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Stack, Container, Navbar } from 'react-bootstrap';
import Link from 'react-bootstrap/Nav';
import Nav from 'react-bootstrap/Nav';
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
    const fotojugador = {
        width: '150px',
        height: '150px'
    };
    const fotoPos = {
        width: '30px',
        height: '30px'
    };
    const fotoNac = {
        width: '50px',
        height: '50px'
    };
    const fotoEquipo = {
        width: '150px',
        height: '150px'
    };
    

    const Nombre = "Alexis Vega"
    const Edad = "23"
    const Posicion= "Extremo Izquierdo"

    return (

        <Container fluid>
            <Row style={centrado}>
                <Col style={{textAlign:'center'}}>
                    <div> <Image style={fotojugador} src="/src/assets/soccer.png" /> </div>
                    <div> <h1> {Nombre}  </h1> </div>
                    <div> <h4> Edad: {Edad}  </h4> </div>
                    <div style={{display:'flex',gap:5}}> <Image style={fotoPos} src="/src/assets/soccer.png" /> <h4> {Posicion}  </h4> </div>
                    <div> <Image style={fotoNac} alt="ESTE SERÁ LA BANDERA" src="/src/assets/soccer.png" /> </div> 
                </Col>
            </Row>
            <Row style={{justifyContent:'space-between',margin:10}}>
                <Col>
                    <div>Goles: 3</div>
                    <div>Asistencias: 2</div>
                    <div>Min. jugados: 270 min.</div>
                    <div>1vs1 ganados: 7</div>
                </Col>
                <Col>
                    <div>Goles: 3</div>
                    <div>Asistencias: 2</div>
                    <div>Min. jugados: 270 min.</div>
                    <div>1vs1 ganados: 7</div>
                </Col>
            </Row>

            <Row style={{justifyContent:'space-between'}}>
                <Col>
                    <Row> <p style={{fontSize:'20px'}}> Club anterior </p> </Row>
                    <Row> <Image style={fotoEquipo} src="/src/assets/soccer.png" /> </Row>
                    <Row> <p> Toluca </p></Row>
                </Col>
                <Col>
                    <Row> <p style={{fontSize:'20px'}}> Valor de mercado </p> </Row>
                    <Row>  <p style={{fontSize:'60px',color:'gray'}}> 7.5 MDD </p></Row>
                    <Row> </Row>
                </Col>
                <Col>
                    <Row> <p style={{fontSize:'20px'}}> Club actual </p> </Row>
                    <Row> <Image style={fotoEquipo} src="/src/assets/soccer.png" /> </Row>
                    <Row> <p style={{textAlign:'center'}}> Guadalajara </p></Row>
                </Col>
            </Row>
           
        </Container>
    );
}

export default GridExample;