import { useEffect } from 'react';
import './App.css';
import JsonData from './JsonData';
import Apidata from './Apidata';

function App() {
  useEffect(()=>{
    const fetchData = async () => {

      try {
        const response = await fetch('/api.js');
        const jsonData = await response.json();
        console.log(jsonData,"jsondata")


      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])
  return (
   <div>
    Task json
    <JsonData/>
    <Apidata/>
   </div>
  );
}

export default App;
