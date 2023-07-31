import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "antd";
import { StyledRegister, StyledField, StyledHeading } from "./style";

type TForm = {
  userName: string;
  email: string;
  password: string;
  passwordConfirm: string;
};
const Register = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<TForm>();
  const onSubmit = handleSubmit((data) => console.log(data, errors));
  return (
    <StyledRegister>
      <StyledHeading>Register</StyledHeading>
      <form onSubmit={onSubmit}>
        <StyledField>
          <label>User Name</label>
          <input {...register("userName", { required: true })} />
        </StyledField>
        <StyledField>
          <label>Email</label>
          <input {...register("email", { required: true })} />
        </StyledField>
        <StyledField>
          <label>Password</label>
          <input {...register("password", { required: true })} />
        </StyledField>
        <StyledField>
          <label>Password Confirm</label>
          <input {...register("password", { required: true })} />
        </StyledField>
      </form>
    </StyledRegister>
  );
};

export default Register;
