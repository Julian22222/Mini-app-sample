import { useState } from "react";
import InputBtn from "./InputBtn";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1 className="counter">Customer Counter:{value}</h1>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increment Btn
      </button>
      {/*  */}
      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        Decrement Btn
      </button>

      {/* counter ^^^^^^^^ */}
      {/* 
// 

 */}
      <Menu />
      <AddItem />
      <InputBtn />
    </div>
  );
}

const Menu = () => {
  return (
    <>
      <div className="Sidebar">
        <h2>Available dishes for today:</h2>
        <p>Lasagna</p>
        <p>Honey Garlic Salmon</p>
        <p>Tomato Soup</p>
        <p>Cheescake</p>
      </div>
    </>
  );
};

const AddItem = () => {
  return <h1>Items to add</h1>;
};

export default App;
