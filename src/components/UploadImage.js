import React, { useState } from 'react';
import { Card, Form, Upload, Select, Input, Button, Col, Row} from 'antd';
import ImgCrop from 'antd-img-crop';
import styled from 'styled-components';
import { UploadOutlined } from '@ant-design/icons';
import upload from '../Images/upload.svg';


const { Option } = Select;


const U = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;

`


const UploadImage = () => {

    const [fileList, setFileList] = useState([]);

    const formItemLayout = {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 20,
      },
    };
    
      const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
      };

      const normFile = (e) => {
        console.log('Upload event:', e);
      
        if (Array.isArray(e)) {
          return e;
        }
      
        return e?.fileList;
      };
    
  
   
    return (
     <>
<U>
<Col xs={24} xl={8}>
  <Card 
  
    style={{ backgroundColor:'#f8f4ff'}}
    hoverable="true"
   
  >
    <Row  style={{  justifyContent:'center'}}>
    <img style={{ display: 'block', marginLeft:'auto', marginRight:'auto' }} height={150} width={180} src={upload}/>
    </Row>
  
<br></br>
    <Form
    {...formItemLayout}
    layout='horizontal'
    >
 
    <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
       
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
    <br></br>
    <Form.Item
        name="category"
        label="Category"
        rules={[
          {
            required: true,
            message: 'Please select Category'
          },
        ]}
      >
        <Select
          placeholder="Select a category to place your image"
          allowClear
        >
          <Option value="illustration">Illustrations</Option>
          <Option value="watercolors">Water Colors</Option>
          <Option value="pencil">Pencil</Option>
        </Select>
      </Form.Item>
      <br></br>

      <Form.Item
        name="description"
        label="Description"
        rules={[
            { required: false,
              }
            ]}
      >
        <Input.TextArea rows={4} showCount maxLength={100} />
      </Form.Item>

      <br></br>

<Row style={{  justifyContent:'center'}}>

<Form.Item
      
      >
        <Button 
        type="primary" htmlType="submit"
        style={{ borderColor:'#6C63FF',  backgroundColor:'#6C63FF',   fontWeight:'bold'}}
        shape="round"
      
        >
          Submit
        </Button>
      </Form.Item>

</Row>
   

     

  




    </Form>


  </Card>
 
  </Col>

</U>
 
    
 
     </>
        
    )
}

export default UploadImage