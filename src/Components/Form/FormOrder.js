import styles from "./FormOrder.modules.css";
import { useState, useEffect } from "react";

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
    const id = Math.random() * 1000;
    
    const ordr = [{
        id: id,
        name: name,
        order
      }];

    props.formSavedData(ordr);
    //    console.log(order)
  };

  return (
    <>
      <form className={styles.form} onSubmit={SubmitHandler}>
        <input placeholder="Name" onChange={nameHnd} />
        <select name={null} onChange={snackHnd}>
          <option></option>
          <option value="Kipe">Kipe</option>
          <option value="Bollito De Yuca queso">Bollito De yuca queso</option>
          <option value="Bollito De Yuca carne">Bollito De yuca carne</option>
          <option value="Bollito De Platano maduro con queso">Bollito De yuca carne</option>
        </select>
        <input type="number" min="1" max="50" onChange={qtyHnd} />
        <button onClick={orderHnd}>
            Listar
        </button>
        <button type="submit" onClick={SubmitHandler}>
          Ordenar
        </button>
      </form>
    </>
  );
};

export default OrderForm;
