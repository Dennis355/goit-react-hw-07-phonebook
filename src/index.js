import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { store } from '../src/redux/store';
import './index.css';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

    <BrowserRouter basename="/goit-react-hw-07-phonebook">
    {/* <BrowserRouter basename="/goit-react-hw-05-movi"> */}
  <App />



   
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
