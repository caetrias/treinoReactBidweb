import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return(
        <FavoritosContext.Provider
            value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritosContext(){
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito){
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

        if (!favoritoRepetido) {
            setFavorito([...favorito, novoFavorito]);
        } else {
            removerFavorito(novoFavorito.id);
        }
    }

    function removerFavorito(id) {
        const novaLista = favorito.filter(item => item.id !== id);
        // Cria uma nova lista com todos os itens do array 'favorito'
        // exceto o item cujo 'id' seja igual ao id passado como argumento
        setFavorito(novaLista);
    }

    return {
        favorito,
        adicionarFavorito,
        removerFavorito
    }
}
