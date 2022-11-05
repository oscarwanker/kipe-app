import OrderItem from "../OrderItem/OrderItem";
import styles from './OrderList.modules.css'
import { useState } from 'react';



const OrderList = (props) =>{

  const [passedId, setPassedId] = useState();
  
const onthis = (lol) =>{
  setPassedId(lol)
  console.log(lol)
}
  
const filteredDatalist = props.dataList.filter(snack =>{
  return snack.id !== passedId
})
  
      return(    
        <ul className={styles}>
          <h1>Your Order</h1>
          {props.dataList.map((dat)=>{
          return(             
            <OrderItem
              id={dat.id}
              sn={dat.snack}
              qty={dat.quantity}
              onPassedId={onthis}
              />
          )})}
        </ul>
      )
    }

export default OrderList;