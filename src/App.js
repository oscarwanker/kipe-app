import './App.css';
import OrderForm from './Components/Form/FormOrder';
import OrderList from './Components/OrderList/OrderList';
import { useState } from 'react';
import {initializeapp} from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCaHL0IMjFgTHFIvLAJ8mmFsvyUURn8MiY",
  authDomain: "datasource-30ecd.firebaseapp.com",
  databaseURL: "https://datasource-30ecd-default-rtdb.firebaseio.com",
  projectId: "datasource-30ecd",
  storageBucket: "datasource-30ecd.appspot.com",
  messagingSenderId: "48114242614",
  appId: "1:48114242614:web:a1456a73ace1f43b33b497"
  
}

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
