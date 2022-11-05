import './AllOrder.css';
import { useState , useEffect} from "react";

const AllOrders = (props) =>{
  const [name, setName] = useState("");
  const [allOrders, setAllOrders] = useState([])

    const nameHnd = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const allHandler = () =>{
    const order = props.forAllOrders;
    const id = Math.floor(Math.random()* 1000);
  
    const anOrder = {
      Client:{
        name,
        id   
      },
       order
    }
    setAllOrders((prev)=>{
      return [anOrder, ...prev]
    });
  }
  
  useEffect(()=>{
    console.log(allOrders)
  }, [allOrders]);

return (  
  <>
      <input placeholder='Your name' value={name} onChange={nameHnd}></input>
      <button onClick={allHandler}>make Order</button>
  
  </>);
  
};

export default AllOrders;