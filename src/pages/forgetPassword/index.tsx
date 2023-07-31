import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';
import './styles.scss';

interface ForgetPasswordForm {
  username: string;
}

const ForgetPassword = (): JSX.Element => {
  const onFinish = (values: ForgetPasswordForm) => {
    //handle axios in there
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="forget-password-page">
      <div className="forget-password-form">
        <Form
          className="component-form"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!'
              }
            ]}>
            <Input />
          </Form.Item>

          {/* <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              },
              {
                min: 10,
                message: 'Please min 10 digits'
              }
            ]}>
            <Input.Password />
          </Form.Item> */}

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16
            }}>
            <Row>
              <Col span={12}>
                <Button type="default">Login</Button>
              </Col>
              <Col span={12}>
                <Button type="primary" htmlType="submit">
                  Send
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgetPassword;
