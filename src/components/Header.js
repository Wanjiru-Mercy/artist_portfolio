import React from 'react';
import styled from 'styled-components';
import '../App.css';
import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'
import Bonzo from '../Images/Bonzo.jpeg';
import IG from '../Images/instagram.png';
import Mail from '../Images/gmail.png';



const MainContainer = styled.div `
background-color: #e6e6fa;
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

const Header = () => {
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
           
    </MainContainer>
  
  )
}

export default Header