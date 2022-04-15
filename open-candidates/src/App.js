
import './App.css';
import axios from 'axios'
import Clients from "./components/clients"
import { useEffect, useState } from 'react';


const API_URL = "http://localhost:3000/api/v1/clients"

const getAPIData = () => {
  return axios.get(API_URL).then((response) => response.data)
}



const App = () => {
  const [clients, setClients] = useState([])
  const [input, setInput] = useState("")
  const [output, setOutput] = useState([])


  useEffect( ()=> {
    let mounted = true
    getAPIData().then((client) => {
      if(mounted){
        setClients(client)
      }
    })
    return () =>(mounted = false) 
  }, [])


  useEffect( () => {
    setOutput([])
    // eslint-disable-next-line array-callback-return
    clients.filter( (val) => {
      if(val.candidate.toLowerCase().includes(input.toLowerCase()) ||
      val.name.toLowerCase().includes(input.toLowerCase()) ||
      val.email.toLowerCase().includes(input.toLowerCase()))
      {
        setOutput(output => [...output,val])
      }
    })
  }, [clients, input])



  return (
    <div className="App">

      <h1>Clients and Candidates Lists</h1>

        <div className="Search">
          <input 
            type="text"
            placeholder="Search by Clients or Candidates" 
            onChange={ e => setInput(e.target.value)}
          />
        </div>

      <Clients clients={output}/>

    </div>
  );
}

export default App;
