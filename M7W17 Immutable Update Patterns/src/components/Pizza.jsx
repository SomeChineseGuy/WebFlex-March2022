import { useState } from "react";

const Pizza = () => {
  const [topping, setTopping] = useState('')
  // const [toppings, setToppings] = useState([])
  // const [crust, setCrust] = useState('Stuffed')

  const [pizza, setPizza] = useState({
    toppings: [],
    crust: "Stuffed",
    size: "L"
  })

  const addTopping = () => {
    setPizza((prev) => {
      return {
        ...prev,
        toppings: [
          ...prev.toppings,
          topping
        ]
      }
    })
    setTopping('');
  }

  const updateCrust = (event) => {
    setPizza((prev) => {
      return {
        ...prev,
        crust: event.target.value
      }
    })
  }

  const updatePizzaSize = (event) => {
    setPizza((prev) => {
      return {
        ...prev,
        size: event.target.value
      }
    })
  }

  const mappedToppings = pizza.toppings.map((item, idx) => {
    return <p key={idx}>{item}</p>
  })

  return (
    <div>
      <h1>Pizza Place (not a hut)</h1>
      <label>Pick your Toppings</label>
      <input 
        type="text" 
        value={topping}
        onChange={event => setTopping(event.target.value)}
      />
      <button onClick={addTopping}>Add Topping</button>
      <div>
        {mappedToppings}
      </div>
      <div>
        <h1>Pick your Crust!</h1>
        <label>Crust</label>
        <input 
          type="text" 
          value={pizza.crust}
          onChange={updateCrust}
        />
      </div>

      <div>
        <h2>Size: {pizza.size}</h2>
        <select value={pizza.size} onChange={updatePizzaSize}>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
          <option value="XL">Extra Large</option>
        </select>
      </div>
      
    </div>
  )
}

export default Pizza;