import { useEffect, useState } from "react";
import TourData from "./TourData";
import Addtour from "./Addtour";


const TourList = () => {
  const [tours, setTours] = useState([])
  const[refresh, setRefresh] = useState(false)

  useEffect(() => {
    fetch('http://localhost:1111/api/overlandingtouren')
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
    .then(data => setTours(data))
    .catch(err => console.log(err))
  }, [refresh])
  return ( 
    <div>
      <h1>Unsere Touren</h1>
      <Addtour  reload={setRefresh}/>
      {tours.map((item, key) => <TourData trip={item} key={key} />)}
    </div>
  );
}
 
export default TourList;