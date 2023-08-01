import React, { useState } from "react";
import { Button } from "antd";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <Button style={{ border: 0, fontSize: 18, fontWeight: 500 }}>Login</Button>
      <Button style={{ border: 0, fontSize: 18, fontWeight: 500 }}>Sign up</Button>
    </StyledHeader>
  );
};

export default Header;
