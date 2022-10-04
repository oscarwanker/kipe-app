
import styles from './Order.modules.css'

const OrderItem = (props) =>{


    return(
    <li>
        <h1 className={styles.name}>{props.name}</h1>
        {props.order.map((dat)=>(
        <p>{`Snack: ${dat.quantity}x ${dat.snack}`}  </p>
        
        ))}
    </li>
    );
};

export default OrderItem;