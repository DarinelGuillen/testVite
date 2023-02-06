import {useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import Logo from '../../assets/img/start-button.png'
import '../../assets/style/FormRegistration.css'


function FormRegistration() {
    const navigate= useNavigate()
    // const name=useRef();
    // const username=useRef();
    // const password=useRef();
    const form=useRef()    

    const handlerClick=(e)=>{
        e.preventDefault();
        // alert('nombre: '+name.current.value+
        // '  username : '+ username.current.value+
        // '  password : '+password.current.value )
        // navigate("/")
        const newForm=new FormData(form.current)
        alert('nombre: '+newForm.get('name')+ 
        'username: '+newForm.get('username')+
        'password: '+newForm.get('password'))
        
    }
    return ( 
       
    <form ref={form}>
        <img src={Logo} alt="llll" />
        <div>
        <label className='caption' htmlFor='name'>Nombre
        <input  id='name' type="text" name='name'/>
        </label>
        </div>
        <div>
        <label className='caption'>Usuario 
        <input type="text" name='username' />
        </label>
        </div>
        <div>
        <label className='caption'>Contrasena
        <input type="password" name='password'/>
        </label>
        </div>
        <button onClick={handlerClick}> Registro</button>
    </form>
    
     );
}

export default FormRegistration;