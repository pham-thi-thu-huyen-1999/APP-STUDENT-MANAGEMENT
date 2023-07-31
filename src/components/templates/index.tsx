import React, { ReactNode } from "react";
import { StyledContainer } from "./style";

interface TTemplate {
  children: ReactNode;
}

const Template = ({ children }: TTemplate) => {
  return (
      <StyledContainer>{children}</StyledContainer>
  );
};

export default Template;
