import styles from './Card.module.css'
import coracaoVazio from './cor-vazio.png'
import coracaoPreenchido from './cor-preenchido.png'
import { useFavoritosContext } from 'contexts/Favoritos'
import { Link } from 'react-router-dom';

function Card({ id, titulo, capa }) {
    const {favorito, adicionarFavorito, removerFavorito} = useFavoritosContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);

    const icone = ehFavorito ? coracaoPreenchido : coracaoVazio;
    console.log(favorito)

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icone}
                alt="Favoritar Ferramenta"
                className={styles.favoritar} 
                onClick={() => { // IMPLEMENTAR DESFAVORITAR : FUNCAO removerFavorito e chamar aqui
                    if (ehFavorito) {
                        removerFavorito(id);
                    } else {
                        adicionarFavorito({ id, titulo, capa });
                    }
            }}
            />
        </div>
    )
}

export default Card;