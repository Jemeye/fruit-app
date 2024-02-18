import Footer from "../components/footer";
import Header from "../components/header";
import LoginForm from "../components/login-form";

function Login() {
    return ( <>
        <Header></Header>
        <main>  
            <LoginForm></LoginForm>
        </main>
        <Footer></Footer>
    </> );
}

export default Login;