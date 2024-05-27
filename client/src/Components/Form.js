import { useState } from 'react';
import APIService from '../Components/APIService'
import ErrorInfo from '../Components/ErrorInfo'

const Form = (props) => {
    
    const [errorrate, setErrorRate] = useState('')
    const [errorcode, setErrorCode] = useState('')
    const [body, setBody] = useState('')
    const [errorvalues, setErrorValues] = useState('')
 
    const insertArticle = () =>{
      APIService.InsertErrorInfo({errorrate,errorcode,body})
      .then((response) => setErrorValues(response))
      .catch(error => console.log('error',error))
    }

    const handleSubmit=(event)=>{ 
      event.preventDefault()
      insertArticle()
      setErrorRate('')
      setErrorCode('')
      setErrorValues('')
      setBody('')
    }

  return (
    <form onSubmit = {handleSubmit} >

    <div>
    <label>Error Rate:</label>
    <input 
    type="integer"
    className="form-control" 
    placeholder ="Error rate as integer 0-100"
    value={errorrate}
    onChange={(e)=>setErrorRate(e.target.value)}
    required
    />
    </div>

    <div>
    <label>Error Code:</label>
    <input 
    type="integer"
    className="form-control" 
    placeholder ="ErrorCode"
    value={errorcode}
    onChange={(e)=>setErrorCode(e.target.value)}
    required
    />
    </div>


    <button className="btn btn-primary mt-2">set error</button>
    <div><ErrorInfo errorvalues={errorvalues}></ErrorInfo></div>
  </form>

  )}

export default Form;