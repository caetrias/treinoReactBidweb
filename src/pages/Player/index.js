import Titulo from 'components/Titulo';
import styles from './Player.module.css'
import Banner from 'components/Banner';
import { useParams } from 'react-router-dom';
import NaoEncontrado from 'pages/NaoEncontrado';
import { useEffect, useState } from 'react';

function Player(){
    const parametro = useParams(); //pega parametro que está na URL e poe na variável
    const [video, setVideo] = useState();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/caetrias/treinoBidweb-api/servicos?id=${parametro.id}`)
            .then((resposta) => resposta.json())
            .then((dados) => {
                setVideo(...dados);
            });
    }, [parametro.id]);

    if(!video) {
        return <NaoEncontrado /> //para evitar que digite um numero aleatorio no URL e nao retorne a msg de erro
    }

    console.log(video)

    return(
        <>
        <Banner imagem="player" />
        <Titulo>
            <h1>{video.titulo}</h1>
        </Titulo> 
        <section className={styles.container}> 
            <iframe 
                width="100%" 
                height="100%" 
                src={video.link} 
                title={video.titulo}
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>
        </section>
        
        </>
    )
}

export default Player;