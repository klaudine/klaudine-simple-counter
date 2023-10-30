// useState, useEffect, setInterval, props
import { useEffect, useState } from "react"
import SimpleCounter from "./SimpleCounter"
import calculateSeconds from "./library/time";

function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [counter])




  return (
    <>
      <SimpleCounter
        thousands= {calculateSeconds(counter, 1000)} 
        hundreds= {calculateSeconds(counter, 100)}
        tens= {calculateSeconds(counter, 10)} 
        ones = {calculateSeconds(counter, 1)}
        />
    </>
  )
}

export default App
