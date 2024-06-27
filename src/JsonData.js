import React, { useEffect, useState } from 'react';

const JsonData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchData = async () => {

      try {
        const response = await fetch('/data.json');
          setLoading(true)
        const jsonData = await response.json();
        console.log(jsonData,"jsondata")
        setData(jsonData);
        setLoading(false)

      } catch (error) {
        console.log(error)
      }
    };

    fetchData()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }


  return (
    <div>

    
    </div>
  );
};

export default JsonData;
