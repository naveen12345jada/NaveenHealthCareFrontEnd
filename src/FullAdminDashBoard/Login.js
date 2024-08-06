import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [form] = Form.useForm(); // Create a form instance
   const navigate=useNavigate();
  const onFinish = () => {
    if (username === "Admin" && password === "12345") {
      
      <NavLink to="/AdminHome" className="text-white">dvhghv</NavLink>
      document.getElementById("sucessmessage").innerHTML = "Login successful";
      console.log('login successful');
      form.resetFields(); 
       navigate("/AdminHome")
      
      // Reset the form fields
      // setUsername("");
      // setPassword("");

    } else {
      document.getElementById("message").innerHTML = "Please enter valid Username and Password";
      console.log('login failure');
      form.resetFields(); // Reset the form fields
      // setUsername("");
      // setPassword("");
    }
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Col
        xs={20}
        sm={16}
        md={12}
        lg={8}
        xl={6}
        style={{ backgroundColor: 'black', padding: '40px', border: '1px solid', borderRadius: '10px' }}
      >
        <Form
          form={form} // Attach the form instance
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <div className="container mb-3">
            <div className="row">
              <div className="col-12">
                <h5 className="text-white">
                  <i className="bi bi-person-circle text-warning" style={{ fontSize: '25px' }}></i> Admin Dashboard
                </h5>
              </div>
            </div>
          </div>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please enter your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="text-white">Remember me</Checkbox>
            </Form.Item>
            <NavLink className="text-white" to="/forgot">Forgot password</NavLink>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button me-1">
              Submit
            </Button>
            <Button
              type="primary"
              htmlType="button"
              className="login-form-button"
              onClick={() => {
                form.resetFields(); // Reset the form fields on reset button click
                setUsername("");
                setPassword("");
              }}
            >
              Reset
            </Button>
          </Form.Item>
          <div id="message" className="text-danger"></div>
          <div id="sucessmessage" className="text-success"></div>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
