import { Button, ButtonGroup } from 'react-bootstrap';
import "./PaginationRifas.css"

type Props = {
    totalRifas: number;
    pageSize: number;
    currentPage: number;
    maxPages: number;
    onPageChange: (page: number) => void;
};

const PaginationRifas = ({ totalRifas, pageSize, currentPage, maxPages, onPageChange }: Props) => {
    const totalPages = Math.min(maxPages, Math.ceil(totalRifas / pageSize) || 1);

    return (
        <div className="mt-3 d-flex justify-content-center gap-2" id="rifas-pagination">
            <ButtonGroup>
                {Array.from({ length: totalPages }, (_, i) => {
                    const page = i + 1;
                    return (
                        <Button className={page === currentPage? 'btn-selected btn-page' : 'btn-page'}
                            key={page}
                            size="sm"
                            variant={page === currentPage ? 'primary' : 'outline-primary'}
                            onClick={() => onPageChange(page)}
                            >
                            
                            {page}
                        </Button>
                    );
                })}
            </ButtonGroup>
        </div>
    );
};

export default PaginationRifas;
