import { Card, Form, Badge } from 'react-bootstrap';
import { theme } from '../../../pallet';
import { useSelectedRifas } from '../../../customHooks/SelectedRifasContext';
import { useEffect } from 'react';

type Rifa = {
    id: number;
    number: number;
    price: number;
    status: 'Disponivel' | 'Vendida' | 'Reservada';
};

function formatBRL(value: number): string {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}

const RifaCard = ({ rifa }: { rifa: Rifa }) => {
    const { selectedMap, setSelectedMap, setSelectedCount } = useSelectedRifas();
    const isSelected = selectedMap.has(String(rifa.id));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = String(rifa.id);
        const price = rifa.price;
        const newMap = new Map(selectedMap);

        if (e.target.checked) {
            newMap.set(id, price);
        } else {
            newMap.delete(id);
        }

        setSelectedMap(newMap);
    };

    useEffect(() => {
        setSelectedCount(selectedMap.size);
    }, [selectedMap]);

    const statusBadge = {
        Vendida: <Badge bg="danger" className="ms-2">VENDIDA</Badge>,
        Reservada: <Badge bg="warning" className="ms-2">RESERVADA</Badge>,
    };

    return (
        <div className="col-6 col-md-4 col-lg-3">
            <Card
                className="h-100 shadow-sm"
                style={{
                    color: theme.textColor.light,
                    border: 'none',
                    backgroundColor: "transparent"
                }}
            >
                <Card.Body
                    className="d-flex flex-column"
                    style={{
                        backgroundColor: theme.secondary,
                        borderRadius: '0.5rem',
                        padding: '1rem',
                    }}
                >
                    <Card.Title className="fw-bold">Rifa {rifa.number}</Card.Title>
                    <Card.Text className="mb-2">{formatBRL(rifa.price)}</Card.Text>

                    <div className="mt-auto">
                        <Form.Check
                            type="checkbox"
                            id={`rifa-${rifa.id}`}
                            label={rifa.status}
                            className="select-rifa"
                            disabled={rifa.status !== 'Disponivel'}
                            checked={isSelected}
                            onChange={handleChange}
                        />
                        {rifa.status !== 'Disponivel' && statusBadge[rifa.status]}
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RifaCard;
