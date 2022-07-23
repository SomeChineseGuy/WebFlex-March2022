import axios from "axios";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

const Effect = () => {
  // const [count, setCount] = useState(1);
  // const [fact, setFact] = useState('')

  // useEffect(() => {
  //   axios.get('https://catfact.ninja/fact')
  //   .then(data => {
  //     console.log(data.data.fact)
  //     setFact(data.data.fact)
  //   })
  //   .catch(err => console.log(err))
  // }, [count])

  // const increment = () => {
  //   setCount(count + 1)
  // }

  const [count, fact, increment] = useAxios('https://catfact.ninja/fact');
  const [count2, fact2, increment2] = useAxios('https://dog.ceo/api/breeds/image/random');

  return (
    <div>
      <h1>This is the Effect!</h1>
      <h2>Cat Fact Count: {count}</h2>
      <h2>Fact: {fact}</h2>
      <button onClick={increment}>Increase</button>
      <h2>Dog Image Count: {count2}</h2>
      <img src={fact2} alt="" />
      <button onClick={increment2}>Increase</button>
    </div>
  )
}

export default Effect;