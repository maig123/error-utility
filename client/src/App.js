import React, { useState, useEffect } from 'react'
import Form from './Components/Form'
import ErrorInfo from './Components/ErrorInfo'

function App() {
  const [errorvalues, setErrorValues] = useState([]);
 

  // Modify the current state by setting the new data to
  // the response from the backend

  useEffect(()=>{
    fetch('/current',{
      'methods':'GET',
      headers : {
        'Content-Type':'application/json'
      }
    })
    .then(response => response.json())
    .then(response => setErrorValues(response))
    .catch(error => console.log(error))


  },[])


  return (<div className="App">

  <div className="container">
    <div className="row p-3">
      <div className="text-center">
      <h1>Set Error Rate</h1>
      </div>
    </div>
  <Form insertedValues/>

  </div>
  
  </div>
);

}

export default App