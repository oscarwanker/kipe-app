import './App.css';
import OrderForm from './Components/Form/FormOrder';
import OrderList from './Components/OrderList/OrderList';
import AllOrder from './Components/AllOrders/AllOrder';
import { useState } from 'react';

const MOCK_data = [{
  "snack": "Croqueta de Pollo",
  "quantity": "2"
},{
  "snack": "Croqueta de Pollo",
  "quantity": "2"
}];

function App() {

  const [list, setList] = useState(MOCK_data);

    const savedData = (data) =>{
      setList(data);
    console.log(list)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Make your order</h1>
       <OrderForm formSavedData={savedData}/>
       <OrderList dataList={list}/>
       <AllOrder forAllOrders={list}/> 
      </header>
    </div>
  );
}

export default App;
