import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Cryptocurrencies, CryptocurrenciesDetails, Exchanges, HomePage, Navbar, News } from './Components'
import './App.css'

const App = () => {
    return (
        <div className='app'>
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main">
            <Layout>
                    <div className="routes">
                        <Routes>
                            <Route path="/" element={<HomePage />} exact />
                            <Route path="/exchanges" element={<Exchanges />} exact />
                            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} exact />
                            <Route path="/cryptocurrenciesdetails/:coinId" element={<CryptocurrenciesDetails />} exact />
                            <Route path="/news" element={<News/>} exact />
                      </Routes>
                    </div>
           </Layout>
            </div>
            <div className="footer">
                
            </div>
        </div>
    );
};

export default App;