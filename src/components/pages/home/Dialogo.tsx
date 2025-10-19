import { Modal, Button } from "react-bootstrap"


const Dialog = ({showModal, onHide, onClose}: {showModal: boolean, onHide: ()=>void, onClose: ()=>void}) => {
    return (
        
        <Modal show={showModal} onHide={onHide} id="pixModal">
                <Modal.Header closeButton>
                    <Modal.Title>Pagamento via Pix</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Conteúdo do modal */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Fechar
                    </Button>
                    <Button variant="primary">Confirmar</Button>
                </Modal.Footer>
            </Modal>

    )
}
export default Dialog