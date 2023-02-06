import {useState} from "react"
import {Link} from "react-router-dom" 
import Logo from '../../assets/img/rubik.png'

import '../../assets/style/FormLogin.css'

function FormLogin() {
    // const [description, setDescription]=useState("000000"
    //     // {msn:"CC",v:1}
    // );
    // const [username,setUsername]=useState({username:(""),password:("")})
    const[stateForm,setStateform]=useState({username:"Username"})
    const handlerClick=(e)=>{
        e.preventDefault()
        // setDescription({msn:username})
        console.log({msn:username})
    }
    const handlerChangeUsername=(e)=>{
        setStateform({...stateForm,username:e.target.value})
    console.log({...stateForm,username:e.target.value})

    }
    const handlerChangePassword=(e)=>{
        setStateform({...stateForm,password:e.target.value})
        console.log({...stateForm,password:e.target.value})
    }
    
    
    return (
        <div>
            <img src={Logo} alt="Logo de la pagina SPA Single page aplication" />
        <form>
            <input id="username" type="text" value={stateForm.username} onChange={handlerChangeUsername}/>
            <input id='password' type="password" value={stateForm.password} onChange={handlerChangePassword} />
            <button onClick='{}' action=''> 
            <Link to="/"> MENU</Link>
            </button>
            <button onClick={handlerClick} >Iniciar sesión</button>
            <div>
                <label>{JSON.stringify(stateForm)}</label>
            </div>
        </form>
        </div>
      );
}

export default FormLogin;