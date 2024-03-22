import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { RegisterTitle } from "./Register.styled";

export default function Register() {
  return (
    <div>     
      <RegisterTitle>Registration</RegisterTitle>    
      <RegisterForm />
    </div>
  );
}