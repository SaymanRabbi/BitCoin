import React from 'react';
import { Button, Menu, Typography, Avatar,Items } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined,BulbOutlined, FundOutlined, MenuOutlined,MoneyCollectOutlined } from '@ant-design/icons';
import icon from '../Images/cryptocurrency.png';

const Navbar = () => {
    return (
        <div className='nav-container'>
         {/* ---------------Logo Container---------- */}
        
            <div className="logo-container">
                <Avatar src={icon} size="Large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
                {/* <Button className='menu-control-container'></Button> */}
            </div>
             {/* ---------------Logo Container--------- */}
            {/*-------------- Menu ------------------*/}
            <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item  icon={<FundOutlined />}>
                    <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item  icon={<MoneyCollectOutlined />}>
                    <Link to='/exchanges'>Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to='/news'>News</Link>
                </Menu.Item>
                
            </Menu>
            {/*-------------- Menu ------------------*/}
        </div>
    );
};

export default Navbar;