import React from 'react';
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProductsList/ProductsList';
import { Provider } from 'react-redux';
import { store } from './redux/User/store';

function App() {
  return (
    <Provider store={store}>
    <Header />
    <ProductsList />
    <GlobalStyles />
    </Provider>
  );
}

export default App;
