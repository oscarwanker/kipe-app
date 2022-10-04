import styles from "./FormOrder.modules.css";
import { useState, useEffect } from "react";
import Card from '../Card/Card'

const OrderForm = (props) => {

  const [name, setName] = useState("");
  const [snack, setSnack] = useState("");
  const [qty, setQty] = useState();

  const [order, setOrder] = useState([]);

  const nameHnd = (event) => {
    setName(event.target.value);
    console.log(name);
  };
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

    if (name.length <= 0 || snack.length <= 0 || qty.length <= 0) {
      return;
    }
    const id = Math.floor(Math.random()* 1000);
    
    const ordr = [{
        id: id,
        name: name,
        order
      }];

    props.formSavedData(ordr);
    setSnack('')
    setQty('')
    //    console.log(order)
  };

  return (
    <Card className={styles.container} >
      <form className={styles} onSubmit={SubmitHandler}>
        <input placeholder="Name" value={name} onChange={nameHnd} />
        
        <select selected value={snack} onChange={snackHnd}>
          <option hidden>Seleciona un snack</option>
          <option value="Kipe">Kipe</option>
          <option value="Bollito De Yuca Queso">Bollito De Yuca Queso</option>
          <option value="Bollito De Yuca Carne">Bollito De Yuca Carne</option>
          <option value="Bollito De Platano maduro con Queso">Bollito De Platano Maduro con Queso</option>
        </select>
        <input value={qty} placeholder="Cantidad" type="number" min="1" max="50" onChange={qtyHnd} />
        <button onClick={orderHnd}>
            Listar
        </button>
        <button type="submit" onClick={SubmitHandler}>
          Ordenar
        </button>
      </form>
    </Card>
  );
};

export default OrderForm;
