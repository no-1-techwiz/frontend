import {GoogleLogin} from "@react-oauth/google";
import {Input} from "@components/ui/input.jsx";
import {Button} from "@components/ui/button.jsx";
import {jwtDecode} from "jwt-decode";
import {useLoggined} from "@/src/libs/hooks/useLoggined.js";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "@/lib/consts.js";
import {useState} from "react"

export const Login = () => {

    const {setUser} = useLoggined()
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(true)

    return <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="w-[500px] h-max flex flex-col items-center justify-center bg-white rounded-lg shadow-lg gap-5 px-8 py-8" style={{boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
                <img className="w-[40px] h-[40px]" src="https://wanderlog.com/assets/logo.png" alt=""/>
            <div className="flex flex-col items-center justify-center gap-y-1">
                <h1 className="text-3xl font-semibold">Sign {isLogin ? "in" : "up"} to Wanderlog</h1>
                <p className="">Welcome back! Please sign in to continue</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-y-1">
                <GoogleLogin
                    size="large"
                    onSuccess={async credentialResponse => {
                        console.log(credentialResponse);
                        const decoded = jwtDecode(credentialResponse.credential);
                        console.log(decoded)
                        const res = await axios.post(`${BASE_URL}/login/google`,{email: decoded.email,google_id: decoded.sub})
                        console.log(res.data);
                        localStorage.setItem("accessToken", res.data.access_token)
                        localStorage.setItem("user", JSON.stringify({...res.data, img: decoded.picture,name: decoded.given_name}))
                        console.log(res.data.role)
                        navigate(res.data.role === "admin" ? "/admin" : "/")
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
            { isLogin ? <LoginForm setRegis={() => setIsLogin(false)}/> : <RegisterForm setLogin={() => setIsLogin(true)}/>}
        </div>
    </div>
}

const LoginForm = ({setRegis}) => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {

        try{
            if(!email || !password) {
                alert("Please fill all fields");
                return;
            }

            const response = await axios.post(`${BASE_URL}/login`,{email,password} );
                const data = await response.data;
                console.log("data",data)
                localStorage.setItem("token", data.access_token);
                localStorage.setItem("user", JSON.stringify({
                email: data.user.email,
                name: data.user.name,
                img: data.user.img
            }))
            navigate(res.data.role === "admin" ? "/admin" : "/")

        }catch (e) {
            console.log(e)
        }
    };

    return <div className="flex flex-col gap-2 w-full">
        <div>
            <label htmlFor="" className="font-semibold">Email</label>
            <Input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email ...." className="w-full"/>
        </div>
        <div>
            <label htmlFor="" className="font-semibold">Password</label>
            <Input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter password ...." className="w-full"/>
        </div>
        <Button  className="mt-3" onClick={handleLogin}>Sign in</Button>
        <div>
            <p className="text-center">Don't have an account? <a href="#" onClick={setRegis}>Sign up here</a></p>
        </div>
    </div>
}

const RegisterForm = ({setLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setUsername] = useState('');

    const handleLogin = async () => {

        try{
            if(!email || !password) {
                alert("Please fill all fields");
                return;
            }

            const response = await axios.post(`${BASE_URL}/register`,{email,password,name} );
            const data = await response.data;
            console.log("data",data)
            localStorage.setItem("token", data.token);
            setLogin()
            // window.location.href = "/";
        }catch (e) {

        }
    };

    return <div className="flex flex-col gap-2 w-full">
        <div>
            <label htmlFor="" className="font-semibold">User</label>
            <Input value={name} onChange={e => setUsername(e.target.value)} type="string" placeholder="Enter name ...." className="w-full"/>
        </div>
        <div>
            <label htmlFor="" className="font-semibold">Email</label>
            <Input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email ...." className="w-full"/>
        </div>
        <div>
            <label htmlFor="" className="font-semibold">Password</label>
            <Input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter password ...." className="w-full"/>
        </div>
        <Button  className="mt-3" onClick={handleLogin}>Sign up</Button>
        <div>
            <p className="text-center">Have an account? <a href="#" onClick={setLogin}>Sign in here</a></p>
        </div>
    </div>
}