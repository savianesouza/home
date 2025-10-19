import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import foto from '../../../assets/saviane.jpeg';
import { theme } from '../../../pallet';


const Home = () => {
    return (
        <Container>
            <Row className="mb-4">
                <Col>
                    <Card className="shadow-sm">
                        <Row className="g-0" style={{ backgroundColor: theme.secondary, borderRadius: '.25rem', color: theme.textColor.light }}>
                            <Col md={4} className="d-flex align-items-center justify-content-center p-3">
                                <Image
                                    id="foto-cunhada"
                                    src={foto}
                                    alt="Foto da beneficiária"
                                    fluid
                                    rounded
                                    style={{ maxHeight: '250px', objectFit: 'cover' }}
                                />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title as="h2">Ajude com o tratamento</Card.Title>
                                    <Card.Text>
                                        Este projeto tem por objetivo arrecadar fundos para ajudar nos custos do tratamento da minha cunhada,
                                        que é portadora de insuficiência renal. Ao adquirir rifas você estará contribuindo diretamente com
                                        consultas, medicamentos e deslocamentos. Obrigado pelo apoio.
                                    </Card.Text>
                                    <Card.Text>
                                        <small>
                                            Escolha uma ou mais rifas abaixo. Rifas já vendidas aparecem desabilitadas.
                                        </small>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
