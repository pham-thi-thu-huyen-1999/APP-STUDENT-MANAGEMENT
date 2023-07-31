import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from './services/store';
import ForgetPassword from "./pages/forgetPassword";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./services/store";
import Register from "./components/register";
import Template from "./components/templates";

const App = () => {
  const user = useSelector((state: RootState) => state.info);
  return (
    <>
      <ForgetPassword />
      <div style={{ background: "#1da1f28c" }}>
        <Template>
          <Register />
        </Template>
      </div>
    </>
  );
};

export default App;
