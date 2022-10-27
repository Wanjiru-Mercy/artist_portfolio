import React, {useState} from 'react';
import { Radio, Space, Drawer, Button, Carousel, Tabs} from 'antd';
import styled from 'styled-components';
import '../App.less';
import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'
import Bonzo from '../Images/Bonzo.jpeg';
import IG from '../Images/instagram.png';
import IconMenu from '../Images/menu.svg';
import Mail from '../Images/gmail.png';
import { Water  } from './Water';
import { Illustrations } from './Illustrations';
import {Graffiti} from './Graffiti';
import { Acrylics } from './Acrylics';
import { Info } from './Info';
import 'antd/dist/antd.less';
import IconClose from '../Images/cancel.png';

//import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


const { TabPane } = Tabs;


const Tabz = styled.div `
background-color: #f8f4ff;
width: 100vw;
height: 100vh;



`

const MainContainer = styled.div `
background-color: #f8f4ff;
width: 100vw;
height: 100vh;



`
const Name = styled.div `
position: sticky;
display: flex;
justify-content: center;
padding: 10px;
font-family: Raleway;
font-size: 1.6rem;
`

const AvatarName = styled.div `
justify-content: center;
display: flex;
`

const SocialIcon = styled.div `
justify-content: center;
display: flex;
img{
    width: 1.3rem;
    height: 1.3rem;
}
margin-top: 1rem;
`


const MenuIcon = styled.div `
justify-content: center;
display: flex;
img{
    width: 3rem;
    height: 3rem;
}
margin-top: 1rem;
`

const CloseIcon = styled.div `
justify-content: center;
display: flex;
img{
    width: 3rem;
    height: 3rem;
}
margin-top: 1rem;
`


const Drawers = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

const Gallery = styled.div `
margin-top: 2rem;
padding: 1rem;


`

const Header = () => {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  return (

    <MainContainer>
           <Name>
            NINA TANYA KIMANI
           </Name>

           <AvatarName>
           <Avatar
                size={{
                    xs: 64,
                    sm: 64,
                    md: 68,
                    lg: 72,
                    xl: 80,
                    xxl: 100,
                  }}
                img src={Bonzo}
  />
           </AvatarName>

           <SocialIcon>
            
            <a target="_blank"  href={"https://www.instagram.com/nina_with_a_h/"}>
                <img src={IG} alt="instagram"  />
                </a>      

           
           </SocialIcon>

          <div>
          <MenuIcon>
           <img src={IconMenu} alt="instagram" onClick={showDrawer}  />
           </MenuIcon>

          
          </div>
           

        

        <Tabz>

          {/* <Button style={{backgroundColor:'#8b008b'}}>
            TEST
          </Button>
          <Button style={{backgroundColor:'#880085'}}>
            TEST
          </Button>
          <Button style={{backgroundColor:'#e0b0ff'}}>
            TEST
          </Button>
          <Button style={{backgroundColor:'#ca2c92'}}>
            TEST
          </Button>
          <Button style={{backgroundColor:'#a50b5e'}}>
            TEST
          </Button> */}
  {/* <Tabs  size={{
                    xs: 64,
                    sm: 64,
                    md: 68,
                    lg: 72,
                    xl: 80,
                    xxl: 100,
                  }} defaultActiveKey="1" centered>
    <TabPane tab="Acrylics" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Water Colors" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Illustrations" key="3">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="Graffiti/Murals" key="4">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="Charcoal" key="5">
      Content of Tab Pane 3
    </TabPane>
  </Tabs> */}
        </Tabz>

       
       
      <Drawer 
      
      headerStyle={{ display:'flex' , justifyContent:'center' , float:"right", fontFamily:'Raleway'}} 
      placement="top"
      drawerStyle={{backgroundColor:'#fffafa'}} 
      onClose={onClose} 
      visible={open}
      closable={false} 
      contentWrapperStyle={{display:'flex' , justifyContent:'center' ,  fontFamily:'Raleway', }}
      
      >
        
       

        <h3 style={{fontSize:'28px',  display:'flex', justifyContent:'center'}}>MENU</h3>
        <p style={{display:'flex', justifyContent:'center'}} >Acrylics</p>
        <p style={{display:'flex', justifyContent:'center'}} >Water Colors</p>
        <p style={{display:'flex', justifyContent:'center'}} >Illustrations</p>
        <p style={{display:'flex', justifyContent:'center'}} >Graffiti/Murals</p>
        <p style={{display:'flex', justifyContent:'center'}} >Charcoal</p>
        <p style={{display:'flex', justifyContent:'center'}} >Info/Contact</p>

        <CloseIcon>
           <img src={IconClose} alt="close icon" onClick={onClose}  />
           </CloseIcon>
       
      </Drawer>
      
         

    </MainContainer>
  
  )
}

export default Header