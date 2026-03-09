import { createRoot } from 'react-dom/client'
import Launcher from './Launcher';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';

createRoot(document.getElementById('root')!).render(
      <Provider store={store}>
            <BrowserRouter>
                  <Launcher />
            </BrowserRouter>
      </Provider>
);