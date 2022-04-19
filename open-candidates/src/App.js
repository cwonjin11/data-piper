
import './App.css';
import axios from 'axios'
import Clients from "./components/clients"
import { useEffect, useState } from 'react';

// Declare API URL from rails backend. // app/controllers/api/v1/clients_controller.rb
const API_URL = "http://localhost:3000/api/v1/clients"

// create a function to get the API data
// Used Axios to make asynchronous HTTP request
const getAPIData = () => {
  return axios.get(API_URL)
  .then((response) => response.data)
}



const App = () => {
  //create state
  // useStack hook implemented to add React state to function.
  const [clients, setClients] = useState([]) // it will  import { useState } from 'react'; above //initialize with empty array
  const [input, setInput] = useState("")
  const [output, setOutput] = useState([])

  useEffect( ()=> { //component needs to do something after render.
    let mounted = true //assuming component is mounted
    getAPIData()
      .then((clients) => {
        if(mounted){
          setClients(clients)
        }
    })

    return () =>(mounted = false)  // (If component is called or When cleanup is called, toggle he variable mounted to false
  }, [])

  // The effect hook used to perform side effects in function components
  // to tell React component needs to do something after render.
  useEffect( () => {
    setOutput([])
    // eslint-disable-next-line array-callback-return
    clients.filter( (val) => {  // JS filter method to have a search function
      if(val.candidate.toLowerCase().includes(input.toLowerCase()) || //make input lower case and check if val.candidate includes it.
      val.name.toLowerCase().includes(input.toLowerCase()) ||
      val.email.toLowerCase().includes(input.toLowerCase()))
      {
        setOutput(output => [...output, val])
      }
      
    })
  }, [clients, input])



  return (
    <div className="App">

      <h1>Clients and Candidates</h1>

        <div className="Search">
          <input 
            type="text"
            placeholder="Search by clients / candidates / email..." 
            onChange={ e => setInput(e.target.value)}
          />
        </div>

      <Clients clients={output}/>

    </div>
  );
}

export default App;
