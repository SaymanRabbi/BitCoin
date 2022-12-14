import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Cryptocurrencies, CryptocurrenciesDetails, HomePage, Navbar, News } from './Components'
import './App.css'
import Bitcoin from './Components/Bitcoin';
import BlockChain from './Components/BlockChain';

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
                            <Route path="/bitcoin" element={<Bitcoin/>} exact />
                            <Route path="/blockchain" element={<BlockChain/>} exact />
                            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} exact />
                            <Route path="/crypto/:coinId" element={<CryptocurrenciesDetails />}/>
                            <Route path="/news" element={<News/>} exact />
                      </Routes>
                    </div>
           </Layout>
            
            <div className="footer" level={5}>
                <Typography.Title style={{color:"white",textAlign:"center"}}>
                    Cryptoverse <br />
                    All rights reserved
                </Typography.Title>
                <Space>
                    <Link to="/">Home</Link>
                    <Link to="/xchanges">Exchanges</Link>
                    <Link to="/news">Blog</Link>
                    </Space>
                    </div>
            </div>
        </div>
    );
};

export default App;