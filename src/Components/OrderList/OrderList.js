import OrderItem from "../OrderItem/OrderItem";
import styles from './OrderList.modules.css'


const OrderList = (props) =>{

      return(
        
        <ul className={styles}>
          <h1>Your Order</h1>
          {props.dataList.map((dat)=>{
          return(             
            <OrderItem
              sn={dat.snack}
              qty={dat.quantity}
              />)
          })}
        </ul>
      
      );
}

export default OrderList;