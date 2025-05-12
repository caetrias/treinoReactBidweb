import Titulo from 'components/Titulo';
import styles from './Favoritos.module.css'
import Card from 'components/Card';
import Banner from 'components/Banner';
import { useFavoritosContext } from 'contexts/Favoritos';

function Favoritos() {
    const { favorito } = useFavoritosContext();

    return(
        <>
            <Banner imagem="fav" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>

                {favorito.length === 0 ? (
                        <h3>Você ainda não tem favoritos marcados!</h3>
                    ) : (
                        favorito.map((fav) => (
                            <Card {...fav} key={fav.id} />
                        ))
                    )}

            </section>
        </>
    )
}

export default Favoritos;