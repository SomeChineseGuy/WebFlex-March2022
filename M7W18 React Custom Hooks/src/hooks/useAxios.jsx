import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url) => {
  const [count, setCount] = useState(1);
  const [fact, setFact] = useState('');

  useEffect(() => {
    axios.get(url)
    .then(data => {
      console.log(data);
      data.data.fact ? setFact(data.data.fact) : setFact(data.data.message);
      
    })
    .catch(err => console.log(err));
  }, [count]);

  const increment = () => {
    setCount(count + 1)
  }

  return [count, fact, increment];

}

export default useAxios;