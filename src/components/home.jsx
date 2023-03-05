import { useState } from "react";
import Form from "./form";
import Header from "./header"
import Tables from "./tables";

function Home() {
  const [drivers, setDrivers] = useState([])
  const addDriver = driver => {
    setDrivers([...drivers, driver])
  }
    return (
      <div>
        <Header/>
        <Form addDriver={addDriver}/>
        <Tables drivers={drivers}/>
      </div>
     
    );
  }
  
  export default Home;
  