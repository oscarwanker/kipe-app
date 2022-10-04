import OrderItem from "../OrderItem/OrderItem";
import styles from './OrderList.modules.css'

const OrderList = (props) =>{

      return(
        <ul className={styles}>
            {props.dataList.map((data)=>(
                    <OrderItem
                    key={data.id}
                    name={data.name}
                    snack={data.snack}
                    order={data.order}                  
                    />
            ))}
        
        </ul>
      );
}

export default OrderList;