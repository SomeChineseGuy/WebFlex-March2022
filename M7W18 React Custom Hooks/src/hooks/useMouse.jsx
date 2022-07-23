import { useEffect, useState } from "react";

const useMouse = () => {
  const [coords, setCoords] = useState({x: 0, y: 0});
  useEffect(() => {
    // document.addEventListener('mousemove', event => {
    //   setCoords({x: event.x, y: event.y});
    // })

    const mousemoveHandler = (event) => {
      setCoords({x: event.x, y: event.y});
    }

    document.addEventListener('mousemove', mousemoveHandler);

    // const cleanUp = () => {
    //   document.removeEventListener('mousemove', mousemoveHandler)
    // }

    // return cleanUp

  }, [coords]);

  return coords;
}

export default useMouse;