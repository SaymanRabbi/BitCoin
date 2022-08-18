import React from 'react';
import { Row, Col, Avatar, Card } from 'antd';
import { Link } from 'react-router-dom';
const { Meta } = Card;
const News = () => {
  return (
    <Row gutter={[32, 32]}>
      <Col xs={12} lg={12}>
        <Link to="/bitcoin">
      <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://res.cloudinary.com/dnr5u3jpb/image/upload/v1660849221/CryptoEcosystem_202003014_final-768x427_cspvzu.webp"
      />
    }
  >
    <Meta
      avatar={<Avatar src="https://res.cloudinary.com/dnr5u3jpb/image/upload/v1660849221/CryptoEcosystem_202003014_final-768x427_cspvzu.webp" />}
      title="BitCoin"
      description="Bitcoin buyers outrank sellers despite brutal market crash"
            />
            
          </Card>
          </Link>
      </Col>
      <Col xs={12} lg={12}>
        <Link to="/blockchain">
    <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://res.cloudinary.com/dnr5u3jpb/image/upload/v1660849295/blockchain_hhwfe1.jpg"
      />
    }
  >
    <Meta
      avatar={<Avatar src="https://res.cloudinary.com/dnr5u3jpb/image/upload/v1660849295/blockchain_hhwfe1.jpg" />}
      title="BlockChain"
      description="Blockchain.com is the world's most popular way to buy bitcoin
      "
    />
          </Card>
          </Link>
      </Col>
      </Row>
  )
};

export default News;