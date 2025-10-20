// src/services/api.ts

export const API_BASE_URL = 'https://saviane.ddns.net';

export interface Rifa {
    id: number;
    number: number;
    price: number;
    status: 'Disponivel' | 'Vendida' | 'Reservada';
}

export interface RifaResponse {
    items: Rifa[];
    totalCount: number;
}

export async function fetchRifas(page: number, pageSize: number): Promise<RifaResponse> {
    try {
        const response = await fetch(`${API_BASE_URL}/rifas?page=${page}&pageSize=${pageSize}`);

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();

        return {
            items: data.items || [],
            totalCount: data.totalCount || 0,
        };
    } catch (error) {
        console.error('Erro ao carregar rifas:', error);
        return {
            items: [],
            totalCount: 0,
        };
    }
}
