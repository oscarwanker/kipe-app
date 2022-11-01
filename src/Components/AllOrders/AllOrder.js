import './AllOrder.css';
import Card from '../Card/Card'
import { useState } from "react";


const AllOrders = (props) =>{
  
  const [allOrders, setAllOrders] = useState([])

  const allHandler = () =>{
    
    const e = props.forAllOrders;
    
    const anOrder = {
      id: 1234,
      name: 'lol',
       e
    }
    setAllOrders(anOrder);
    console.log(allOrders)
  }

return (  
  <>
    <Card>
      <button onClick={allHandler}>make Order</button>
    </Card>
  </>)
  
};

export default AllOrders;