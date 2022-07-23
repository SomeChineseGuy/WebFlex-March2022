import { useEffect, useState } from "react"
import useLocation from "../hooks/useLocation"

const Location = () => {
  // const [ coords, setCoords] = useState({lat: 0, lon: 0});

  // useEffect(()=> {
  //   navigator.geolocation.getCurrentPosition(event => {
  //     setCoords({lat: event.coords.latitude, lon: event.coords.longitude})
  //   })
  // }, [])

  const coords = useLocation();

  return (
    <div>
      <h1>Hello</h1>
      <h4>Current Position -  Lat: {coords.lat} Lon: {coords.lon}</h4>
    </div>
  )
}

export default Location