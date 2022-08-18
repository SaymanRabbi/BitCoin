import React, { useState } from 'react';
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
const Cryptocurrencies = () => {
    const { data: cryptoList, isFetching } = useGetCryptosQuery()
    const [cryptos, setCryptos] = useState(cryptoList?.data?.coins)
    console.log(cryptos);
    if (isFetching) return <div>Loading...</div>
    
    return (
        <>
            <Row gutters={[32,32]} className="crypto-card-container">
                {
                    cryptos.map((crypto, uuid) => (
                        <Col key={uuid} xs={24} sm={12} lg={6} className="crypto-card">
                            <Link to={`/crypto/${crypto.uuid}`}>
                                <Card title={`${crypto.rank}. ${crypto.name}`}
                                    extra={<img className='crypto-image' src={crypto.iconUrl} alt="" />}
                                    hoverable
                                >
                                    <p>Prices: {millify(crypto?.price)}</p>
                                    <p>Market Cap: {millify(crypto?.marketCap)}</p>
                                    <p>Dailly Changes: {millify(crypto?.change)}%</p>
                            </Card>
                            </Link>
                        </Col>
                    ))
                }
        </Row>
        </>
    );
};

export default Cryptocurrencies;