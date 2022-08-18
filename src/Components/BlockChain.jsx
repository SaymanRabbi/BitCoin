import React from 'react';
import useBlockchainNews from '../services/useBlockchainNews';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import { Title } from 'chart.js';
const BlockChain = () => {
    const [data] = useBlockchainNews()
    console.log(data);
    return (
        <Row gutter={[32,32]}>{
            data.map((news,i)=>(
                <Col xs={12} lg={8} key={i}>
                  <Card title= {
                           `${ news.title.slice(0,30)}...`
                   } bordered={false} hoverable>
                    <a href={news.url} target="_black">More Info...</a>
                  </Card>
                    </Col>))
        }
            </Row>
    );
};

export default BlockChain;