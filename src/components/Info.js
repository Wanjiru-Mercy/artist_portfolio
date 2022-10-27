import React from 'react'
import about from '../Images/About.jpeg';
import styled from 'styled-components';
import {Card, Row, Col, Avatar} from 'antd';
import { borderRadius } from '@mui/system';

const Info = () => {


const MainContainer = styled.div `
background-color: #fffafa;
width: 100vw;
height: 100vh;

`


  const Tanya = styled.div `  
  display: flex;
  justify-content: center;
  
  img{
      width: 10rem;
      height: 20rem;
      border-radius: 80px;
      border: 10px  dashed  #ca2c92;
      
  }
  padding: 5px;

  `
  const AvatarName = styled.div `
  justify-content: center;
  display: flex;
  `

  return (
    <>

    <MainContainer>
     
      {/* <Tanya>
        <img  src={about} alt="tanya" />
      </Tanya> */}
     
      <AvatarName>
           <Avatar
            style={{
              width: 250,
              height: 400,
              borderRadius: 80,
              border: '5px  dashed  #ca2c92',
              marginTop: 10,
              boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px'

            }}
                size={{
                    xs: 64,
                    sm: 64,
                    md: 68,
                    lg: 72,
                    xl: 300,
                    xxl: 100,
                  }}
                img src={about}
  />
           </AvatarName>
     
    
   
   
       
     

    {/* <Row>
      <Col xs={24} xl={24}>

      <Card hoverable
      bodyStyle={{display:'flex', justifyContent:'center'}} 
      style={{ backgroundColor:'#f8f4ff', fontFamily:'Raleway', width:350, borderRadius:'10px', marginLeft:'auto', marginRight:'auto'}}>

        <p>Hi! I am an artist, illustrator and part time visual arts teacher.  My distinctive personal style emanates 
          self-love and being true to yourself. I try to depict beauty, self-confidence and being bold. </p>

      </Card>

      </Col>
    </Row> */}
     

      {/* <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row> */}

<Row>
    <Col xs={24} xl={8}>
    <Card 
      hoverable
      headStyle={{color:'#ca2c92'}}
      title="ABOUT ME   (●'◡'●)"
      style={{ backgroundColor:'#f8f4ff', fontFamily:'Raleway', width:400, borderRadius:'80px', marginLeft:'auto', marginRight:'auto', marginTop:'10px',
      boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px'}}>

        <p>Hi! I am an artist, illustrator and part time visual arts teacher. </p>
        <p>My distinctive personal style emanates self-love and being true to yourself.</p> 
        <p>I try to depict beauty, self-confidence and being bold. </p>
      </Card>
    </Col>
    <Col  xs={24} xl={8}>
    <Card 
      hoverable
      headStyle={{color:'#ca2c92'}}
      title="EXHIBITIONS"
      style={{ backgroundColor:'#f8f4ff', fontFamily:'Raleway', width:400, borderRadius:'80px', marginLeft:'auto', marginRight:'auto', marginTop: '10px',
       boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px' }}>

<p>Pink Flame </p>
<p>Pawa Festival </p>
<p>Jay Sketch Master Studio </p>
<p>Pawa 254 </p>
<p>The Hub Karen Pop Art Market </p>

            

       
      </Card>
    </Col>

    <Col xs={24} xl={8}>
    <Card 
      hoverable
      headStyle={{color:'#ca2c92'}}
      title="COMMUNITY INITIATIVES" 
      style={{ backgroundColor:'#f8f4ff', fontFamily:'Raleway', width:400, borderRadius:'80px', marginLeft:'auto', marginRight:'auto', marginTop: '10px', marginBottom: '10px',
      boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px -2px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px, rgba(0, 0, 0, 0.09) 0px 5px 12px 4px'}}>
    
    
   

<p>Think Twice (a second-hand clothes retailer) where I have
done murals in some of their branches; Utawala, and
Eastleigh.</p>
<p>Taught painting at Miss Koch, an organization based in Kariobangi South</p>
<p>Art activities such as Safe Space Graffiti Festival in
Mathare, PAWA Festival in Koinange Street and Rangi Za
East in Railways Museum.</p>
<p>Every other Sunday, I teach Sunday School kids (Little
Lighters) at my Church, City Light.</p>







      </Card>


    </Col>
  </Row>

  
    </MainContainer>
    
    
    </>

  )
}

export default Info;