import React, { useState } from "react";
import { Input, Form, Button } from "antd";
import { StyledRegister, StyledHeading } from "./style";

const Register = () => {
  return (
    <StyledRegister>
      <StyledHeading>Register</StyledHeading>
      <Form labelCol={{ span: 4 }}>
        <Form.Item name="userName" label="UserName">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="email">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="password">
          <Input />
        </Form.Item>
        <Form.Item name="passwordConfirm" label="Password Confirm">
          <Input />
        </Form.Item>
        <Form.Item name="passwordConfirm" wrapperCol={{ span: 4, offset: 4 }}>
          <Button type="primary">Register</Button>
        </Form.Item>
      </Form>
    </StyledRegister>
  );
};

export default Register;
