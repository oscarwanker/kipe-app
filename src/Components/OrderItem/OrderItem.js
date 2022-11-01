import './Order.css'


const OrderItem = (props) =>{

  return(
      
   <div>
    <li>
      <div className='lol'>
          <p className='qty'>{props.qty} </p>
          <p className='snack'> {props.sn}</p>
      </div>
    </li>
   </div>
       
    );
};

export default OrderItem;