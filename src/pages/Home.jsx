import {Link} from "react-router-dom" 
import Header from "../components/atoms/Header";
import ListStudent from "../components/molecules/ListStudent";
import Footer from "../components/atoms/Footer";
import Login from "../components/atoms/FormLogin";
function Home(){
    const listStudent=[{id:1,name:"Darinel",},{id:2,name:"Ovando",},{id:3,name:"Martin",},{id:4,name:"Manuel",},{id:5,name:"Alan",}]
    return(
        <>
            <Header/>
            <ListStudent listStudent={listStudent}></ListStudent>
            <Link to="/Login/">Iniciar Sesion</Link>
            <Link to="/Registration">Registrarte</Link>
            <Footer/>
        </>
    )
}
export default Home;