import React,{useState,useEffect} from 'react';
import { Menu, Typography, Avatar,Button } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined,FundOutlined,MenuOutlined} from '@ant-design/icons';
import icon from '../Images/cryptocurrency.png';

const Navbar = () => {
    const [activemenu, setActivemenu] = useState();
    const [screenSize, setScreenSize] = useState(null); 
    console.log(screenSize);
    useEffect(() => {
        const handelResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handelResize);
        handelResize()
        return () => window.removeEventListener('resize', handelResize);
    }, [])
    useEffect(() => {
        if(screenSize < 768){
            setActivemenu(false);
        } else {
            setActivemenu(true); 
        }
    },[screenSize])
    return (
        <div className='nav-container'>
         {/* ---------------Logo Container---------- */}
        
            <div className="logo-container">
                <Avatar src={icon} size="Large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
                <Button className='menu-control-container' onClick={() => setActivemenu(!activemenu)}>
                    <MenuOutlined />
                </Button>
            </div>
             {/* ---------------Logo Container--------- */}
            {/*-------------- Menu ------------------*/}
            {
                activemenu &&
                <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item  icon={<FundOutlined />}>
                    <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                </Menu.Item>    
            </Menu>
            }
            
            {/*-------------- Menu ------------------*/}
        </div>
    );
};

export default Navbar;