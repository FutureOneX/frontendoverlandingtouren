import { useRef } from "react";

const AddTour = (props) => {

  const whenRef = useRef()
  const whereRef = useRef()
  const countryRef = useRef()
  const kmRef = useRef()
  const dogRef = useRef()
  const awdRef = useRef()
  const imgRef = useRef()

  
  
  function senden() {
    
    let tours = {when:whenRef.current.value,
                where:whereRef.current.value,
                country:countryRef.current.value,
                km:kmRef.current.value,
                dog:dogRef.current.checked,
                awd:awdRef.current.checked,
                // img:imgRef.current.value,
    }
    
    fetch('http://localhost:1111/api/overlandingtouren', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(tours)
  }).then(() => props.reload(prev => !prev))
    .then(() => {
    whenRef.current.value = ''
    whereRef.current.value = ''
    countryRef.current.value = ''
    kmRef.current.value = ''
    dogRef.current.checked = ''
    awdRef.current.checked = ''
    // imgRef.current.value = ''
  })

    tours = {
      datum: whenRef.current.value,
      ort: whereRef.current.value,
      land: countryRef.current.value,
      entfernung: kmRef.current.value,
      hundeoption: dogRef.current.checked,
      awdoption: awdRef.current.checked,
      picture: imgRef.current.value
    }

  }



  return ( 
    <div>
      <input ref={whenRef} type="number" name="Date" id=""placeholder="When" />
      <input ref={whereRef} type="text" name="nameofplace" placeholder="Where" />
      <input ref={countryRef} type="text" name="Country" placeholder="Country" />
      <input ref={kmRef} type="number" name="km" placeholder="How far was the Tour"/>
      <input ref={dogRef} type="checkbox" id="with-dog" name="dog-option" value={"withdog"}/>
      <label htmlFor="with-dog">With Dog</label>
      <input ref={awdRef} type="checkbox" id="4x4-needet" name=""/>
      <label htmlFor="4x4-needet">no 4x4 needed</label>
      {/* <input ref={imgRef} type="file" id="img" name="img" accept="image/*" /> */}
      <button onClick={senden}> Submit </button>
    </div>
   );
}
 
export default AddTour;