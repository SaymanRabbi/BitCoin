import React from 'react';
import { Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined,FundOutlined} from '@ant-design/icons';
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
            </Menu>
            {/*-------------- Menu ------------------*/}
        </div>
    );
};

export default Navbar;