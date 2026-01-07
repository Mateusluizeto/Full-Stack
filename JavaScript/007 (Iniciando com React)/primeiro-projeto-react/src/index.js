// Importa o React (necessário para JSX)
import React from 'react';

// Importa a nova API de renderização do React 18
import { createRoot } from 'react-dom/client';

// Importa o estilo global (CSS global usando styled-components)
import GlobalStyle from './styles/globalStyle';

// Importa o arquivo de rotas da aplicação
import Routes from './routes';

// Seleciona a div #root do HTML e cria a raiz da aplicação
createRoot(document.getElementById("root")).render(
  <>
    {/* Componente responsável pelas rotas */}
    <Routes />

    {/* Estilos globais aplicados em toda a aplicação */}
    <GlobalStyle />
  </>
);

/*
OBS:
Usamos <> </> (Fragment) porque o React exige
um único elemento pai para renderização.
*/