import { useState } from "react"
import Button from "../Button"

const LoginForm = () => {
    const [loginForm,setLoginForm]=useState({
        email:"",
        password:""
    })
    const [error,setError]=useState({
        email:"",
        password:""
    })

    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        const {name,value}=e.target
        setLoginForm((prev)=>({...prev,[name]:value}))
        const trimmedValue=value.trim()
        if(trimmedValue.length>0){
            setError((prev)=>({...prev,[name]:""}))
        }
        console.log(name +"and" +value)
    }
function validate() {
  let isValid = true;

  // reset previous errors
  setError({ email: "", password: "" });

  // email required
  if (loginForm.email.trim() === "") {
    setError(prev => ({ ...prev, email: "email is required" }));
    isValid = false;
  } 
  // email format
  else if (!loginForm.email.includes("@")) {
    setError(prev => ({ ...prev, email: "email is not valid" }));
    isValid = false;
  }

  // password required
  if (loginForm.password.trim() === "") {
    setError(prev => ({ ...prev, password: "password is required" }));
    isValid = false;
  }

  return isValid;
}
    function handleSubmit(){
  if (!validate()){
 return;
  }

    }
    console.log(loginForm)
  return (
    <div className="bg-white text-black p-4 ">
        <h2 className="font-semibold text-center p-2">Login form</h2>
        <div className="mb-2 flex">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="text" value={loginForm.email} onChange={handleChange} className="border"/>
        <span className="text-red-500">{error.email}</span>
        </div>
        <div className="mb-2">
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="text" value={loginForm.password} onChange={handleChange}/>
          <span className="text-red-500">{error.password}</span>
        </div>
<Button variant="outline" onClick={handleSubmit} className="flex items-center" >Submit</Button>
    </div>
  )
}

export default LoginForm