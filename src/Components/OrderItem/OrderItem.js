
import styles from './Order.modules.css'


const OrderItem = (props) =>{


    return(
      
    <li className={styles}>
      
        <h1>{props.name}</h1>        
        <section>
        <h2>Orden# {props.id}</h2>
        {props.order.map((dat)=>(<p>{`Snack: ${dat.quantity}x ${dat.snack}`}</p>))}
        </section>
    </li>
       
    );
};

export default OrderItem;