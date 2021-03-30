import React, { useState, memo } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Form, Input, Button, Layout, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface LoginProps {
  onLogin: Function;
}

interface finishValue {
  email: string;
  password: string;
}

const Login: React.FC<LoginProps> = props => {
  const history = useHistory();

  const [account, setAccount] = useState({
    email: 'ittroller81@gmail.com',
    password: 'Minh-1995',
  });

  const onFinish = (values: finishValue) => {
    const { email, password } = values;
    props.onLogin({ email, password }, onLoginSuccess);
  };

  const onLoginSuccess = () => history.push('/dashboard');

  return (
    <Row className="auth-page">
      <Col span={6}></Col>
      <Col span={12}>
        <Layout className="auth-form">
          <h3 className="head-form">LOGIN</h3>

          <Form name="normal_login" className="login-form" initialValues={account} onFinish={onFinish}>
            <Form.Item name="email" rules={[{ type: 'email' }, { required: true }]}>
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true }]}>
              <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <span className="login-form-forgot">Forgot password</span>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <Link to="/register">register now!</Link>
            </Form.Item>
          </Form>
        </Layout>
      </Col>
      <Col span={6}></Col>
    </Row>
  );
};

export default memo(Login);

/* <form onSubmit={e => onLogin(e)}>
        <div>
          <p>Email</p>
          <input placeholder="Enter email" value={email} name="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <p>Password</p>
          <input
            placeholder="Enter password"
            value={password}
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Sign in</button>
        </div>
      </form>
      <button type="button" onClick={() => changeLang(options[0])}>
        EN
      </button>
      <button type="button" onClick={() => changeLang(options[1])}>
        VN
      </button> */
