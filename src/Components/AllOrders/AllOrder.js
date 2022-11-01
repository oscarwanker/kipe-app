import './AllOrder.css';
import { useState , useEffect} from "react";

const AllOrders = (props) =>{
  
  const [allOrders, setAllOrders] = useState()

  const allHandler = () =>{
    const e = props.forAllOrders;
    const anOrder = {
      id: 1234,
      name: 'lol',
       e
    }
    setAllOrders(anOrder);
  }
  
  useEffect(()=>{
    console.log(allOrders)
  }, [allOrders]);

return (  
  <>
  
      <button onClick={allHandler}>make Order</button>
  
  </>);
  
};

export default AllOrders;