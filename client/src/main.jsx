import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import injectContext from './js/store/appContext.jsx'

const AppWithContext = injectContext(App);

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
