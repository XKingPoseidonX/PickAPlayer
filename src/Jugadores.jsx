import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Jugadores.css';
import Container from 'react-bootstrap/Container';


function GridExample() {
  return (
    <div className='container'>
      <h3 className='title'><b>JUGADORES</b></h3>
      <Row xs={1} md={3} className="g-15">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div Class="Container-2">
            <Col>
              <Card>
                <Card.Body>
                  <Container>
                    <Row>
                      <Col>
                        <img
                          src="../img/man.png"
                          width="30"
                          height="30"
                          className="d-inline-block align-top"
                        />
                      </Col>
                      <Col Class="name">Card Title</Col>
                      <Col>
                        <img
                          src="../img/flag.png"
                          width="30"
                          height="30"
                          className="d-inline-block align-top"
                        />
                      </Col>
                    </Row>
                  </Container>

                  <Card.Text Class="information">
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        ))}
      </Row>
    </div>
  );
}

export default GridExample;

