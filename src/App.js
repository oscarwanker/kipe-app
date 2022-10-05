import './App.css';
import OrderForm from './Components/Form/FormOrder';
import OrderList from './Components/OrderList/OrderList';
import { useState } from 'react';

function App() {

  const savedData = (data) =>{
    setList(data);
    console.log(data)
  }

  const [list, setList] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Make your order</h1>
       <OrderForm formSavedData={savedData}/>
       <OrderList dataList={list}/>
      </header>
    </div>
  );
}

export default App;
