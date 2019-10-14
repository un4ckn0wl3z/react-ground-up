import './App.css'
import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductItem from './components/product/ProductItem';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProductItem productName="IPhone X" unitPrice="40500" />
        <ProductItem productName="IPad Pro 10.5" unitPrice="30500" />
        <ProductItem productName="IPad Mini 4" unitPrice="19500" />
        <Footer company="Haxtivitiez" email="admin@haxtivitiez.com" />
      </div>
    )
  };
}

export default App;
