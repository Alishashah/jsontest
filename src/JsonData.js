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

      <pre>{data.map((ele)=>{
         console.log(ele)
        return(
            <ul>
                <li>{ele.name}</li>
                <li>{ele.age}</li>
                <li>{ele.city}</li>
            </ul>
        )
      })}</pre>
    </div>
  );
};

export default JsonData;
