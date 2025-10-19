import { createContext, useContext, useState, type ReactNode } from 'react';

type SelectedRifasContextType = {
    selectedMap: Map<string, number>;
    setSelectedMap: React.Dispatch<React.SetStateAction<Map<string, number>>>;
    selectedCount: number;
    setSelectedCount: React.Dispatch<React.SetStateAction<number>>;
};

const SelectedRifasContext = createContext<SelectedRifasContextType | undefined>(undefined);

export const useSelectedRifas = () => {
    const context = useContext(SelectedRifasContext);
    if (!context) {
        throw new Error('useSelectedRifas must be used within a SelectedRifasProvider');
    }
    return context;
};

export const SelectedRifasProvider = ({ children }: { children: ReactNode }) => {
    const [selectedMap, setSelectedMap] = useState<Map<string, number>>(new Map());
    const [selectedCount, setSelectedCount] = useState(0);


    return (
        <SelectedRifasContext.Provider
            value={{ selectedMap, setSelectedMap, selectedCount, setSelectedCount }}
        >
            {children}
        </SelectedRifasContext.Provider>
    );
};
