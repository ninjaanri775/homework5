import React, { useState, useEffect } from "react";
import Timer from './component/timer';
import './App.css'

function App() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const secret = "reschool";
  const [find1, find2] = useState(""); 
  const [found1, found2] = useState("");


  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setX(e.clientX)
      setY(e.clientY)
    })
  })

  useEffect(() => {
    function finding(el) {
      const found = find1 + el.key;

      if (found.includes(secret)) {
        found2(`secret word!: ${secret}`);
      } else {
        found2("");
      }
      find2(found);
    }

    window.addEventListener("keypress", finding);

  }, [find1]);


  console.log(x,y)
  return (
    <div>
      <h2>CaN YoU fInD SeCrEt WooRd?</h2>
      <p>{found1}</p>


      <Timer/>

      <h3>X: {x}</h3>
      <h3>Y: {y}</h3>
    </div>
  );
}

export default App;
