import './Order.css'

const OrderItem = (props) =>{

  const idPasser = () => {
    props.onPassedId(props.id)
  }
  
  return(
      
   <div>
    <li>
      <div className='lol'>
          <p className='qty'>{props.qty} </p>
          <p className='snack'> {props.sn}</p>
        <button onClick={idPasser}>X</button>
      </div>
    </li>
   </div>       
  );
};

export default OrderItem;