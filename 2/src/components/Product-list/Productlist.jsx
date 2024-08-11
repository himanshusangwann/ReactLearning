import { useEffect, useState } from "react";
import Productitem from "./compo/Productitem";

function B1() {
  return <button>Click1</button>;
}
const flag = true;

function Productlist({ name, city, d }) {
  const [state, setstate] = useState(flag);
  const [count, setcount] = useState(0);
  const [color, setcolor] = useState(false);
  const ToggleText = () => {
    setstate(!state);
  };
  function increase() {
    setcount(count + 1);
  }

  function decrease() {
    setcount(count - 1);
  }

  useEffect(() => {
    setstate(!state);
  }, []);

  useEffect(() => {
    if(count===10){
        setcolor(true)
    }
  }, [count]);
  console.log(color)
  return (
    <div>
      {flag ? <h1>{name}</h1> : <h1>{city}</h1>}
      {name}
      {city}
      <ul>
        {d.map((single, index) => (
          <Productitem a={single} />
        ))}
      </ul>

      {state ? <h1>{name}</h1> : <h1>hello</h1>}
      <button onClick={ToggleText} className="font-bold ">
        Toggle Text
      </button>

      <div>
        <button onClick={increase} >Count Increase</button>
        <button onClick={decrease}>Count decrease</button>
        <p>This is {count}</p>
      </div>
    </div>
  );
}

export default Productlist;
