import { LoginForm } from "components/LoginForm/LoginForm";
import { LoginTitle } from "./Login.styled";

export default function Login() {
    return (
        <div>            
            <LoginTitle>Log In</LoginTitle>    
            <LoginForm />
        </div>
    )
}