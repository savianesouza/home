import { Container, Row} from 'react-bootstrap';
import { useState, useEffect } from 'react';

import { type Rifa, fetchRifas } from '../../../services/api';
import RifaCard from './RifaCard';
import PaginationRifas from './PaginationRifas';

import Contador from './Contador';
import Dialog from './Dialogo';

const GridRifas = () => {
    const [rifas, setRifas] = useState<Rifa[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const pageSize = 50;
    const [showModal, setShowModal] = useState(false);


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

            <Contador onClick={()=> setShowModal(true)}/>

            <Row id="rifas-list" className="g-3">
                {rifas.map((r) => (
                    <RifaCard key={r.id} rifa={r} />
                ))}
            </Row>

            <Dialog showModal={showModal} onHide={() => setShowModal(false)} onClose={() => setShowModal(false)}/>

        </Container>
    );
};

export default GridRifas;
