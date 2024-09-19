import {GoogleLogin} from "@react-oauth/google";
import {Input} from "@components/ui/input.jsx";
import {Button} from "@components/ui/button.jsx";
import {jwtDecode} from "jwt-decode";
import {useLoggined} from "@/src/libs/hooks/useLoggined.js";
import {useNavigate} from "react-router-dom";

export const Login = () => {

    const {setUser} = useLoggined()
    const navigate = useNavigate()

    return <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="w-[500px] h-max flex flex-col items-center justify-center bg-white rounded-lg shadow-lg gap-5 px-8 py-8" style={{boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
                <img className="w-[40px] h-[40px]" src="https://wanderlog.com/assets/logo.png" alt=""/>
            <div className="flex flex-col items-center justify-center gap-y-1">
                <h1 className="text-3xl font-semibold">Sign in to Wanderlog</h1>
                <p className="">Welcome back! Please sign in to continue</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-y-1">
                <GoogleLogin
                    size="large"
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                        const decoded = jwtDecode(credentialResponse.credential);
                        console.log(decoded.email)
                        localStorage.setItem("user", JSON.stringify({email: decoded.email, name: decoded.given_name, img: decoded.picture}))
                        console.log(decoded);
                        localStorage.setItem("accessToken", credentialResponse.credential)
                        navigate("/")
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                    useOneTap
                />
                <div className="relative w-full h-[1.5px] bg-gray-300 mt-6">
                    <div className="absolute left-1/2 top-1/2 bg-white px-2 font-semibold" style={{transform:"translate(-50%,-60%)"}}>or</div>
                </div>
            </div>
            <LoginForm />
        </div>
    </div>
}

const LoginForm = () => {

    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        if(!email || !password) {
            alert("Please fill all fields");
            return;
        }

        const response = await fetch("/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        if (response.status === 200) {
            const data = await response.json();
            localStorage.setItem("token", data.token);
            window.location.href = "/";
        } else {
            alert("Invalid credentials");
        }
    };

    return <div className="flex flex-col gap-2 w-full">
        <div>
            <label htmlFor="" className="font-semibold">Email</label>
            <Input type="email" placeholder="Enter email ...." className="w-full"/>
        </div>
        <div>
            <label htmlFor="" className="font-semibold">Password</label>
            <Input type="password" placeholder="Enter password ...." className="w-full"/>
        </div>
        <Button  className="mt-3">Sign in</Button>
        <div>
            <p className="text-center">Don't have an account? <a>Sign up here</a></p>
        </div>
    </div>
}