import { useEffect } from 'react';
import './App.css';
import JsonData from './JsonData';
import Apidata from './Apidata';

function App() {
  useEffect(()=>{
    const fetchData = async () => {

      try {
        const response = await fetch('/data.js');
        console.log(response,"---------")
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])
  return (
   <div>
    Task json
    {/* <JsonData/> */}
    <Apidata/>
   </div>
  );
}

export default App;
