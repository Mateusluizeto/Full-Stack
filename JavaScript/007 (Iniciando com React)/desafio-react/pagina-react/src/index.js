import React from 'react';
import { createRoot } from 'react-dom/client';
import Rotas from './router';
import GlobalStyles from './globalStyles';

createRoot(document.getElementById("root")).render(<> <Rotas /> <GlobalStyles /> </>)

