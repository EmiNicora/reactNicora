
import "./styles.css"


const Item = ({ item }) => (
    <div className="padre-flex">
        <div className="card1">
        <div>
        <img src={item.imagen} alt="varita de Harry Potter" />
        </div>
        <h1 className="tituloProducto">{item.title} </h1>
        <p className="colorDescripcion">{item.descripcion}</p>
        </div>
    </div>
);

export default Item;