import React, {useState} from 'react';
import { Radio, Space, Drawer, Button, Carousel, Tabs} from 'antd';
import styled from 'styled-components';
import '../App.less';
import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'
import Bonzo from '../Images/Bonzo.jpeg';
import IG from '../Images/instagram.png';
import Icon from '../Images/paint-tube.png';
import IconMenu from '../Images/menu.svg';
import Arrow from '../Images/arrow.svg';
import Mail from '../Images/gmail.png';
import { Water  } from './Water';
import { Illustrations } from './Illustrations';
import {Graffiti} from './Graffiti';
import { Acrylics } from './Acrylics';
import { Info } from './Info';
import 'antd/dist/antd.less';
import IconClose from '../Images/cancel.png';
import ImageGallery from 'react-image-gallery'
import {illustrations} from '../gallery/illustrations';
import {charcoal_pencil} from '../gallery/charcoal_pencil';
import {water_colors} from '../gallery/water_colors';
import {acrylics} from '../gallery/acrylics';
import { murals } from '../gallery/murals';

import Gallery from "react-photo-gallery";

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



const Header = () => {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  
  const BasicRowsAcrylics = () => <Gallery photos={acrylics} />;
  const BasicRowsWater = () => <Gallery photos={water_colors} />;
  const BasicRowsIllustrations = () => <Gallery photos={illustrations} />;
  const BasicRowsMurals = () => <Gallery photos={murals} />;
  const BasicRowsCharcoal = () => <Gallery photos={charcoal_pencil} />;
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

        
          
        <Tabz>



<Tabs
    size='small'
    centered
    defaultActiveKey="1"
    items={[
      {
        label: `Acrylics`,
        key: '1',
        children: <BasicRowsAcrylics />
      },
      {
        label: `Water Colors`,
        key: '2',
        children: <BasicRowsWater/>
      },
      {
        label: `Illustrations`,
        key: '3',
        children: <BasicRowsIllustrations />
      },
      {
        label: `Graffiti/Murals`,
        key: '4',
        children: <BasicRowsMurals/>
      },
      {
        label: `Charcoal`,
        key: '5',
        children: <BasicRowsCharcoal />
      },
    ]}
  />
</Tabz>
           
      
        


       
        <Drawer 
        headerStyle={{ display:'flex' , justifyContent:'center' , float:"right", fontFamily:'Raleway'}} 
         placement="top" 
         closable={false}
         onClose={onClose} 
         open={open}
         contentWrapperStyle={{  fontFamily:'Raleway', }}
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