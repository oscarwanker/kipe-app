
import './Order.css'


const OrderItem = (props) =>{


    return(
      
    <li> 
        <h1>Orden</h1>           
       
      <section className='sect' >
        <h2>{props.name}</h2>
             
          {props.order.map((dat)=>(    
              <div className='lol'>
                <p className='qty'>{dat.quantity}</p>
                <p className='snack'> {dat.snack}</p>
              </div>
                ))}
               
          </section>
      
    </li>
       
    );
};

export default OrderItem;