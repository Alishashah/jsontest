import axios from 'axios';
import React, { useEffect } from 'react'

const Apidata = () => {
        useEffect(()=>{
          const fetchData = async () => {

            try {
              const response = await fetch('/data.json');
              console.log(response,"---------")
            } catch (error) {
              console.log(error)
            }
          }
          fetchData()
        },[])

  return (
    <div>Apidata</div>
  )
}

export default Apidata