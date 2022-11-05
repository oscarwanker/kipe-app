import styles from "./FormOrder.modules.css";
import { useState, useEffect } from "react";
import Card from '../Card/Card'

const OrderForm = (props) => {

  
  const [snack, setSnack] = useState("");
  const [qty, setQty] = useState();
  const [order, setOrder] = useState([]);

  const snackHnd = (event) => {
    setSnack(event.target.value);
    console.log(snack);
  };
  const qtyHnd = (event) => {
    setQty(event.target.value);
    console.log(qty);
  };

  const orderHnd = () => {

      if (snack.length <= 0 || qty.length <= 0) {
      return;
    } 
    
    const rd2 = {
      snack: snack,
      quantity: qty,
    };
    
    setOrder((prev) => {
      return [rd2, ...prev];
    });
    
  };

  useEffect(() => {
    console.log(order)
  }, [order]);

  const SubmitHandler = (event) => {
    event.preventDefault();

    if (snack.length <= 0 || qty.length <= 0) {
      return;
    }

    props.formSavedData(order)
    setSnack('')
    setQty('')
     
  };

  const orderReset = () =>{
   props.onDelete()
    setOrder([]);  
    console.log(order)
 };


  return (
    
    <Card className={styles.container} >
      <form className={styles} onSubmit={SubmitHandler}>   
      <select selected value={snack} onChange={snackHnd}>
            <option hidden>Seleciona un snack</option>
            <option value="Kipe">Kipe</option>
            <option value="Croqueta de Pollo">Croqueta de pollo</option>
            <option value="Bollito De Yuca Queso">Bollito De Yuca Queso</option>
            <option value="Bollito De Yuca Carne">Bollito De Yuca Carne</option>
            <option value="Bollito De papa con queso">Bollito De papa con queso</option>
            <option value="Pastelito de Pollo">Pastelito de Pollo</option>
            <option value="Bollito De Platano maduro con Queso">Bollito De Platano Maduro con Queso</option>
      </select>
        
        <input value={qty} placeholder="Cantidad" type="number" min="1" max="50" onChange={qtyHnd} />
        
        <button type="submit" onClick={orderHnd}>Listar</button>
        <button onClick={orderReset}>Reset List</button>
        
        
      </form>
    </Card>
  );
};

export default OrderForm;
