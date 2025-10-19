import { Col, Container, Row, Button, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { theme } from '../../../pallet';
import { type Rifa, fetchRifas } from '../../../services/api';
import RifaCard from './RifaCard';
import PaginationRifas from './PaginationRifas';
import { useSelectedRifas } from '../../../customHooks/SelectedRifasContext';

const GridRifas = () => {
    const [rifas, setRifas] = useState<Rifa[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const pageSize = 50;
    const [showModal, setShowModal] = useState(false);

    const { selectedCount } = useSelectedRifas();

    useEffect(() => {
        fetchRifas(page, pageSize).then((data) => {
            setRifas(data.items);
            setTotal(data.totalCount);
        });
    }, [page]);

    return (
        <Container>
            <PaginationRifas
                totalRifas={total}
                pageSize={pageSize}
                currentPage={page}
                maxPages={10}
                onPageChange={(page) => setPage(page)}
            />

            <Row className="mb-2" style={{ color: theme.textColor.light }}>
                <Col>
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 style={{ color: theme.textColor.light }}>Rifas disponíveis</h3>
                        <div>
                            <span className="me-3">
                                Selecionadas: <span id="selected-count">{selectedCount}</span>
                            </span>
                            <Button
                                id="concluir-btn"
                                variant="primary"
                                disabled={selectedCount === 0}
                                onClick={() => setShowModal(true)}
                            >
                                Comprar
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row id="rifas-list" className="g-3">
                {rifas.map((r) => (
                    <RifaCard key={r.id} rifa={r} />
                ))}
            </Row>

            <Modal show={showModal} onHide={() => setShowModal(false)} id="pixModal">
                <Modal.Header closeButton>
                    <Modal.Title>Pagamento via Pix</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Conteúdo do modal */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Fechar
                    </Button>
                    <Button variant="primary">Confirmar</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default GridRifas;
