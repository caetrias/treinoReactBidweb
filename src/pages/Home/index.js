import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import Card from 'components/Card';
import styles from './Inicio.module.css';
import { useEffect, useState } from 'react';

function Home() {
    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/caetrias/treinoBidweb-api/servicos') //criacao da req
            .then(resposta => resposta.json()) //converte dados de retorno para json
            .then(dados => {
                setServicos(dados) //envia dados para setServicos
            })
    }, [])

    return(
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Reduzindo riscos. Conectando estratégias.</h1>
            </Titulo>
            <section className={styles.container}>
                {servicos.map((servico) => {
                    return <Card {...servico} key={servico.id} />
                })}
            </section>
        </>
    )
}

export default Home;