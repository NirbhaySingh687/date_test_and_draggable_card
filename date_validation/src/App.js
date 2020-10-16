import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button
} from "reactstrap"


function App() {
  const [dateString,setDateString] = useState("")
  const handleSubmit = (e)=>{
    e.preventDefault()
    var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(dateString);

    if (isValid) {
      alert('Save SuccessFully')
      setDateString('')
    } else {
      alert(`Date Format is not correct`)
    }
  }
  return(
    <Form onSubmit = {handleSubmit}>
            <FormGroup>
                <InputGroup>
                <Input 
                    type="text"
                    name="date"
                    id='date'
                    placeholder='Your next date'
                    value={dateString}
                    onChange={(e)=> setDateString(e.target.value)}
                />
                <InputGroupAddon addonType='prepend'>
                    <Button
                        color='warning'
                    >Submit
                    </Button>
                </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
  );
}

export default App;
