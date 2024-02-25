import React, { useMemo } from "react";
import { useState } from "react";
import './App.css';

const App = () => {
  const [height, setheight] = useState(100);
  const [weight, setweight] = useState(50);


  const onweichange = (e) => {
      setweight(e.target.value);
  }
  const onheichange = (e) => {
      setheight(e.target.value);
  }
  const res = useMemo(()=>{
    const calheight = height/100;
    return (weight/(calheight*calheight)).toFixed(2);

  },[weight,height]);


  
  const bmiCategory = useMemo(() =>{
    const bmi = res;
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  },[res]);

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="silder-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="20"
          max="300"
          onChange={onweichange}
        />

        <p className="silder-output">Height: {height} cm</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="100"
          max="250"
          onChange={onheichange}
        />
      </div>

      <div className="output-section">
        <p className="output-val">Your BMI is : {res}</p>
        <p className="output-res">BMI Category: {bmiCategory}</p>
      </div>
    
    </main>
  );
};

export default App;
