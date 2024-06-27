import axios from 'axios';
import React, { useEffect } from 'react'

const Apidata = () => {
      const fetchBranchNames = async () => {
        const obj = {
          query: `[dbo].[spasofware_web_proc_module_view_membership_branchname_getdata]`,
          queryArr: []
        };
        try {
          const getData = await axios.get(obj);
         console.log(getData)
        } catch (error) {
          toast.error("Failed to fetch branch names");
        }
      };


    useEffect(()=>{

        fetchBranchNames();
    })
  return (
    <div>Apidata</div>
  )
}

export default Apidata