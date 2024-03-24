import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { persistor, store } from 'redux/store';
import { theme } from 'components/Services/Theme';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyle } from 'components/Services/GlobalStyle';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <Provider store={store}> 
      <PersistGate loading={null} persistor={persistor}>  
         <BrowserRouter basename="/rent"> 
          <ThemeProvider theme={theme}>  
           <GlobalStyle /> 
              <App />      
           </ThemeProvider> 
         </BrowserRouter>
      </PersistGate>
    </Provider>  
  </React.StrictMode>
);
