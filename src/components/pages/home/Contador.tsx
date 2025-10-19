import { Row, Col, Button } from "react-bootstrap"
import { theme } from "../../../pallet"
import { useSelectedRifas } from "../../../customHooks/SelectedRifasContext"



const Contador = ({onClick}: {onClick: ()=>void}) => {
    const {selectedCount} = useSelectedRifas()

    return (<Row className="mb-2" style={{ color: theme.textColor.light }}>
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
                                onClick={() => onClick()}
                            >
                                Comprar
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>)
}

export default Contador