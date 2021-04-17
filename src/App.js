import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Wrapper } from './style';
import './style.css';

function App() {
    const [quote, setQuote] = useState(null);

    //Carrega o conteúdo da API quando é carregada a página
    useEffect(() => {
        getQuote();
    }, [])

    const getQuote = () => {
        axios.get('https://game-of-thrones-quotes.herokuapp.com/v1/random')
            .then(res => {
                const quotesRes = res.data;
                setQuote(quotesRes);
            })
            .catch(()=>{
                console.error('DEU RUIM');
            })
    }

    //Verifica se quote existe senão ele retorna null
    return quote ? (
        <Wrapper>
            <iframe width="500" height="300" src="https://www.youtube.com/embed/s7L2PVdrb_8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
            <h1><q> {quote.sentence} </q></h1>
            <h3>{quote.character.name}</h3>
            <p>{quote.character.house.name}</p>
            <button onClick = {getQuote}> NOVA FRASE </button>
        </Wrapper>
    ) : null

}

export default App;