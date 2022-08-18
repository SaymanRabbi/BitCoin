import React, { useEffect, useState } from 'react';
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './Loader';
const Cryptocurrencies = ({ simplified}) => {
    
    const count = simplified ? 10 : 100;
    const { data: cryptoList, isFetching } = useGetCryptosQuery(count)
    const [cryptos, setCryptos] = useState([])
    const [search, setSearch] = useState('')
    // ------------------Search Item------------------
    useEffect(() => {
        
        const filetData = cryptoList?.data?.coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
        setCryptos(filetData)
    }, [cryptoList, search])
     // ------------------Search Item------------------
    if (isFetching) return <Loader/>
    
    return (
        <>
            {
            !simplified &&<div className='search-crypto'>
             <Input placeholder='Serach Cryptocurrency' onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            }
            <Row gutter={[32,32]} className="crypto-card-container">
                {
                    cryptos?.map((crypto, uuid) => (
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