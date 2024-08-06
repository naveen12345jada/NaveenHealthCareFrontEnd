import React from 'react';
import {  UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';

const ForgotPassword = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Col xs={20} sm={16} md={12} lg={8} xl={6} style={{  backgroundColor: 'black' ,padding:"40px",border:"1px solid", borderRadius:"10px" }} >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <div className='container mb-3' >
           <div className='row'>
           <div className='col-12'>
          
            <h5 className='text-white'>  <i className="bi bi-person-circle text-warning " style={{fontSize:"25px"}}></i> Admin Dashboard</h5>
            </div>
            </div>
          </div>
          <Form.Item
            name="username" 
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Enter Email"
            />
          </Form.Item>
         
          
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Send Email
            </Button>
            <NavLink to="/" className="text-white ms-3">Back to Login</NavLink>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default ForgotPassword;
