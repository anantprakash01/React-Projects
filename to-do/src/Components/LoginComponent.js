import React,{useState} from 'react'
import { useAuth } from './security/AuthContext';
import {
    useNavigate
  } from "react-router-dom";

export default function LoginComponent() {
    const[username,setUsername]=useState("Anant")
    const[password, setPassword] = useState("")
    const[showSuccessMsg, setShowSuccessMsg]= useState(false)
    const[showErrorMsg, setShowErrorMsg]= useState(false)
    const navigate = useNavigate()

    const authContext = useAuth()

    function handleUsername(event) {
        // console.log(event.target.value);
        setUsername(event.target.value)
    }
    const handlePassword=(event)=>{
        setPassword(event.target.value)
        // console.log(event.target.value)
    }
    function handleSubmit(){
        if (authContext.login(username,password)) {
            navigate(`/welcome/${username}`)
        }else{
            setShowErrorMsg(true);
        }
    }
    
    return(
        <div className="Login containe">
            {showErrorMsg && <div className="Error Message">Authentication Failed. Please 
            check your credentials.</div>}
            
            <div className="LoginForm container">
                <div>
                    <label className='my-3 mx-3'>Username</label>
                    <input type='text' name='username' value={username} onChange={handleUsername}/>
                </div>
                <div>
                    <label className='my-3 mx-3'>Password</label>
                    <input type='password' name='password' value={password} onChange={handlePassword}/>
                </div>
                <div>
                    <button className='my-3 mx-3' type="button" name='login' onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}
