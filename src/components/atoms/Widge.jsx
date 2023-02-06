import '../../assets/style/Widge.css'

function Widge({item}) {//props es un objeto JS  ==Destructurar {item}
    return (
    <h3>
        {item.id}# {item.name}
    </h3> );
}

export default Widge;