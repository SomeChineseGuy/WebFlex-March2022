import { useEffect, useState } from "react";

const useLocation = () => {
  const [ coords, setCoords] = useState({lat: 0, lon: 0});

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(event => {
      setCoords({lat: event.coords.latitude, lon: event.coords.longitude})
    })
  }, []);

  return coords;
}

export default useLocation;