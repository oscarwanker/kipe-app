import OrderItem from "../OrderItem/OrderItem";
import styles from './OrderList.modules.css'
import Card from '../Card/Card'
const OrderList = (props) =>{

      return(
        <Card>
        <ul className={styles}>
            {props.dataList.map((data)=>(
              <OrderItem
              key={data.id}
              id={data.id}
              name={data.name}
              snack={data.snack}
              order={data.order}                  
              />
            ))}
        
        </ul>
        </Card>
      );
}

export default OrderList;