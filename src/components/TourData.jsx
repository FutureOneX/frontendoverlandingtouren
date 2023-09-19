const TourData = ({trip}) => {
  return ( 
    <div>
      <p>Date: {trip.when}</p>
      <p>Location: {trip.where}</p>
      <p>Country: {trip.country} </p>
      <p>Distance: {trip.km}</p>
      <p> {trip.dog?"With dogo":"Without dogo :("}</p>
      <p> {trip.awd?"without AWD":"Yes was used"}</p>
    </div>
  );
}

export default TourData;